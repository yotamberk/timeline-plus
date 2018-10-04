import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
  },
});

class MethodsPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <h2 id="Methods">Methods</h2>
      <p>
        The Timeline supports the following methods.
      </p>

      <table className="methods">
      <tbody>
        <tr>
          <th>Method</th>
          <th>Return&nbsp;Type</th>
          <th>Description</th>
        </tr>

        <tr>
          <td>addCustomTime([time] [, id])</td>
          <td>number or String</td>
          <td>
            Add new vertical bar representing a custom time that can be dragged by the user.
            Parameter <code>{`time`}</code> can be a Date, Number, or String, and is <code>{`new Date()`}</code> by default.
            Parameter <code>{`id`}</code> can be Number or String and is <code>{`undefined`}</code> by default.
            The <code>{`id`}</code>code> is added as CSS class name of the custom time bar, allowing to style multiple time bars differently.
            The method returns id of the created bar.
          </td>
        </tr>

        <tr>
          <td>destroy()</td>
          <td>none</td>
          <td>Destroy the Timeline. The timeline is removed from memory. all DOM elements and event listeners are cleaned up.
          </td>
        </tr>

        <tr>
          <td>fit([options])</td>
          <td>none</td>
          <td>Adjust the visible window such that it fits all items. See also function <code>{`focus(id)`}</code>.
            Available options:
            <ul>
              <li><code>{`animation: boolean or {duration: number, easingFunction: string}`}</code><br/>If true (default) or an Object, the range is animated smoothly to the new window. An object can be provided to specify duration and easing function. Default duration is 500 ms, and default easing function is <code>{`'easeInOutQuad'`}</code>. Available easing functions: <code>{`"linear"`}</code>, <code>{`"easeInQuad"`}</code>, <code>{`"easeOutQuad"`}</code>, <code>{`"easeInOutQuad"`}</code>, <code>{`"easeInCubic"`}</code>, <code>{`"easeOutCubic"`}</code>, <code>{`"easeInOutCubic"`}</code>, <code>{`"easeInQuart"`}</code>, <code>{`"easeOutQuart"`}</code>, <code>{`"easeInOutQuart"`}</code>, <code>{`"easeInQuint"`}</code>, <code>{`"easeOutQuint"`}</code>, <code>{`"easeInOutQuint"`}</code>.
              </li>
            </ul>
          </td>
        </tr>

        <tr>
          <td>focus(id or ids [, options])</td>
          <td>none</td>
          <td>Adjust the visible window such that the selected item (or multiple items) are centered on screen. See also function <code>{`fit()`}</code>. Available options:
            <ul>
              <li><code>{`animation: boolean or {duration: number, easingFunction: string}`}</code><br/>If true (default) or an Object, the range is animated smoothly to the new window. An object can be provided to specify duration and easing function. Default duration is 500 ms, and default easing function is <code>{`'easeInOutQuad'`}</code>. Available easing functions: <code>{`"linear"`}</code>, <code>{`"easeInQuad"`}</code>, <code>{`"easeOutQuad"`}</code>, <code>{`"easeInOutQuad"`}</code>, <code>{`"easeInCubic"`}</code>, <code>{`"easeOutCubic"`}</code>, <code>{`"easeInOutCubic"`}</code>, <code>{`"easeInQuart"`}</code>, <code>{`"easeOutQuart"`}</code>, <code>{`"easeInOutQuart"`}</code>, <code>{`"easeInQuint"`}</code>, <code>{`"easeOutQuint"`}</code>, <code>{`"easeInOutQuint"`}</code>.</li>
            </ul>
          </td>
        </tr>

        <tr>
          <td>getCurrentTime()</td>
          <td>Date</td>
          <td>Get the current time. Only applicable when option <code>{`showCurrentTime`}</code> is true.
          </td>
        </tr>

        <tr>
          <td>getCustomTime([id])</td>
          <td>Date</td>
          <td>Retrieve the custom time from the custom time bar with given id. Id is <code>{`undefined`}</code> by default.
          </td>
        </tr>

        <tr id="getEventProperties">
          <td>getEventProperties(event)</td>
          <td>Object</td>
          <td>
            Returns an Object with relevant properties from an event:
            <ul>
              <li><code>{`group`}</code> (Number or null): the id of the clicked group.</li>
              <li><code>{`item`}</code> (Number or null): the id of the clicked item.</li>
              <li><code>{`pageX`}</code> (Number): absolute horizontal position of the click event.</li>
              <li><code>{`pageY`}</code> (Number): absolute vertical position of the click event.</li>
              <li><code>{`x`}</code> (Number): relative horizontal position of the click event.</li>
              <li><code>{`y`}</code> (Number): relative vertical position of the click event.</li>
              <li><code>{`time`}</code> (Date): Date of the clicked event.</li>
              <li><code>{`snappedTime`}</code> (Date): Date of the clicked event, snapped to a nice value.</li>
              <li><code>{`what`}</code> (String or null): name of the clicked thing: <code>{`item`}</code>, <code>{`background`}</code>, <code>{`axis`}</code>, <code>{`group-label`}</code>, <code>{`custom-time`}</code>, or <code>{`current-time`}</code>.</li>
              <li><code>{`event`}</code> (Object): the original click event.</li>
            </ul>
            Example usage:
            <pre className="prettyprint lang-js">
{`document.getElementById('myTimeline').onclick = function (event) {
var props = timeline.getEventProperties(event)
console.log(props);
}`}
            </pre>
          </td>
        </tr>

        <tr>
          <td>getItemRange()</td>
          <td>Object</td>
          <td>Get the range of all the items as an object containing <code>{`min: Date`}</code> and <code>{`max: Date`}</code>.</td>
        </tr>

        <tr>
          <td>getSelection()</td>
          <td>number[]</td>
          <td>Get an array with the ids of the currently selected items.</td>
        </tr>

        <tr>
          <td>getVisibleItems()</td>
          <td>number[]</td>
          <td>Get an array with the ids of the currently visible items.</td>
        </tr>

        <tr>
          <td>getWindow()</td>
          <td>Object</td>
          <td>Get the current visible window. Returns an object with properties <code>{`start: Date`}</code> and <code>{`end: Date`}</code>.</td>
        </tr>

        <tr>
          <td>isActive()</td>
          <td>Boolean</td>
          <td>Denotes whether the timeline is currently active. This method only returns <code>{`false`}</code> if the timline has the <code>{`{clickToUse:true}`}</code> option enabled and the timeline is currently unselected.</td>
        </tr>
        
        <tr>
          <td>moveTo(time [, options, callback])</td>
          <td>none</td>
          <td>Move the window such that given time is centered on screen. Parameter <code>{`time`}</code> can be a <code>{`Date`}</code>, <code>{`Number`}</code>, or <code>{`String`}</code>. Available options:
            <ul>
              <li><code>{`animation: boolean or {duration: number, easingFunction: string}`}</code><br/>If true (default) or an Object, the range is animated smoothly to the new window. An object can be provided to specify duration and easing function. Default duration is 500 ms, and default easing function is <code>{`'easeInOutQuad'`}</code>. Available easing functions: <code>{`"linear"`}</code>, <code>{`"easeInQuad"`}</code>, <code>{`"easeOutQuad"`}</code>, <code>{`"easeInOutQuad"`}</code>, <code>{`"easeInCubic"`}</code>, <code>{`"easeOutCubic"`}</code>, <code>{`"easeInOutCubic"`}</code>, <code>{`"easeInQuart"`}</code>, <code>{`"easeOutQuart"`}</code>, <code>{`"easeInOutQuart"`}</code>, <code>{`"easeInQuint"`}</code>, <code>{`"easeOutQuint"`}</code>, <code>{`"easeInOutQuint"`}</code>.</li>
            </ul>
            A callback <code>{`function`}</code> can be passed as an optional parameter. This function will be called at the end of moveTo function.
          </td>
        </tr>

        <tr>
          <td>on(event, callback)</td>
          <td>none</td>
          <td>Create an event listener. The callback function is invoked every time the event is triggered. Available events: <code>{`rangechange`}</code>, <code>{`rangechanged`}</code>, <code>{`select`}</code>, <code>{`itemover`}</code>, <code>{`itemout`}</code>. The callback function is invoked as <code>{`callback(properties)`}</code>, where <code>{`properties`}</code> is an object containing event specific properties. See section <a href="#Events">Events for more information</a>.</td>
        </tr>

        <tr>
          <td>off(event, callback)</td>
          <td>none</td>
          <td>Remove an event listener created before via function <code>{`on(event, callback)`}</code>. See section <a href="#Events">Events for more information</a>.</td>
        </tr>

        <tr>
          <td>redraw()</td>
          <td>none</td>
          <td>Force a redraw of the Timeline. The size of all items will be recalculated.
            Can be useful to manually redraw when option <code>{`autoResize=false`}</code> and the window
            has been resized, or when the items CSS has been changed.
          </td>
        </tr>

        <tr>
          <td>removeCustomTime(id)</td>
          <td>none</td>
          <td>
            Remove vertical bars previously added to the timeline via <code>{`addCustomTime`}</code> method. Parameter <code>{`id`}</code> is the ID of the custom vertical bar returned by <code>{`addCustomTime`}</code> method.
          </td>
        </tr>

        <tr>
          <td>setCurrentTime(time)</td>
          <td>none</td>
          <td>Set a current time. This can be used for example to ensure that a client's time is synchronized with a shared server time.
            <code>{`time`}</code> can be a Date object, numeric timestamp, or ISO date string.
            Only applicable when option <code>{`showCurrentTime`}</code> is true.</td>
        </tr>

        <tr>
          <td>setCustomTime(time [, id])</td>
          <td>none</td>
          <td>Adjust the time of a custom time bar.
            Parameter <code>{`time`}</code> can be a Date object, numeric timestamp, or ISO date string.
            Parameter <code>{`id`}</code> is the id of the custom time bar, and is <code>{`undefined`}</code> by default.
          </td>
        </tr>

        <tr>
          <td>setCustomTimeTitle(title [, id])</td>
          <td>none</td>
          <td>Adjust the title attribute of a custom time bar.
            Parameter <code>{`title`}</code> is the string or function to be set as title. Use empty string to hide the title completely.
            Parameter <code>{`id`}</code> is the id of the custom time bar, and is <code>{`undefined`}</code> by default.
          </td>
        </tr>

        <tr>
          <td>{`setData({groups: groups, items: items})`}</td>
          <td>none</td>
          <td>Set both groups and items at once. Both properties are optional. This is a convenience method for individually calling both <code>{`setItems(items)`}</code> and <code>{`setGroups(groups)`}</code>.
            Both <code>{`items`}</code> and <code>{`groups`}</code> can be an Array with Objects,
            a DataSet (offering 2 way data binding), or a DataView (offering 1 way data binding).
            For each of the groups, the items of the timeline are filtered on the
            property <code>{`group`}</code>, which must correspond with the id of the group.
          </td>
        </tr>

        <tr>
          <td>setGroups(groups)</td>
          <td>none</td>
          <td>Set a data set with groups for the Timeline.
            <code>{`groups`}</code> can be an Array with Objects,
            a DataSet (offering 2 way data binding), or a DataView (offering 1 way data binding).
            For each of the groups, the items of the timeline are filtered on the
            property <code>{`group`}</code>, which must correspond with the id of the group.
          </td>
        </tr>

        <tr>
          <td>setItems(items)</td>
          <td>none</td>
          <td>Set a data set with items for the Timeline.
            <code>{`items`}</code> can be an Array with Objects,
            a DataSet (offering 2 way data binding), or a DataView (offering 1 way data binding).
          </td>
        </tr>

        <tr>
          <td>setOptions(options)</td>
          <td>none</td>
          <td>Set or update options. It is possible to change any option of the timeline at any time. You can for example switch orientation on the fly.
          </td>
        </tr>

        <tr>
          <td>setSelection(id or ids [, options])</td>
          <td>none</td>
          <td>Select one or multiple items by their id. The currently selected items will be unselected. To unselect all selected items, call `setSelection([])`. Available options:
            <ul>
              <li><code>{`focus: boolean`}</code><br/>If true, focus will be set to the selected item(s)</li>
              <li><code>{`animation: boolean or {duration: number, easingFunction: string}`}</code><br/>If true (default) or an Object, the range is animated smoothly to the new window. An object can be provided to specify duration and easing function. Default duration is 500 ms, and default easing function is <code>{`'easeInOutQuad'`}</code>. Only applicable when option focus is true. Available easing functions: <code>{`"linear"`}</code>, <code>{`"easeInQuad"`}</code>, <code>{`"easeOutQuad"`}</code>, <code>{`"easeInOutQuad"`}</code>, <code>{`"easeInCubic"`}</code>, <code>{`"easeOutCubic"`}</code>, <code>{`"easeInOutCubic"`}</code>, <code>{`"easeInQuart"`}</code>, <code>{`"easeOutQuart"`}</code>, <code>{`"easeInOutQuart"`}</code>, <code>{`"easeInQuint"`}</code>, <code>{`"easeOutQuint"`}</code>, <code>{`"easeInOutQuint"`}</code>.</li>
            </ul>
          </td>
        </tr>

        <tr>
          <td>setWindow(start, end [, options, callback])</td>
          <td>none</td>
          <td>Set the current visible window. The parameters <code>{`start`}</code> and <code>{`end`}</code> can be a <code>{`Date`}</code>, <code>{`Number`}</code>, or <code>{`String`}</code>. If the parameter value of <code>{`start`}</code> or <code>{`end`}</code> is null, the parameter will be left unchanged. Available options:
            <ul>
              <li><code>{`animation: boolean or {duration: number, easingFunction: string}`}</code><br/>If true (default) or an Object, the range is animated smoothly to the new window. An object can be provided to specify duration and easing function. Default duration is 500 ms, and default easing function is <code>{`'easeInOutQuad'`}</code>. Available easing functions: <code>{`"linear"`}</code>, <code>{`"easeInQuad"`}</code>, <code>{`"easeOutQuad"`}</code>, <code>{`"easeInOutQuad"`}</code>, <code>{`"easeInCubic"`}</code>, <code>{`"easeOutCubic"`}</code>, <code>{`"easeInOutCubic"`}</code>, <code>{`"easeInQuart"`}</code>, <code>{`"easeOutQuart"`}</code>, <code>{`"easeInOutQuart"`}</code>, <code>{`"easeInQuint"`}</code>, <code>{`"easeOutQuint"`}</code>, <code>{`"easeInOutQuint"`}</code>.</li>
            </ul>
            A callback <code>{`function`}</code> can be passed as an optional parameter. This function will be called at the end of setWindow function. 
          </td>
        </tr>

        <tr>
          <td>toggleRollingMode()</td>
          <td>none</td>
          <td>Toggle rollingMode.
          </td>
        </tr>

        <tr>
          <td>zoomIn(percentage [, options, callback])</td>
          <td>none</td>
          <td>Zoom in the current visible window. The parameter <code>{`percentage`}</code> can be a <code>{`Number`}</code> and must be between 0 and 1. If the parameter value of <code>{`percentage`}</code> is null, the window will be left unchanged. Available options:
            <ul>
              <li><code>{`animation: boolean or {duration: number, easingFunction: string}`}</code><br/>If true (default) or an Object, the range is animated smoothly to the new window. An object can be provided to specify duration and easing function. Default duration is 500 ms, and default easing function is <code>{`'easeInOutQuad'`}</code>. Available easing functions: <code>{`"linear"`}</code>, <code>{`"easeInQuad"`}</code>, <code>{`"easeOutQuad"`}</code>, <code>{`"easeInOutQuad"`}</code>, <code>{`"easeInCubic"`}</code>, <code>{`"easeOutCubic"`}</code>, <code>{`"easeInOutCubic"`}</code>, <code>{`"easeInQuart"`}</code>, <code>{`"easeOutQuart"`}</code>, <code>{`"easeInOutQuart"`}</code>, <code>{`"easeInQuint"`}</code>, <code>{`"easeOutQuint"`}</code>, <code>{`"easeInOutQuint"`}</code>.</li>
            </ul>
            A callback <code>{`function`}</code> can be passed as an optional parameter. This function will be called at the end of zoomIn function.
          </td>
        </tr>
        <tr>
          <td>zoomOut(percentage [, options, callback])</td>
          <td>none</td>
          <td>Zoom out the current visible window. The parameter <code>{`percentage`}</code> can be a <code>{`Number`}</code> and must be between 0 and 1. If the parameter value of <code>{`percentage`}</code> is null, the window will be left unchanged. Available options:
            <ul>
              <li><code>{`animation: boolean or {duration: number, easingFunction: string}`}</code><br/>If true (default) or an Object, the range is animated smoothly to the new window. An object can be provided to specify duration and easing function. Default duration is 500 ms, and default easing function is <code>{`'easeInOutQuad'`}</code>. Available easing functions: <code>{`"linear"`}</code>, <code>{`"easeInQuad"`}</code>, <code>{`"easeOutQuad"`}</code>, <code>{`"easeInOutQuad"`}</code>, <code>{`"easeInCubic"`}</code>, <code>{`"easeOutCubic"`}</code>, <code>{`"easeInOutCubic"`}</code>, <code>{`"easeInQuart"`}</code>, <code>{`"easeOutQuart"`}</code>, <code>{`"easeInOutQuart"`}</code>, <code>{`"easeInQuint"`}</code>, <code>{`"easeOutQuint"`}</code>, <code>{`"easeInOutQuint"`}</code>.</li>
            </ul>
            A callback <code>{`function`}</code> can be passed as an optional parameter. This function will be called at the end of zoomOut function.
          </td>
        </tr>

      </tbody>
        </table>
      </div>
    );
  }
}

MethodsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MethodsPage);