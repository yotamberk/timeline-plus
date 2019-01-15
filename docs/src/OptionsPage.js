import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
  },
});

class OptionsPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <h2 id="Configuration_Options">Configuration Options</h2>

      <p>
        Options can be used to customize the timeline.
        Options are defined as a JSON object. All options are optional.
      </p>

    <pre className="prettyprint lang-js">
{`var options = {
  width: '100%',
  height: '30px',
  margin: {
    item: 20
  }
};`}
    </pre>

      <p>
        The following options are available.
      </p>

      <table className="options" id="optionTable">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>

        <tr>
          <td>align</td>
          <td>String</td>
          <td><code>{`'center'`}</code></td>
          <td>Alignment of items with type 'box', 'range', and 'background'. Available values are 'auto' (default), 'center', 'left', or 'right'. For 'box' items, the 'auto' alignment is 'center'. For 'range' items, the auto alignment is dynamic: positioned left and shifted such that the contents is always visible on screen.</td>
        </tr>

        <tr>
          <td>alignCurrentTime</td>
          <td>String</td>
          <td>none</td>
          <td>If set, the current time bar will be aligned to the start of the chosen unit of time. Available values are 'year', 'month', 'quarter', 'week', 'isoWeek', 'day', 'date', 'hour', 'minute' or 'second'. If not provided, the current time bar will be updated at every tick.</td>
        </tr>

        <tr>
          <td>autoResize</td>
          <td>boolean</td>
          <td><code>{`true`}</code></td>
          <td>If true, the Timeline will automatically detect when its container is resized, and redraw itself accordingly. If false, the Timeline can be forced to repaint after its container has been resized using the function <code>{`redraw()`}</code>.</td>
        </tr>

        <tr>
          <td>clickToUse</td>
          <td>boolean</td>
          <td><code>{`false`}</code></td>
          <td>When a Timeline is configured to be <code>{`clickToUse`}</code>, it will react to mouse and touch events only when active.
            When active, a blue shadow border is displayed around the Timeline. The Timeline is set active by clicking on it, and is changed to inactive again by clicking outside the Timeline or by pressing the ESC key.</td>
        </tr>

        <tr>
          <td>configure</td>
          <td>boolean or function</td>
          <td><code>{`false`}</code></td>
          <td>When true, a configurator is loaded where all configuration options of the Timeline can be changed live.

            The displayed options can be filtered by providing a filter function. This function is invoked with two arguments: the current <code>{`option`}</code> and the <code>{`path`}</code> (an Array) of the option within the options object. The option will be displayed when the filter function returns true. For example to only display format options:
            <pre className="prettyprint lang-js">
{`function (option, path) {
  return option === 'format' || path.indexOf('format') !== -1;
}`}
            </pre>
          </td>
        </tr>

        <tr>
          <td>dataAttributes</td>
          <td>string[] or 'all'</td>
          <td><code>{`false`}</code></td>
          <td>An array of fields optionally defined on the timeline items that will be appended as <code>{`data-`}</code> attributes to the DOM element of the items.<br/>
            If value is <code>{`'all'`}</code> then each field defined on the timeline item will become a <code>{`data-`}</code> attribute.</td>
        </tr>

        <tr className='toggle collapsible'>
          <td><span parent="editable"></span> editable</td>
          <td>boolean or Object</td>
          <td><code>{`false`}</code></td>
          <td>If true, the items in the timeline can be manipulated. Only applicable when option <code>{`selectable`}</code> is <code>{`true`}</code>. See also the callbacks <code>{`onAdd`}</code>, <code>{`onUpdate`}</code>, <code>{`onMove`}</code>, and <code>{`onRemove`}</code>. When <code>{`editable`}</code> is an object, one can enable or disable individual manipulation actions.
            See section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.
          </td>
        </tr>
        <tr parent="editable">
          <td className="indent">editable.add</td>
          <td>boolean</td>
          <td><code>{`false`}</code></td>
          <td>If true, new items can be created by double tapping an empty space in the Timeline. See section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.</td>
        </tr>
        <tr parent="editable">
          <td className="indent">editable.remove</td>
          <td>boolean</td>
          <td><code>{`false`}</code></td>
          <td>If true, items can be deleted by first selecting them, and then clicking the delete button on the top right of the item. See section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.</td>
        </tr>
        <tr parent="editable">
          <td className="indent">editable.updateGroup</td>
          <td>boolean</td>
          <td><code>{`false`}</code></td>
          <td>If true, items can be dragged from one group to another. Only applicable when the Timeline has groups. See section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.</td>
        </tr>
        <tr parent="editable">
          <td className="indent">editable.updateTime</td>
          <td>boolean</td>
          <td><code>{`false`}</code></td>
          <td>If true, items can be dragged to another moment in time. See section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.</td>
        </tr>
        <tr parent="editable">
          <td className="indent">editable.overrideItems</td>
          <td>boolean</td>
          <td><code>{`false`}</code></td>
          <td>If true, item specific editable properties are overridden by timeline settings</td>
        </tr>

        <tr>
          <td>end</td>
          <td>Date or Number or String or Moment</td>
          <td>none</td>
          <td>The initial end date for the axis of the timeline.
            If not provided, the latest date present in the items set is taken as
            end date.</td>
        </tr>

        <tr>
          <td>format</td>
          <td>Object or Function</td>
          <td>none</td>
          <td>
            Apply custom date formatting of the labels on the time axis. The default value of <code>{`format`}</code> is:
          <pre className="prettyprint lang-js">
{`{
  minorLabels: {
    millisecond:'SSS',
    second:     's',
    minute:     'HH:mm',
    hour:       'HH:mm',
    weekday:    'ddd D',
    day:        'D',
    week:       'w',
    month:      'MMM',
    year:       'YYYY'
  },
  majorLabels: {
    millisecond:'HH:mm:ss',
    second:     'D MMMM HH:mm',
    minute:     'ddd D MMMM',
    hour:       'ddd D MMMM',
    weekday:    'MMMM YYYY',
    day:        'MMMM YYYY',
    week:       'MMMM YYYY',
    month:      'YYYY',
    year:       ''
  }
}`}
          </pre>

            For values which not provided in the customized <code>{`options.format`}</code>, the default values will be used.
            All available formatting syntax is described in the <a href="http://momentjs.com/docs/#/displaying/format/">docs of moment.js</a>.
            <br/>
            You can also use a function format for each label. The function accepts as arguments the date, scale and step in that order, and expects to return a string for the label.

            <pre className="prettyprint lang-js">
{`function format({
  minorLabels: Function(date: Date, scale: Number, step: Number),
  majorLabels: Function(date: Date, scale: Number, step: Number)
}`}
            </pre>
          </td>
        </tr>

        <tr className='toggle collapsible'>
          <td><span parent="groupEditable"></span> groupEditable</td>
          <td>boolean or Object</td>
          <td><code>{`false`}</code></td>
          <td>If true, the groups in the timeline can be manipulated. See also the callbacks <code>{`onAddGroup`}</code>, <code>{`onMoveGroup`}</code>, and <code>{`onRemoveGroup`}</code>. When <code>{`groupEditable`}</code> is an object, one can enable or disable individual manipulation actions.
            The editing of groups follows the same principles as for items, see section <a href="#Editing_Items">Editing Items</a> for a detailed explanation.
          </td>
        </tr>
        <tr parent="groupEditable">
          <td className="indent">groupEditable.add</td>
          <td>boolean</td>
          <td><code>{`false`}</code></td>
          <td>If true, new groups can be created in the Timeline. For now adding new groups is done by the user.</td>
        </tr>
        <tr parent="groupEditable">
          <td className="indent">groupEditable.remove</td>
          <td>boolean</td>
          <td><code>{`false`}</code></td>
          <td>If true, groups can be deleted. For now removing groups is done by the user.</td>
        </tr>
        <tr parent="groupEditable">
          <td className="indent">groupEditable.order</td>
          <td>boolean</td>
          <td><code>{`false`}</code></td>
          <td>If true, groups can be dragged to change their order. Only applicable when the Timeline has groups. For this option to work properly the groupOrder and groupOrderSwap options have to be set as well.</td>
        </tr>

        <tr>
          <td>groupHeightMode</td>
          <td>String</td>
          <td>'auto'</td>
          <td>
            Specifies how the height of a group is calculated. Choose from 'auto','fixed', and 'fitItems'. <br />
            If it is set to 'auto' the height will be calculated based on a group label and visible items.<br />
            If it is set to 'fitItems' the height will be calculated based on the visible items only.<br />
            While if it is set to 'fixed' the group will keep the same height even if there are no visible items in the window.
          </td>
        </tr>

        <tr>
          <td>groupOrder</td>
          <td>String or Function</td>
          <td>'order'</td>
          <td>Order the groups by a field name or custom sort function.
            By default, groups are ordered by a property <code>{`order`}</code> (if set).
            If no <code>{`order`}</code> properties are provided, the order will be undetermined.
          </td>
        </tr>

        <tr>
          <td>groupOrderSwap</td>
          <td>Function</td>
          <td>none</td>
          <td>Swaps the positions of two groups. If groups have a custom order (via <code>{`groupOrder`}</code>) and groups are configured to be reorderable (via <code>{`groupEditable.order`}</code>), the user has to provide a function that swaps the positions of two given groups.
          If this option is not set, the default implementation assumes that groups hold an attribute <code>{`order`}</code> which values are changed. The signature of the <code>{`groupOrderWap`}</code> function is:
          <pre className="prettyprint lang-js">{`function groupOrderSwap(fromGroup: Object, toGroup: Object, groups: DataSet)`}</pre>
          The first to arguments hold the groups of which the positions are to be swapped and the third argument holds the DataSet with all groups.
          </td>
        </tr>

        <tr>
          <td>groupTemplate</td>
          <td>function</td>
          <td>none</td>
          <td>A template function used to generate the contents of the groups. The function is called by the Timeline with a groups data as the first argument and the group element as the second, and must return HTML code, a string or a template as result. When the option groupTemplate is specified, the groups do not need to have a field <code>{`content`}</code>. See section <a href="#Templates">Templates</a> for a detailed explanation.</td>
        </tr>

        <tr>
          <td>height</td>
          <td>number or String</td>
          <td>none</td>
          <td>The height of the timeline in pixels or as a percentage.
            When height is undefined or null, the height of the timeline is automatically
            adjusted to fit the contents.
            It is possible to set a maximum height using option <code>{`maxHeight`}</code>
            to prevent the timeline from getting too high in case of automatically
            calculated height.
          </td>
        </tr>

        <tr>
          <td>hiddenDates</td>
          <td>Object</td>
          <td>none</td>
          <td>This option allows you to hide specific timespans from the time axis. The dates can be supplied as an object:
            <code>{`{start: '2014-03-21 00:00:00', end: '2014-03-28 00:00:00', [repeat:'daily']}`}</code> or as an Array of these objects. The repeat argument is optional.
            The possible values are (case-sensitive): <code>{`daily, weekly, monthly, yearly`}</code>. To hide a weekend, pick any Saturday as start and the following Monday as end
            and set repeat to weekly.
          </td>
        </tr>

        <tr>
          <td>horizontalScroll</td>
          <td>Boolean</td>
          <td>false</td>
          <td>This option allows you to scroll horizontally to move backwards and forwards in the time range.
          Only applicable when option <code>{`zoomCtrl`}</code> is defined or <code>{`zoomable`}</code> is <code>{`false`}</code>.
          </td>
        </tr>

        <tr className='toggle collapsible'>
          <td><span parent="itemsAlwaysDraggable"></span> itemsAlwaysDraggable</td>
          <td>boolean or Object</td>
          <td>Object</td>
          <td>When a boolean, applies the value only to <code>{`itemsAlwaysDraggable.item`}</code>.</td>
        </tr>
        <tr parent="itemsAlwaysDraggable">
          <td className="indent">itemsAlwaysDraggable.item</td>
          <td>boolean</td>
          <td><code>{`false`}</code></td>
          <td>If true, all items in the Timeline are draggable without being selected. If false, only the selected item(s) are draggable.</td>
        </tr>
        <tr parent="itemsAlwaysDraggable">
          <td className="indent">itemsAlwaysDraggable.range</td>
          <td>boolean</td>
          <td><code>{`false`}</code></td>
          <td>If true, range of all items in the Timeline is draggable without being selected. If false, range is only draggable for the selected item(s). Only applicable when option <code>{`itemsAlwaysDraggable.item`}</code> is set <code>{`true`}</code>. </td>
        </tr>

        <tr>
          <td>loadingScreenTemplate</td>
          <td>function</td>
          <td>none</td>
          <td>A template function used to generate the timeline initial loading screen. See section <a href="#Templates">Templates</a> for a detailed explanation.</td>
        </tr>

        <tr>
          <td>locale</td>
          <td>String</td>
          <td>none</td>
          <td>Select a locale for the Timeline. See section <a href="#Localization">Localization</a> for more information.</td>
        </tr>

        <tr>
          <td>locales</td>
          <td>Object</td>
          <td>none</td>
          <td>A map with i18n locales. See section <a href="#Localization">Localization</a> for more information.</td>
        </tr>

        <tr>
          <td>moment</td>
          <td>function</td>
          <td>timeline.moment</td>
          <td>A constructor for creating a moment.js Date. Allows for applying a custom time zone. See section <a href="#Time_zone">Time zone</a> for more information.</td>
        </tr>

        <tr className='toggle collapsible'>
          <td><span parent="margin"></span> margin</td>
          <td>number or Object</td>
          <td>Object</td>
          <td>When a number, applies the margin to <code>{`margin.axis`}</code>, <code>{`margin.item.horizontal`}</code>, and <code>{`margin.item.vertical`}</code>.</td>
        </tr>
        <tr parent="margin">
          <td className="indent">margin.axis</td>
          <td>number</td>
          <td><code>{`20`}</code></td>
          <td>The minimal margin in pixels between items and the time axis.</td>
        </tr>
        <tr parent="margin">
          <td className="indent">margin.item</td>
          <td>number</td>
          <td><code>{`10`}</code></td>
          <td>The minimal margin in pixels between items in both horizontal and vertical direction.</td>
        </tr>
        <tr parent="margin">
          <td className="indent2">margin.item.horizontal</td>
          <td>number</td>
          <td><code>{`10`}</code></td>
          <td>The minimal horizontal margin in pixels between items.</td>
        </tr>
        <tr parent="margin">
          <td className="indent2">margin.item.vertical</td>
          <td>number</td>
          <td><code>{`10`}</code></td>
          <td>The minimal vertical margin in pixels between items.</td>
        </tr>

        <tr>
          <td>max</td>
          <td>Date or Number or String or Moment</td>
          <td>none</td>
          <td>Set a maximum Date for the visible range.
            It will not be possible to move beyond this maximum.
          </td>
        </tr>

        <tr>
          <td>maxHeight</td>
          <td>number or String</td>
          <td>none</td>
          <td>Specifies the maximum height for the Timeline. Can be a number in pixels or a string like "300px".</td>
        </tr>

        <tr>
          <td>maxMinorChars</td>
          <td>number</td>
          <td>7</td>
          <td>
            Specifies the maximum number of characters that should fit in minor grid labels.
            If larger, less and wider grids will be drawn.
          </td>
        </tr>

        <tr>
          <td>min</td>
          <td>Date or Number or String or Moment</td>
          <td>none</td>
          <td>Set a minimum Date for the visible range.
            It will not be possible to move beyond this minimum.
          </td>
        </tr>

        <tr>
          <td>minHeight</td>
          <td>number or String</td>
          <td>none</td>
          <td>Specifies the minimum height for the Timeline. Can be a number in pixels or a string like "300px".</td>
        </tr>

        <tr>
          <td>moveable</td>
          <td>boolean</td>
          <td><code>{`true`}</code></td>
          <td>
            Specifies whether the Timeline can be moved and zoomed by dragging the window.
            See also option <code>{`zoomable`}</code>.
          </td>
        </tr>

        <tr>
          <td>multiselect</td>
          <td>boolean</td>
          <td><code>{`false`}</code></td>
          <td>
            If true, multiple items can be selected using ctrl+click, shift+click, or by holding items.
            Only applicable when option <code>{`selectable`}</code> is <code>{`true`}</code>.
          </td>
        </tr>

        <tr>
          <td style={{fontSize: '0.9em'}}>multiselectPerGroup</td>
          <td>boolean</td>
          <td><code>{`false`}</code></td>
          <td>
            If true, selecting multiple items using shift+click will only select items residing in the same group as the <i>first</i> selected item.
            Only applicable when option <code>{`selectable`}</code> and <code>{`multiselect`}</code> are <code>{`true`}</code>.
          </td>
        </tr>

        <tr>
          <td>onAdd</td>
          <td>function</td>
          <td>none</td>
          <td>Callback function triggered when an item is about to be added: when the user double taps an empty space in the Timeline. See section <a href="#Editing_Items">Editing Items</a> for more information. Only applicable when both options <code>{`selectable`}</code> and <code>{`editable.add`}</code> are set <code>{`true`}</code>.
          </td>
        </tr>
        
        <tr>
          <td>onAddGroup</td>
          <td>function</td>
          <td>none</td>
          <td>Callback function triggered when a group is about to be added. The signature and semantics are the same as for <code>{`onAdd`}</code>.
          </td>
        </tr>
        
        <tr>
            <td>onDropObjectOnItem</td>
            <td>function</td>
            <td>none</td>
            <td>Callback function triggered when an object containing <code>{`target:'item'`}</code> in its drag data is dropped in to a timeline item.
            </td>
        </tr>

        <tr>
          <td>onInitialDrawComplete</td>
          <td>function</td>
          <td>none</td>
          <td>Callback function triggered when the timeline is initially drawn. This function fires once per timeline creation.
          </td>
        </tr>
        
        <tr>
          <td>onMove</td>
          <td>function</td>
          <td>none</td>
          <td>Callback function triggered when an item has been moved: after the user has dragged the item to an other position. See section <a href="#Editing_Items">Editing Items</a> for more information. Only applicable when both options <code>{`selectable`}</code> and <code>{`editable.updateTime`}</code> or <code>{`editable.updateGroup`}</code> are set <code>{`true`}</code>.
          </td>
        </tr>
        
        <tr>
          <td>onMoveGroup</td>
          <td>function</td>
          <td>none</td>
          <td>Callback function triggered when a group has been moved: after the user has dragged the group to an other position. The signature and semantics are the same as for <code>{`onMove`}</code>.
          </td>
        </tr>
        
        <tr>
          <td>onMoving</td>
          <td>function</td>
          <td>none</td>
          <td>Callback function triggered repeatedly when an item is being moved. See section <a href="#Editing_Items">Editing Items</a> for more information. Only applicable when both options <code>{`selectable`}</code> and <code>{`editable.updateTime`}</code> or <code>{`editable.updateGroup`}</code> are set <code>{`true`}</code>.
          </td>
        </tr>
        
        <tr>
          <td>onRemove</td>
          <td>function</td>
          <td>none</td>
          <td>Callback function triggered when an item is about to be removed: when the user tapped the delete button on the top right of a selected item. See section <a href="#Editing_Items">Editing Items</a> for more information. Only applicable when both options <code>{`selectable`}</code> and <code>{`editable.remove`}</code> are set <code>{`true`}</code>.
          </td>
        </tr>
        
        <tr>
          <td>onRemoveGroup</td>
          <td>function</td>
          <td>none</td>
          <td>Callback function triggered when a group is about to be removed. The signature and semantics are the same as for <code>{`onRemove`}</code>.
          </td>
        </tr>

        <tr className='toggle collapsible'>
          <td><span parent="onTimeout"></span> onTimeout</td>
          <td>Object</td>
          <td><code>{`Object`}</code></td>
          <td>Specify timeline bailing options when a specified timeout is reached.</td>
        </tr>
        <tr parent="onTimeout">
          <td className="indent">onTimeout.timeoutMs</td>
          <td>number</td>
          <td>none</td>
          <td>Number of milliseconds until the callback function should be called. 
            The callback will not be called if the timeline gets drawn completely before the timeoutMs limit.</td>
        </tr>

        <tr parent="onTimeout">
          <td className="indent">onTimeout.callback</td>
          <td>function</td>
          <td>none</td>
          <td>
            A callback function called when <code>{`timeoutMs`}</code> milliseconds pass and the timeline has yet to be fully drawn initially.
          </td>
        </tr>
        
        <tr>
          <td>onUpdate</td>
          <td>function</td>
          <td>none</td>
          <td>Callback function triggered when an item is about to be updated, when the user double taps an item in the Timeline. See section <a href="#Editing_Items">Editing Items</a> for more information. Only applicable when both options <code>{`selectable`}</code> and <code>{`editable.updateTime`}</code> or <code>{`editable.updateGroup`}</code> are set <code>{`true`}</code>.
          </td>
        </tr>
        
        <tr>
          <td>order</td>
          <td>function</td>
          <td>none</td>
          <td>
            <p>Provide a custom sort function to order the items. The order of the
              items is determining the way they are stacked. The function
              order is called with two arguments containing the data of two items to be
              compared.
            </p>
            <p style={{fontStyle: 'italic'}}>WARNING: Use with caution. Custom ordering is not suitable for large amounts of items. On load, the Timeline will render all items once to determine their width and height. Keep the number of items in this configuration limited to a maximum of a few hundred items.</p>
          </td>
        </tr>

        <tr className='toggle collapsible'>
          <td><span parent="orientation"></span> orientation</td>
          <td>String or Object</td>
          <td><code>{`'bottom'`}</code></td>
          <td>Orientation of the timelines axis and items. When orientation is a string, the value is applied to both items and axis. Can be 'top', 'bottom' (default), 'both', or 'none'.</td>
        </tr>
        <tr parent="orientation">
          <td className="indent">orientation.axis</td>
          <td>String</td>
          <td><code>{`'bottom'`}</code></td>
          <td>Orientation of the timeline axis: 'top', 'bottom' (default), 'both', or 'none'. If orientation is 'bottom', the time axis is drawn at the bottom. When 'top', the axis is drawn on top. When 'both', two axes are drawn, both on top and at the bottom. In case of 'none', no axis is drawn at all.</td>
        </tr>
        <tr parent="orientation">
          <td className="indent">orientation.item</td>
          <td>String</td>
          <td><code>{`'bottom'`}</code></td>
          <td>Orientation of the timeline items: 'top' or 'bottom' (default). Determines whether items are aligned to the top or bottom of the Timeline.</td>
        </tr>

        <tr className='toggle collapsible'>
          <td><span parent="rollingMode"></span> rollingMode</td>
          <td>Object</td>
          <td><code>{`Object`}</code></td>
          <td>Specify how the timeline implements rolling mode.</td>
        </tr>
        <tr parent="rollingMode">
          <td className="indent">rollingMode.follow</td>
          <td>boolean</td>
          <td><code>{`false`}</code></td>
          <td>If true, the timeline will initial in a rolling mode - the current time will always be centered. I the user drags the timeline, the timeline will go out of rolling mode and a toggle button will appear. Clicking that button will go back to rolling mode. Zooming in rolling mode will zoom in to the center without consideration of the mouse position.</td>
        </tr>

        <tr parent="rollingMode">
          <td className="indent">rollingMode.offset</td>
          <td>Number</td>
          <td><code>{`'0.5'`}</code></td>
          <td>
            Set how far from the left the rolling mode is implemented from. A percentage (i.e. a decimal between 0 and 1)
            Defaults to the middle or 0.5 (50%)
          </td>
        </tr>

        <tr>
          <td>rtl</td>
          <td>boolean</td>
          <td><code>{`false`}</code></td>
          <td>If true, the timeline will be right-to-left. Note: you can achieve rtl timeline by defining a parent node with <code>{`dir="rtl"`}</code>. The timeline knows to take the nearest parent node direction and apply it. Notice that the timeline will prefer the <code>{`option.rtl`}</code> over any parent <code>{`dir="rtl"`}</code></td>
        </tr>

        <tr>
          <td>selectable</td>
          <td>boolean</td>
          <td><code>{`true`}</code></td>
          <td>If true, the items on the timeline can be selected. Multiple items can be selected by long pressing them, or by using ctrl+click or shift+click. The event <code>{`select`}</code> is fired each time the selection has changed (see section <a href="#Events">Events</a>).</td>
        </tr>

        <tr>
          <td>showCurrentTime</td>
          <td>boolean</td>
          <td><code>{`true`}</code></td>
          <td>Show a vertical bar at the current time.</td>
        </tr>

        <tr>
          <td>showMajorLabels</td>
          <td>boolean</td>
          <td><code>{`true`}</code></td>
          <td>By default, the timeline shows both minor and major date labels on the
            time axis.
            For example the minor labels show minutes and the major labels show hours.
            When <code>{`showMajorLabels`}</code> is <code>{`false`}</code>, no major labels
            are shown.</td>
        </tr>

        <tr>
          <td>showMinorLabels</td>
          <td>boolean</td>
          <td><code>{`true`}</code></td>
          <td>By default, the timeline shows both minor and major date labels on the
            time axis.
            For example the minor labels show minutes and the major labels show hours.
            When <code>{`showMinorLabels`}</code> is <code>{`false`}</code>, no minor labels
            are shown. When both <code>{`showMajorLabels`}</code> and
            <code>{`showMinorLabels`}</code> are false, no horizontal axis will be
            visible.</td>
        </tr>

        <tr>
          <td>showTooltips</td>
          <td>boolean</td>
          <td><code>{`true`}</code></td>
          <td>If true, items with titles will display a tooltip. If false, item tooltips are prevented from showing.</td>
        </tr>

        <tr>
          <td>stack</td>
          <td>boolean</td>
          <td><code>{`true`}</code></td>
          <td>If true (default), items will be stacked on top of each other such that they do not overlap.</td>
        </tr>

        <tr>
          <td>stackSubgroups</td>
          <td>boolean</td>
          <td><code>{`true`}</code></td>
          <td>If true (default), subgroups will be stacked on top of each other such that they do not overlap.</td>
        </tr>

        <tr className='toggle collapsible'>
          <td><span parent="cluster"></span> cluster</td>
          <td>Object or boolean</td>
          <td><code>{`false`}</code></td>
          <td>If true, overlapped items will be grouped to clusters, zooming will change that grouping. Use this option when a huge amount of items should be rendered.
          </td>
        </tr>
        <tr parent="cluster">
          <td className="indent">cluster.maxItems</td>
          <td>number or null</td>
          <td><code>{`1`}</code></td>
          <td>Overlapped items will be not grouped until the number of items is within maxItems. The default value of <code>{`maxItems`}</code> is <code>{`1`}</code>, it means that each two overlapped items will be clustered.</td>
        </tr>
        <tr parent="cluster">
          <td className="indent">cluster.titleTemplate</td>
          <td>string or null</td>
          <td><code>{`none`}</code></td>
          <td>Cluster item tooltip</td>
        </tr>
        <tr parent="cluster">
          <td className="indent">cluster.clusterCriteria</td>
          <td>function or null</td>
          <td><code>{`() => true`}</code></td>
          <td>If specified, determines whether overlapped items should go to the same cluster. The signature of the clusterCriteria function is:
            <pre className="prettyprint lang-js">{`function clusterCriteria(firstItem: Object, secondItem: Object) : boolean`}.</pre></td>
        </tr>
        <tr parent="cluster">
          <td className="indent">cluster.showStipes</td>
          <td>boolean</td>
          <td><code>{`false`}</code></td>
          <td>If true, line from cluster to time axis is displayed when content overflows.</td>
        </tr>

        <tr>
          <td>snap</td>
          <td>function or null</td>
          <td>function</td>
          <td>When moving items on the Timeline, they will be snapped to nice dates like full hours or days, depending on the current scale. The <code>{`snap`}</code> function can be replaced with a custom function, or can be set to <code>{`null`}</code> to disable snapping. The signature of the snap function is:
            <pre className="prettyprint lang-js">{`function snap(date: Date, scale: string, step: number) : Date or number`}</pre>
            The parameter <code>{`scale`}</code> can be can be 'millisecond', 'second', 'minute', 'hour', 'weekday, 'week', 'day, 'month, or 'year'. The parameter <code>{`step`}</code> is a number like 1, 2, 4, 5.
          </td>
        </tr>

        <tr>
          <td>start</td>
          <td>Date or Number or String or Moment</td>
          <td>none</td>
          <td>The initial start date for the axis of the timeline.
            If not provided, the earliest date present in the events is taken as start date.</td>
        </tr>

        <tr>
          <td>template</td>
          <td>function</td>
          <td>none</td>
          <td>A template function used to generate the contents of the items. The function is called by the Timeline with an items' data as the first argument, the item element as the second argument and the edited data as the third argument, and must return HTML code, a string or a template as result. When the option template is specified, the items do not need to have a field <code>{`content`}</code>. See section <a href="#Templates">Templates</a> for a detailed explanation.</td>
        </tr>

        <tr>
          <td>visibleFrameTemplate</td>
          <td>function</td>
          <td>none</td>
          <td>A template function used to generate the visible frame of the items. The function is called by the Timeline with an items' data as the first argument and the item frame element as the second, and must return HTML code, a string or a template as result. When the option template is specified, the items do not need to have a field <code>{`content`}</code>. See section <a href="#Templates">Templates</a> for a detailed explanation.
          This would be used as an additional way to add content that is constant in size with the visible frame of the item and does not get visibly hidden with the item's internal container: <code>{`timeline-item-overflow`}</code> which is <code>{`overflow:hidden`}</code>.</td>
        </tr>

        <tr className='toggle collapsible'>
          <td><span parent="timeAxis"></span> timeAxis</td>
          <td>Object</td>
          <td><code>{`Object`}</code></td>
          <td>Specify a fixed scale and step size for the time axis.</td>
        </tr>
        <tr parent="timeAxis">
          <td className="indent">timeAxis.scale</td>
          <td>String</td>
          <td>none</td>
          <td>Set a fixed scale for the time axis of the Timeline. Choose from <code>{`'millisecond'`}</code>, <code>{`'second'`}</code>, <code>{`'minute'`}</code>, <code>{`'hour'`}</code>, <code>{`'weekday'`}</code>, <code>{`'week'`}</code>, <code>{`'day'`}</code>, <code>{`'month'`}</code>, <code>{`'year'`}</code>. Example usage:
          <pre className="prettyprint lang-js">
{`var options = {
  timeAxis: {scale: 'minute', step: 5}
}`}
          </pre>
            <p>Note: The 'week' scale only works properly when <a href="#Localization">locales</a> are enabled.</p>
          </td>
        </tr>

        <tr parent="timeAxis">
          <td className="indent">timeAxis.step</td>
          <td>number</td>
          <td><code>{`1`}</code></td>
          <td>
            Set a fixed step size for the time axis. Only applicable when used together with <code>{`timeAxis.scale`}</code>.
            Choose for example 1, 2, 5, or 10.</td>
        </tr>

        <tr>
          <td>type</td>
          <td>String</td>
          <td>none</td>
          <td>Specifies the default type for the timeline items. Choose from 'box', 'point', 'range', and 'background'. Note that individual items can override this default type. If undefined, the Timeline will auto detect the type from the items data: if a start and end date is available, a 'range' will be created, and else, a 'box' is created. Items of type 'background' are not editable.
          </td>
        </tr>

        <tr className='toggle collapsible'>
          <td><span parent="tooltip"></span> tooltip</td>
          <td>Object</td>
          <td><code>{`Object`}</code></td>
          <td>Specify how the tooltip is positioned.</td>
        </tr>
        <tr parent="tooltip">
          <td className="indent">tooltip.followMouse</td>
          <td>boolean</td>
          <td><code>{`false`}</code></td>
          <td>If true, tooltips will follow the mouse as they move around in the item.</td>
        </tr>

        <tr parent="tooltip">
          <td className="indent">tooltip.overflowMethod</td>
          <td>String</td>
          <td><code>{`'flip'`}</code></td>
          <td>
            Set how the tooltip should act if it is about to overflow out of the timeline.<br />
            Choose from <code>{`'cap'`}</code> and <code>{`'flip'`}</code>. <br />
            If it is set to <code>{`'cap'`}</code>, the tooltip will just cap its position to inside to timeline. <br />
            While if it is set to <code>{`'flip'`}</code>, the position of the tooltip will flip around the cursor so that a corner is at the cursor, and the rest of it is visible. <br />
          </td>
        </tr>

        <tr className='toggle collapsible'>
          <td><span parent="tooltipOnItemUpdateTime"></span> tooltipOnItemUpdateTime</td>
          <td>Object/Boolean</td>
          <td><code>{`false`}</code></td>
          <td>Show a tooltip on updating an item's time. Note: <code>{`editable.updateTime`}</code> must be <code>{`true`}</code></td>
        </tr>
        <tr parent="tooltipOnItemUpdateTime">
          <td className="indent">template</td>
          <td>Function</td>
          <td>none</td>
          <td>A template function used to generate the contents of the tooltip. The function is called by the Timeline with an item data as the first argument, and must return HTML code, a string or a template as result. See section <a href="#Templates">Templates</a> for a detailed explanation.
          </td>
        </tr>
        <tr>
          <td>verticalScroll</td>
          <td>Boolean</td>
          <td><code>{`false`}</code></td>
          <td> Show a vertical scroll on the side of the group list and link it to the scroll event when zoom is not triggered. Notice that defining this option as <code>{`true`}</code> will NOT override <code>{`horizontalScroll`}</code>. The scroll event will be vertically ignored, but a vertical scrollbar will be visible
          </td>
        </tr>

        <tr>
          <td>width</td>
          <td>String or Number</td>
          <td><code>{`'100%'`}</code></td>
          <td>The width of the timeline in pixels or as a percentage.</td>
        </tr>

        <tr>
          <td>zoomable</td>
          <td>boolean</td>
          <td><code>{`true`}</code></td>
          <td>
            Specifies whether the Timeline can be zoomed by pinching or scrolling in the window.
            Only applicable when option <code>{`moveable`}</code> is set <code>{`true`}</code>.
          </td>
        </tr>

        <tr>
          <td>zoomKey</td>
          <td>String</td>
          <td><code>{`''`}</code></td>
          <td>Specifies whether the Timeline is only zoomed when an additional key is down.
            Available values are '' (does not apply), 'altKey', 'ctrlKey', or 'metaKey'.
            Only applicable when option <code>{`moveable`}</code> is set <code>{`true`}</code>.
          </td>
        </tr>

        <tr>
          <td>zoomMax</td>
          <td>number</td>
          <td><code>{`315360000000000`}</code></td>
          <td>Set a maximum zoom interval for the visible range in milliseconds.
            It will not be possible to zoom out further than this maximum.
            Default value equals about 10000 years.
          </td>
        </tr>

        <tr>
          <td>zoomMin</td>
          <td>number</td>
          <td><code>{`10`}</code></td>
          <td>Set a minimum zoom interval for the visible range in milliseconds.
            It will not be possible to zoom in further than this minimum.
          </td>
        </tr>
      </tbody>
      </table>
      </div>
    );
  }
}

OptionsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OptionsPage);