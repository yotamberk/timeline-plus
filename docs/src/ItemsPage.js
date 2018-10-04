import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
  },
});

class ItemsPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <h3 id="items">Items</h3>
      <p>
        For items, the Timeline accepts an Array, a DataSet (offering 2 way data binding),
        or a DataView (offering 1 way data binding).
        Items are regular objects and can contain the properties <code>{`start`}</code>,
        <code>{`end`}</code> (optional), <code>{`content`}</code>,
        <code>{`group`}</code> (optional), <code>{`className`}</code> (optional),
        <code>{`editable`}</code> (optional), and <code>{`style`}</code> (optional).
      </p>

      <p>
        A DataSet is constructed as:
      </p>

      <pre className="prettyprint lang-js">
{`var items = new timeline.DataSet([
{
start: new Date(2010, 7, 15),
end: new Date(2010, 8, 2),  // end is optional
content: 'Trajectory A'
// Optional: fields 'id', 'type', 'group', 'className', 'style'
}
// more items...
]);`}
      </pre>

      <p>
        The item properties are defined as:
      </p>

      <table className="properties" id="itemOptionTable">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>className</td>
          <td>String</td>
          <td>no</td>
          <td>This field is optional. A className can be used to give items
            an individual css style. For example, when an item has className
            'red', one can define a css style like:
            <pre className="prettyprint lang-css">
{`.timeline-item.red {
color: white;
background-color: red;
border-color: darkred;
}`}
            </pre>
            More details on how to style items can be found in the section
            <a href="#Styles">Styles</a>.
          </td>
        </tr>
        <tr>
          <td>align</td>
          <td>String</td>
          <td>no</td>
          <td>This field is optional. If set this overrides the global <code>{`align`}</code> configuration option for this item.
          </td>
        </tr>
        <tr>
          <td>content</td>
          <td>String</td>
          <td>yes</td>
          <td>The contents of the item. This can be plain text or html code.</td>
        </tr>
        <tr>
          <td>end</td>
          <td>Date or number or string or Moment</td>
          <td>no</td>
          <td>The end date of the item. The end date is optional, and can be left <code>{`null`}</code>.
            If end date is provided, the item is displayed as a range.
            If not, the item is displayed as a box.</td>
        </tr>
        <tr>
          <td>group</td>
          <td>any type</td>
          <td>no</td>
          <td>This field is optional. When the group column is provided,
            all items with the same group are placed on one line.
            A vertical axis is displayed showing the groups.
            Grouping items can be useful for example when showing availability of multiple
            people, rooms, or other resources next to each other.<br/>
          </td>
        </tr>
        <tr>
          <td>id</td>
          <td>String or Number</td>
          <td>no</td>
          <td>An id for the item. Using an id is not required but highly
            recommended. An id is needed when dynamically adding, updating,
            and removing items in a DataSet.</td>
        </tr>
        <tr>
          <td>start</td>
          <td>Date or number or string or Moment</td>
          <td>yes</td>
          <td>The start date of the item, for example <code>{`new Date(2010,9,23)`}</code>.</td>
        </tr>
        <tr>
          <td>style</td>
          <td>String</td>
          <td>no</td>
          <td>
            A css text string to apply custom styling for an individual item, for
            example <code>{`"color: red; background-color: pink;"`}</code>.
          </td>
        </tr>
        <tr>
          <td>subgroup</td>
          <td>String or Number</td>
          <td>none</td>
          <td>The id of a subgroup.
            Groups all items within a group per subgroup, and positions them on the
            same height instead of staking them on top of each other. can be ordered
            by specifying the option <code>{`subgroupOrder`}</code> of a group.
          </td>
        </tr>
        <tr>
          <td>title</td>
          <td>String</td>
          <td>none</td>
          <td>Add a title for the item, displayed when holding the mouse on the item.
            The title can be an HTML element or a string containing plain text or HTML.
          </td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>no</td>
          <td>The type of the item. Can be 'box' (default), 'point', 'range', or 'background'.
            Types 'box' and 'point' need a start date, the types 'range' and 'background' needs both a start and end date.
          </td>
        </tr>
        <tr>
          <td>limitSize</td>
          <td>Boolean</td>
          <td>no</td>
          <td>Some browsers cannot handle very large DIVs so by default range DIVs can be truncated outside the visible area.
            Setting this to <code>{`false`}</code> will cause the creation of full-size DIVs.
          </td>
        </tr>
        <tr className='toggle collapsible' onclick="toggleTable('itemOptionTable', 'itemEditable', this);">
          <td><span parent="itemEditable" className="right-caret"></span> editable</td>
          <td>Boolean or Object</td>
          <td>no</td>
          <td>Override the editable option of the timeline for a specific item (assuming <code>{`timeline.editable.overrideItems`}</code> is false).</td>
        </tr>
        <tr parent="itemEditable" className="hidden">
          <td className="indent">editable.remove</td>
          <td>boolean</td>
          <td>no</td>
          <td>If true, item can be deleted by first selecting it, and then clicking the delete button on the top right of the item. See section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.</td>
        </tr>
        <tr parent="itemEditable" className="hidden">
          <td className="indent">editable.updateGroup</td>
          <td>boolean</td>
          <td>no</td>
          <td>If true, item can be dragged from one group to another. Only applicable when the Timeline has groups. See section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.</td>
        </tr>
        <tr parent="itemEditable" className="hidden">
          <td className="indent">editable.updateTime</td>
          <td>boolean</td>
          <td>no</td>
          <td>If true, items can be dragged to another moment in time. See section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.</td>
        </tr>
      </tbody>
        </table>

        <h2 id="Editing_Items">Editing Items</h2>
          <p>
            When the Timeline is configured to be editable (both options <code>{`selectable`}</code> and <code>{`editable`}</code> are <code>{`true`}</code>), the user can:
          </p>
          <ul>
            <li>Select an item by clicking it, and use ctrl+click to or shift+click to select multiple items (when <code>{`multiselect: true`}</code>).</li>
            <li>Move selected items by dragging them.</li>
            <li>Create a new item by double tapping on an empty space.</li>
            <li>Create a new range item by dragging on an empty space with the ctrl key down.</li>
            <li>Update an item by double tapping it.</li>
            <li>Delete a selected item by clicking the delete button on the top right.</li>
          </ul>

          <p>Option <code>{`editable`}</code> accepts a boolean or an object. When <code>{`editable`}</code> is a boolean, all manipulation actions will be either enabled or disabled. When <code>{`editable`}</code> is an object, one can enable individual manipulation actions:</p>

        <pre className="prettyprint lang-js">
{` //enable or disable all manipulation actions
var options = {
  editable: true       // true or false
};

// enable or disable individual manipulation actions
var options = {
  editable: {
    add: true,         // add new items by double tapping
    updateTime: true,  // drag items horizontally
    updateGroup: true, // drag items from one group to another
    remove: true,       // delete an item by tapping the delete button top right
    overrideItems: false  // allow these options to override item.editable
  }
};`}
        </pre>

          <p>
            Editing can be enabled/disabled for specific items. Setting the property <code>{`editable`}</code> to <code>{`true`}</code> or <code>{`false`}</code> on a data item will override the timeline option except when <code>{`timeline.editable.overrideItems`}</code> is set to <code>{`true`}</code>.
          </p>

        <pre className="prettyprint lang-js">
{`var items = new timeline.DataSet([
  {id: 1, content: 'read-only item', start: '2013-04-20', editable: false},
  {id: 2, content: 'editable item', start: '2013-04-14'}
]);`}
        </pre>

          <p>
            Individual manipulation actions (<code>{`updateTime`}</code>, <code>{`updateGroup`}</code> and <code>{`remove`}</code>) can also be set on individual items. If any of the item-level
            actions are specified (and <code>{`overrideItems`}</code> is not <code>{`false`}</code>) then that takes precedence over the settings at the timeline level. Current behavior is
            that if any of the item-level actions are not specified, those items get <code>{`undefined`}</code> value (rather than inheriting from the timeline level). This may change
            in future major releases, and code that specifies all item level values will handle major release changes better. That is, instead of using
            <code>{`editable: {updateTime : true}`}</code>, use <code>{`editable: {updateTime : true, updateGroup: false, remove: false}`}</code>.
          </p>

          <p>
            One can specify callback functions to validate changes made by the user. There are a number of callback functions for this purpose:
          </p>

          <ul>
            <li><code>{`onAdd(item, callback)`}</code> Fired when a new item is about to be added. If not implemented, the item will be added with default text contents.</li>
            <li><code>{`onUpdate(item, callback)`}</code> Fired when an item is about to be updated. This function typically has to show a dialog where the user change the item. If not implemented, nothing happens.</li>
            <li><code>{`onDropObjectOnItem(objectData, item)`}</code> Fired when an object is dropped in to an existing timeline item.</li>
            <li><code>{`onMove(item, callback)`}</code> Fired when an item has been moved. If not implemented, the move action will be accepted.</li>
            <li><code>{`onMoving(item, callback)`}</code> Fired repeatedly while an item is being moved (dragged). Can be used to adjust the items start, end, and/or group to allowed regions.</li>
            <li><code>{`onRemove(item, callback)`}</code> Fired when an item is about to be deleted. If not implemented, the item will be always removed.</li>
          </ul>

          <p>
            Each of the callbacks is invoked with two arguments:
          </p>
          <ul>
            <li><code>{`item`}</code>: the item being manipulated</li>
            <li><code>{`callback`}</code>: a callback function which must be invoked to report back. The callback must be invoked as <code>{`callback(item)`}</code> or <code>{`callback(null)`}</code>.
            Here, <code>{`item`}</code> can contain changes to the passed item. Parameter <code>{`item`}</code> typically contains fields `content`, `start`, and optionally `end`. The type of `start`
            and `end` is determined by the DataSet type configuration and is `Date` by default.  When invoked as <code>{`callback(null)`}</code>, the action will be cancelled.</li>
          </ul>

          <p>
            Example code:
          </p>

        <pre className="prettyprint lang-js">
{`var options = {
  onUpdate: function (item, callback) {
    item.content = prompt('Edit items text:', item.content);
    if (item.content != null) {
      callback(item); // send back adjusted item
    }
    else {
      callback(null); // cancel updating the item
    }
  }
};`}
        </pre>

          A full example is available here: <a href="../examples/editing/editingItemsCallbacks.html">editingItemsCallbacks.html</a>.

      </div>
    );
  }
}

ItemsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemsPage);