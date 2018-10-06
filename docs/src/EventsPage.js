import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
  },
});

class EventsPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <h2 id="Events">Events</h2>
      <p>
        Timeline fires events when changing the visible window by dragging, when
        selecting items, and when dragging the custom time bar.
      </p>

      <p>
        Here an example on how to listen for a <code>{`select`}</code> event.
      </p>

    <pre className="prettyprint lang-js">
{`timeline.on('select', function (properties) {
alert('selected items: ' + properties.items);
});`}
    </pre>

      <p>
        A listener can be removed via the function <code>{`off`}</code>:
      </p>

    <pre className="prettyprint lang-js">
{`function onSelect (properties) {
alert('selected items: ' + properties.items);
}

// add event listener
timeline.on('select', onSelect);

// do stuff...

// remove event listener
timeline.off('select', onSelect);`}
    </pre>

      <p>
        The following events are available.
      </p>

      <table className="events">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Properties</th>
          <th>Description</th>
        </tr>

        <tr>
          <td>currentTimeTick</td>
          <td>Has no properties</td>
          <td>Fired when the current time bar redraws. The rate depends on the zoom level.</td>
        </tr>

        <tr>
          <td>click</td>
          <td>
            Passes a properties object as returned by the method <a href="#getEventProperties"><code>{`Timeline.getEventProperties(event)`}</code></a>.
          </td>
          <td>Fired when clicked inside the Timeline.
          </td>
        </tr>

        <tr>
          <td>contextmenu</td>
          <td>
            Passes a properties object as returned by the method <a href="#getEventProperties"><code>{`Timeline.getEventProperties(event)`}</code></a>.
          </td>
          <td>Fired when right-clicked inside the Timeline. Note that in order to prevent the context menu from showing up, default behavior of the event must be stopped:
    <pre className="prettyprint lang-js">
{`timeline.on('contextmenu', function (props) {
alert('Right click!');
props.event.preventDefault();
});`}
    </pre>
          </td>
        </tr>

        <tr>
          <td>doubleClick</td>
          <td>
            Passes a properties object as returned by the method <a href="#getEventProperties"><code>{`Timeline.getEventProperties(event)`}</code></a>.
          </td>
          <td>Fired when double clicked inside the Timeline.
          </td>
        </tr>

        <tr>
          <td>drop</td>
          <td>
            Passes a properties object as returned by the method <a href="#getEventProperties"><code>{`Timeline.getEventProperties(event)`}</code></a>.
          </td>
          <td>Fired when dropping inside the Timeline.
          </td>
        </tr>


        <tr>
          <td>mouseOver</td>
          <td>
            Passes a properties object as returned by the method <a href="#getEventProperties"><code>{`Timeline.getEventProperties(event)`}</code></a>.
          </td>
          <td>Fired when the mouse hovers over a timeline element.
          </td>
        </tr>

        <tr>
          <td>mouseDown</td>
          <td>
            Passes a properties object as returned by the method <a href="#getEventProperties"><code>{`Timeline.getEventProperties(event)`}</code></a>.
          </td>
          <td>Fired when the mouse down event is triggered over a timeline element.
          </td>
        </tr>

        <tr>
          <td>mouseUp</td>
          <td>
            Passes a properties object as returned by the method <a href="#getEventProperties"><code>{`Timeline.getEventProperties(event)`}</code></a>.
          </td>
          <td>Fired when the mouse up event is triggered over a timeline element.
          </td>
        </tr>

        <tr>
          <td>mouseMove</td>
          <td>
            Passes a properties object as returned by the method <a href="#getEventProperties"><code>{`Timeline.getEventProperties(event)`}</code></a>.
          </td>
          <td>Fired when the mouse is moved over a timeline element.
          </td>
        </tr>

        <tr>
          <td>groupDragged</td>
          <td>
            Passes the id of the dragged group.
          </td>
          <td>Fired after the dragging of a group is finished.
          </td>
        </tr>

        <tr>
          <td>changed</td>
          <td>
            Has no properties.
          </td>
          <td>Fired once after each graph redraw.
          </td>
        </tr>
        <tr>
          <td>rangechange</td>
          <td>
            <ul>
              <li><code>{`start`}</code> (Number): timestamp of the current start of the window.</li>
              <li><code>{`end`}</code> (Number): timestamp of the current end of the window.</li>
              <li><code>{`byUser`}</code> (Boolean): change happened because of user drag/zoom.</li>
              <li><code>{`event`}</code> (Object): original event triggering the rangechange.</li>
            </ul>
          </td>
          <td>Fired repeatedly when the timeline window is being changed.
          </td>
        </tr>

        <tr>
          <td>rangechanged</td>
          <td>
            <ul>
              <li><code>{`start`}</code> (Number): timestamp of the current start of the window.</li>
              <li><code>{`end`}</code> (Number): timestamp of the current end of the window.</li>
              <li><code>{`byUser`}</code> (Boolean): change happened because of user drag/zoom.</li>
              <li><code>{`event`}</code> (Object): original event triggering the rangechanged.</li>
            </ul>
          </td>
          <td>Fired once after the timeline window has been changed.
          </td>
        </tr>

        <tr>
          <td>select</td>
          <td>
            <ul>
              <li><code>{`items`}</code>: an array with the ids of the selected items</li>
              <li><code>{`event`}</code>: the original click event</li>
            </ul>
          </td>
          <td>Fired after the user selects or deselects items by tapping or holding them.
            When a user taps an already selected item, the select event is fired again.
            Not fired when the method <code>{`setSelection`}</code>is executed.
          </td>
        </tr>

        <tr>
          <td>itemover</td>
          <td>
            <ul>
              <li><code>{`item`}</code>: hovered item id</li>
              <li><code>{`event`}</code>: the original mouseover event</li>
            </ul>
          </td>
          <td>Fired when the user moves the mouse over an item.</td>
        </tr>

        <tr>
          <td>itemout</td>
          <td>
            <ul>
              <li><code>{`item`}</code>: hovered item id</li>
              <li><code>{`event`}</code>: the original mouseout event</li>
            </ul>
          </td>
          <td>Fired when the user moves the mouse out of an item.</td>
        </tr>

        <tr>
          <td>timechange</td>
          <td>
            <ul>
              <li><code>{`id`}</code> (Number or String): custom time bar id.</li>
              <li><code>{`time`}</code> (Date): the custom time.</li>
              <li><code>{`event`}</code> (Object): original event triggering the timechange.</li>
            </ul>
          </td>
          <td>Fired repeatedly when the user is dragging the custom time bar.
            Only available when the custom time bar is enabled.
          </td>
        </tr>

        <tr>
          <td>timechanged</td>
          <td>
            <ul>
              <li><code>{`id`}</code> (Number or String): custom time bar id.</li>
              <li><code>{`time`}</code> (Date): the custom time.</li>
              <li><code>{`event`}</code> (Object): original event triggering the timechanged.</li>
            </ul>
          </td>
          <td>Fired once after the user has dragged the custom time bar.
            Only available when the custom time bar is enabled.
          </td>
        </tr>

      </tbody>
        </table>
      </div>
    );
  }
}

EventsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventsPage);