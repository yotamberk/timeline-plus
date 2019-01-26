import * as util from './util';
import * as Queue from './Queue';

/**
 * DataSet
 * // TODO: add a DataSet constructor DataSet(data, options)
 *
 * Usage:
 *     var dataSet = new DataSet({
 *         fieldId: '_id',
 *         type: {
 *             // ...
 *         }
 *     });
 *
 *     dataSet.add(item);
 *     dataSet.add(data);
 *     dataSet.update(item);
 *     dataSet.update(data);
 *     dataSet.remove(id);
 *     dataSet.remove(ids);
 *     var data = dataSet.get();
 *     var data = dataSet.get(id);
 *     var data = dataSet.get(ids);
 *     var data = dataSet.get(ids, options, data);
 *     dataSet.clear();
 *
 * A data set can:
 * - add/remove/update data
 * - gives triggers upon changes in the data
 * - can  import/export data in various data formats
 *
 * @param {Array} [data]    Optional array with initial data
 * @param {Object} [options]   Available options:
 *                             {string} fieldId Field name of the id in the
 *                                              items, 'id' by default.
 *                             {Object.<string, string} type
 *                                              A map with field names as key,
 *                                              and the field type as value.
 *                             {Object} queue   Queue changes to the DataSet,
 *                                              flush them all at once.
 *                                              Queue options:
 *                                              - {number} delay  Delay in ms, null by default
 *                                              - {number} max    Maximum number of entries in the queue, Infinity by default
 * @constructor DataSet
 */
class DataSet {
  constructor(data, options) {
    // correctly read optional arguments
    if (data && !Array.isArray(data)) {
      options = data;
      data = null;
    }

    this._options = options || {};
    this._data = {};                                 // map with data indexed by id
    this.length = 0;                                 // number of items in the DataSet
    this._fieldId = this._options.fieldId || 'id';   // name of the field containing id
    this._type = {};                                 // internal field types (NOTE: this can differ from this._options.type)

    // all variants of a Date are internally stored as Date, so we can convert
    // from everything to everything (also from ISODate to Number for example)
    if (this._options.type) {
      const fields = Object.keys(this._options.type);
      for (let i = 0, len = fields.length; i < len; i++) {
        const field = fields[i];
        const value = this._options.type[field];
        if (value == 'Date' || value == 'ISODate' || value == 'ASPDate') {
          this._type[field] = 'Date';
        }
        else {
          this._type[field] = value;
        }
      }
    }

    this._subscribers = {};  // event subscribers

    // add initial data when provided
    if (data) {
      this.add(data);
    }

    this.setOptions(options);
  }

  /**
   * @param {Object} options   Available options:
   *                             {Object} queue   Queue changes to the DataSet,
   *                                              flush them all at once.
   *                                              Queue options:
   *                                              - {number} delay  Delay in ms, null by default
   *                                              - {number} max    Maximum number of entries in the queue, Infinity by default
   */
  setOptions(options) {
    if (options && options.queue !== undefined) {
      if (options.queue === false) {
        // delete queue if loaded
        if (this._queue) {
          this._queue.destroy();
          delete this._queue;
        }
      }
      else {
        // create queue and update its options
        if (!this._queue) {
          this._queue = Queue.extend(this, {
            replace: ['add', 'update', 'remove']
          });
        }

        if (typeof options.queue === 'object') {
          this._queue.setOptions(options.queue);
        }
      }
    }
  }

  /**
   * Subscribe to an event, add an event listener
   * @param {string} event        Event name. Available events: 'add', 'update',
   *                              'remove'
   * @param {function} callback   Callback method. Called with three parameters:
   *                                  {string} event
   *                                  {Object | null} params
   *                                  {string | number} senderId
   */
  on(event, callback) {
    let subscribers = this._subscribers[event];
    if (!subscribers) {
      subscribers = [];
      this._subscribers[event] = subscribers;
    }

    subscribers.push({
      callback
    });
  }

  /**
   * Unsubscribe from an event, remove an event listener
   * @param {string} event
   * @param {function} callback
   */
  off(event, callback) {
    const subscribers = this._subscribers[event];
    if (subscribers) {
      this._subscribers[event] = subscribers.filter(listener => listener.callback != callback);
    }
  }

  /**
   * Trigger an event
   * @param {string} event
   * @param {Object | null} params
   * @param {string} [senderId]       Optional id of the sender.
   * @private
   */
  _trigger(event, params, senderId) {
    if (event == '*') {
      throw new Error('Cannot trigger event *');
    }

    let subscribers = [];
    if (event in this._subscribers) {
      subscribers = subscribers.concat(this._subscribers[event]);
    }
    if ('*' in this._subscribers) {
      subscribers = subscribers.concat(this._subscribers['*']);
    }

    for (let i = 0, len = subscribers.length; i < len; i++) {
      const subscriber = subscribers[i];
      if (subscriber.callback) {
        subscriber.callback(event, params, senderId || null);
      }
    }
  }

  /**
   * Add data.
   * Adding an item will fail when there already is an item with the same id.
   * @param {Object | Array} data
   * @param {string} [senderId] Optional sender id
   * @return {Array.<string|number>} addedIds      Array with the ids of the added items
   */
  add(data, senderId) {
    const addedIds = [];
    let id;
    const me = this;

    if (Array.isArray(data)) {
      // Array
      for (let i = 0, len = data.length; i < len; i++) {
        id = me._addItem(data[i]);
        addedIds.push(id);
      }
    }
    else if (data && typeof data === 'object') {
      // Single item
      id = me._addItem(data);
      addedIds.push(id);
    }
    else {
      throw new Error('Unknown dataType');
    }

    if (addedIds.length) {
      this._trigger('add', {items: addedIds}, senderId);
    }

    return addedIds;
  }

  /**
   * Update existing items. When an item does not exist, it will be created
   * @param {Object | Array} data
   * @param {string} [senderId] Optional sender id
   * @return {Array.<string|number>} updatedIds     The ids of the added or updated items
   * @throws {Error} Unknown Datatype
   */
  update(data, senderId) {
    const addedIds = [];
    const updatedIds = [];
    const oldData = [];
    const updatedData = [];
    const me = this;
    const fieldId = me._fieldId;

    const addOrUpdate = item => {
      let id = item[fieldId];
      if (me._data[id]) {
        const oldItem = util.extend({}, me._data[id]);
        // update item
        id = me._updateItem(item);
        updatedIds.push(id);
        updatedData.push(item);
        oldData.push(oldItem);
      }
      else {
        // add new item
        id = me._addItem(item);
        addedIds.push(id);
      }
    };

    if (Array.isArray(data)) {
      // Array
      for (let i = 0, len = data.length; i < len; i++) {
        if (data[i] && typeof data[i] === 'object'){
          addOrUpdate(data[i]);
        } else {
          console.warn(`Ignoring input item, which is not an object at index ${i}`);
        }
      }
    }
    else if (data && typeof data === 'object') {
      // Single item
      addOrUpdate(data);
    }
    else {
      throw new Error('Unknown dataType');
    }

    if (addedIds.length) {
      this._trigger('add', {items: addedIds}, senderId);
    }
    if (updatedIds.length) {
      const props = { items: updatedIds, oldData, data: updatedData };
      this._trigger('update', props, senderId);
    }

    return addedIds.concat(updatedIds);
  }

  /**
   * Get a data item or multiple items.
   *
   * Usage:
   *
   *     get()
   *     get(options: Object)
   *
   *     get(id: number | string)
   *     get(id: number | string, options: Object)
   *
   *     get(ids: number[] | string[])
   *     get(ids: number[] | string[], options: Object)
   *
   * Where:
   *
   * {number | string} id         The id of an item
   * {number[] | string{}} ids    An array with ids of items
   * {Object} options             An Object with options. Available options:
   * {string} [returnType]        Type of data to be returned.
   *                              Can be 'Array' (default) or 'Object'.
   * {Object.<string, string>} [type]
   * {string[]} [fields]          field names to be returned
   * {function} [filter]          filter items
   * {string | function} [order]  Order the items by a field name or custom sort function.
   * @param {Array} args
   * @returns {DataSet}
   * @throws Error
   */
  get() {
    // eslint-disable-line no-unused-vars
    const me = this;

    // parse the arguments
    let id;

    let ids;
    let options;
    const firstType = util.getType(arguments[0]);
    if (firstType == 'String' || firstType == 'Number') {
      // get(id [, options])
      id = arguments[0];
      options = arguments[1];
    }
    else if (firstType == 'Array') {
      // get(ids [, options])
      ids = arguments[0];
      options = arguments[1];
    }
    else {
      // get([, options])
      options = arguments[0];
    }

    // determine the return type
    let returnType;
    if (options && options.returnType) {
      const allowedValues = ['Array', 'Object'];
      returnType = !allowedValues.includes(options.returnType) ? 'Array' : options.returnType;
    }
    else {
      returnType = 'Array';
    }

    // build options
    const type = options && options.type || this._options.type;
    const filter = options && options.filter;
    const items = [];
    let item;
    let itemIds;
    let itemId;
    let i;
    let len;

    // convert items
    if (id != undefined) {
      // return a single item
      item = me._getItem(id, type);
      if (item && filter && !filter(item)) {
        item = null;
      }
    }
    else if (ids != undefined) {
      // return a subset of items
      for (i = 0, len = ids.length; i < len; i++) {
        item = me._getItem(ids[i], type);
        if (!filter || filter(item)) {
          items.push(item);
        }
      }
    }
    else {
      // return all items
      itemIds = Object.keys(this._data);
      for (i = 0, len = itemIds.length; i < len; i++) {
        itemId = itemIds[i];
        item = me._getItem(itemId, type);
        if (!filter || filter(item)) {
          items.push(item);
        }
      }
    }

    // order the results
    if (options && options.order && id == undefined) {
      this._sort(items, options.order);
    }

    // filter fields of the items
    if (options && options.fields) {
      const fields = options.fields;
      if (id != undefined) {
        item = this._filterFields(item, fields);
      }
      else {
        for (i = 0, len = items.length; i < len; i++) {
          items[i] = this._filterFields(items[i], fields);
        }
      }
    }

    // return the results
    if (returnType == 'Object') {
      const result = {};
      let resultant;
      for (i = 0, len = items.length; i < len; i++) {
        resultant = items[i];
        result[resultant.id] = resultant;
      }
      return result;
    }
    else {
      if (id != undefined) {
        // a single item
        return item;
      }
      else {
        // just return our array
        return items;
      }
    }
  }

  /**
   * Get ids of all items or from a filtered set of items.
   * @param {Object} [options]    An Object with options. Available options:
   *                              {function} [filter] filter items
   *                              {string | function} [order] Order the items by
   *                                  a field name or custom sort function.
   * @return {Array.<string|number>} ids
   */
  getIds(options) {
    const data = this._data;
    const filter = options && options.filter;
    const order = options && options.order;
    const type = options && options.type || this._options.type;
    const itemIds = Object.keys(data);
    let i;
    let len;
    let id;
    let item;
    let items;
    const ids = [];

    if (filter) {
      // get filtered items
      if (order) {
        // create ordered list
        items = [];
        for (i = 0, len = itemIds.length; i < len; i++) {
          id = itemIds[i];
          item = this._getItem(id, type);
          if (filter(item)) {
            items.push(item);
          }
        }

        this._sort(items, order);

        for (i = 0, len = items.length; i < len; i++) {
          ids.push(items[i][this._fieldId]);
        }
      }
      else {
        // create unordered list
        for (i = 0, len = itemIds.length; i < len; i++) {
          id = itemIds[i];
          item = this._getItem(id, type);
          if (filter(item)) {
            ids.push(item[this._fieldId]);
          }
        }
      }
    }
    else {
      // get all items
      if (order) {
        // create an ordered list
        items = [];
        for (i = 0, len = itemIds.length; i < len; i++) {
          id = itemIds[i];
          items.push(data[id]);
        }

        this._sort(items, order);

        for (i = 0, len = items.length; i < len; i++) {
          ids.push(items[i][this._fieldId]);
        }
      }
      else {
        // create unordered list
        for (i = 0, len = itemIds.length; i < len; i++) {
          id = itemIds[i];
          item = data[id];
          ids.push(item[this._fieldId]);
        }
      }
    }

    return ids;
  }

  /**
   * Returns the DataSet itself. Is overwritten for example by the DataView,
   * which returns the DataSet it is connected to instead.
   * @returns {DataSet}
   */
  getDataSet() {
    return this;
  }

  /**
   * Execute a callback function for every item in the dataset.
   * @param {function} callback
   * @param {Object} [options]    Available options:
   *                              {Object.<string, string>} [type]
   *                              {string[]} [fields] filter fields
   *                              {function} [filter] filter items
   *                              {string | function} [order] Order the items by
   *                                  a field name or custom sort function.
   */
  forEach(callback, options) {
    const filter = options && options.filter;
    const type = options && options.type || this._options.type;
    const data = this._data;
    const itemIds = Object.keys(data);
    let i;
    let len;
    let item;
    let id;

    if (options && options.order) {
      // execute forEach on ordered list
      const items = this.get(options);

      for (i = 0, len = items.length; i < len; i++) {
        item = items[i];
        id = item[this._fieldId];
        callback(item, id);
      }
    }
    else {
      // unordered
      for (i = 0, len = itemIds.length; i < len; i++) {
        id = itemIds[i];
        item = this._getItem(id, type);
        if (!filter || filter(item)) {
          callback(item, id);
        }
      }
    }
  }

  /**
   * Map every item in the dataset.
   * @param {function} callback
   * @param {Object} [options]    Available options:
   *                              {Object.<string, string>} [type]
   *                              {string[]} [fields] filter fields
   *                              {function} [filter] filter items
   *                              {string | function} [order] Order the items by
   *                                  a field name or custom sort function.
   * @return {Object[]} mappedItems
   */
  map(callback, options) {
    const filter = options && options.filter;
    const type = options && options.type || this._options.type;
    const mappedItems = [];
    const data = this._data;
    const itemIds = Object.keys(data);
    let i;
    let len;
    let id;
    let item;

    // convert and filter items
    for (i = 0, len = itemIds.length; i < len; i++) {
      id = itemIds[i];
      item = this._getItem(id, type);
      if (!filter || filter(item)) {
        mappedItems.push(callback(item, id));
      }
    }

    // order items
    if (options && options.order) {
      this._sort(mappedItems, options.order);
    }

    return mappedItems;
  }

  /**
   * Filter the fields of an item
   * @param {Object | null} item
   * @param {string[]} fields     Field names
   * @return {Object | null} filteredItem or null if no item is provided
   * @private
   */
  _filterFields(item, fields) {
    if (!item) { // item is null
      return item;
    }

    const filteredItem = {};
    const itemFields = Object.keys(item);
    const len = itemFields.length;
    let i;
    let field;

    if(Array.isArray(fields)){
      for (i = 0; i < len; i++) {
        field = itemFields[i];
        if (fields.includes(field)) {
          filteredItem[field] = item[field];
        }
      }
    }else{
      for (i = 0; i < len; i++) {
        field = itemFields[i];
        if (fields.hasOwnProperty(field)) {
          filteredItem[fields[field]] = item[field];
        }
      }
    }

    return filteredItem;
  }

  /**
   * Sort the provided array with items
   * @param {Object[]} items
   * @param {string | function} order      A field name or custom sort function.
   * @private
   */
  _sort(items, order) {
    if (util.isString(order)) {
      // order by provided field name
      const name = order; // field name
      items.sort((a, b) => {
        const av = a[name];
        const bv = b[name];
        return (av > bv) ? 1 : ((av < bv) ? -1 : 0);
      });
    }
    else if (typeof order === 'function') {
      // order by sort function
      items.sort(order);
    }
    // TODO: extend order by an Object {field:string, direction:string}
    //       where direction can be 'asc' or 'desc'
    else {
      throw new TypeError('Order must be a function or a string');
    }
  }

  /**
   * Remove an object by pointer or by id
   * @param {string | number | Object | Array.<string|number>} id Object or id, or an array with
   *                                              objects or ids to be removed
   * @param {string} [senderId] Optional sender id
   * @return {Array.<string|number>} removedIds
   */
  remove(id, senderId) {
    const removedIds = [];
    const removedItems = [];
    let ids = [];
    let i;
    let len;
    let itemId;
    let item;

    // force everything to be an array for simplicity
    ids = Array.isArray(id) ? id : [id];

    for (i = 0, len = ids.length; i < len; i++) {
      item = this._remove(ids[i]);
      if (item) {
        itemId = item[this._fieldId];
        if (itemId != undefined) {
          removedIds.push(itemId);
          removedItems.push(item);
        }
      }
    }

    if (removedIds.length) {
      this._trigger('remove', {items: removedIds, oldData: removedItems}, senderId);
    }

    return removedIds;
  }

  /**
   * Remove an item by its id
   * @param {number | string | Object} id   id or item
   * @returns {number | string | null} id
   * @private
   */
  _remove(id) {
    let item;
    let ident;

    // confirm the id to use based on the args type
    if (util.isNumber(id) || util.isString(id)) {
      ident = id;
    }
    else if (id && typeof id === 'object') {
      ident = id[this._fieldId]; // look for the identifier field using _fieldId
    }

    // do the remove if the item is found
    if (ident !== undefined && this._data[ident]) {
      item = this._data[ident];
      delete this._data[ident];
      this.length--;
      return item;
    }
    return null;
  }

  /**
   * Clear the data
   * @param {string} [senderId] Optional sender id
   * @return {Array.<string|number>} removedIds    The ids of all removed items
   */
  clear(senderId) {
    let i;
    let len;
    const ids = Object.keys(this._data);
    const items = [];

    for (i = 0, len = ids.length; i < len; i++) {
      items.push(this._data[ids[i]]);
    }

    this._data = {};
    this.length = 0;

    this._trigger('remove', {items: ids, oldData: items}, senderId);

    return ids;
  }

  /**
   * Find the item with maximum value of a specified field
   * @param {string} field
   * @return {Object | null} item  Item containing max value, or null if no items
   */
  max(field) {
    const data = this._data;
    const itemIds = Object.keys(data);
    let max = null;
    let maxField = null;
    let i;
    let len;

    for (i = 0, len = itemIds.length; i < len; i++) {
      const id = itemIds[i];
      const item = data[id];
      const itemField = item[field];
      if (itemField != null && (!max || itemField > maxField)) {
        max = item;
        maxField = itemField;
      }
    }

    return max;
  }

  /**
   * Find the item with minimum value of a specified field
   * @param {string} field
   * @return {Object | null} item  Item containing max value, or null if no items
   */
  min(field) {
    const data = this._data;
    const itemIds = Object.keys(data);
    let min = null;
    let minField = null;
    let i;
    let len;

    for (i = 0, len = itemIds.length; i < len; i++) {
      const id = itemIds[i];
      const item = data[id];
      const itemField = item[field];
      if (itemField != null && (!min || itemField < minField)) {
        min = item;
        minField = itemField;
      }
    }

    return min;
  }

  /**
   * Find all distinct values of a specified field
   * @param {string} field
   * @return {Array} values  Array containing all distinct values. If data items
   *                         do not contain the specified field are ignored.
   *                         The returned array is unordered.
   */
  distinct(field) {
    const data = this._data;
    const itemIds = Object.keys(data);
    const values = [];
    const fieldType = this._options.type && this._options.type[field] || null;
    let count = 0;
    let i;
    let j;
    let len;

    for (i = 0, len = itemIds.length; i < len; i++) {
      const id = itemIds[i];
      const item = data[id];
      const value = item[field];
      let exists = false;
      for (j = 0; j < count; j++) {
        if (values[j] == value) {
          exists = true;
          break;
        }
      }
      if (!exists && (value !== undefined)) {
        values[count] = value;
        count++;
      }
    }

    if (fieldType) {
      for (i = 0, len = values.length; i < len; i++) {
        values[i] = util.convert(values[i], fieldType);
      }
    }

    return values;
  }

  /**
   * Add a single item. Will fail when an item with the same id already exists.
   * @param {Object} item
   * @return {string} id
   * @private
   */
  _addItem(item) {
    let id = item[this._fieldId];

    if (id != undefined) {
      // check whether this id is already taken
      if (this._data[id]) {
        // item already exists
        throw new Error(`Cannot add item: item with id ${id} already exists`);
      }
    }
    else {
      // generate an id
      id = util.randomUUID();
      item[this._fieldId] = id;
    }

    const d = {};
    const fields = Object.keys(item);
    let i;
    let len;
    for (i = 0, len = fields.length; i < len; i++) {
      const field = fields[i];
      const fieldType = this._type[field];  // type may be undefined
      d[field] = util.convert(item[field], fieldType);
    }
    this._data[id] = d;
    this.length++;

    return id;
  }

  /**
   * Get an item. Fields can be converted to a specific type
   * @param {string} id
   * @param {Object.<string, string>} [types]  field types to convert
   * @return {Object | null} item
   * @private
   */
  _getItem(id, types) {
    let field;
    let value;
    let i;
    let len;

    // get the item from the dataset
    const raw = this._data[id];
    if (!raw) {
      return null;
    }

    // convert the items field types
    const converted = {};

    const fields = Object.keys(raw);

    if (types) {
      for (i = 0, len = fields.length; i < len; i++) {
        field = fields[i];
        value = raw[field];
        converted[field] = util.convert(value, types[field]);
      }
    }
    else {
      // no field types specified, no converting needed
      for (i = 0, len = fields.length; i < len; i++) {
        field = fields[i];
        value = raw[field];
        converted[field] = value;
      }
    }

    if (!converted[this._fieldId]) {
      converted[this._fieldId] = raw.id;
    }

    return converted;
  }

  /**
   * Update a single item: merge with existing item.
   * Will fail when the item has no id, or when there does not exist an item
   * with the same id.
   * @param {Object} item
   * @return {string} id
   * @private
   */
  _updateItem(item) {
    const id = item[this._fieldId];
    if (id == undefined) {
      throw new Error(`Cannot update item: item has no id (item: ${JSON.stringify(item)})`);
    }
    const d = this._data[id];
    if (!d) {
      // item doesn't exist
      throw new Error(`Cannot update item: no item with id ${id} found`);
    }

    // merge with current item
    const fields = Object.keys(item);
    for (let i = 0, len = fields.length; i < len; i++) {
      const field = fields[i];
      const fieldType = this._type[field];  // type may be undefined
      d[field] = util.convert(item[field], fieldType);
    }

    return id;
  }
}

export default DataSet;
