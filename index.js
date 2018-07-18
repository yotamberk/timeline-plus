// utils
export var util = require('./lib/util');

export var DOMutil = require('./lib/DOMutil');

// data
export var DataSet = require('./lib/DataSet').default;

export var DataView = require('./lib/DataView').default;
export var Queue = require('./lib/Queue').default;

// Timeline
export var Timeline = require('./lib/timeline/Timeline').default;

export var timeline = {
  Core: require('./lib/timeline/Core').default,
  DateUtil: require('./lib/timeline/DateUtil'),
  Range: require('./lib/timeline/Range').default,
  stack: require('./lib/timeline/Stack'),
  TimeStep: require('./lib/timeline/TimeStep').default,

  components: {
    items: {
      Item: require('./lib/timeline/component/item/Item').default,
      BackgroundItem: require('./lib/timeline/component/item/BackgroundItem').default,
      BoxItem: require('./lib/timeline/component/item/BoxItem').default,
      PointItem: require('./lib/timeline/component/item/PointItem').default,
      RangeItem: require('./lib/timeline/component/item/RangeItem').default,
    },

    BackgroundGroup: require('./lib/timeline/component/BackgroundGroup').default,
    Component: require('./lib/timeline/component/Component').default,
    CurrentTime: require('./lib/timeline/component/CurrentTime').default,
    CustomTime: require('./lib/timeline/component/CustomTime').default,
    DataAxis: require('./lib/timeline/component/DataAxis').default,
    DataScale: require('./lib/timeline/component/DataScale').default,
    Group: require('./lib/timeline/component/Group').default,
    ItemSet: require('./lib/timeline/component/ItemSet').default,
    TimeAxis: require('./lib/timeline/component/TimeAxis').default,
  }
};

// bundled external libraries
export var moment = require('./lib/module/moment').default;

export var Hammer = require('./lib/module/hammer');
export var keycharm = require('keycharm');
