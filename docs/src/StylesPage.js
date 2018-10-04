import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
  },
});

class StylesPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h2 id="Styles">Styles</h2>
        <p>
          All parts of the Timeline have a class name and a default css style.
          The styles can be overwritten, which enables full customization of the layout
          of the Timeline.
        </p>

        <p>For example, to change the border and background color of all items, include the
          following code inside the head of your html code or in a separate stylesheet.</p>
    
          <pre className="prettyprint lang-html">
{`<style>
.timeline-item {
border-color: orange;
background-color: yellow;
}
</style>`}
          </pre>

          <h3 id="Grid_Backgrounds">Grid Backgrounds</h3>
          <p>
            The background grid of the time axis can be styled, for example to highlight
            weekends or to create grids with an alternating white/lightgray background.
          </p>
          <p>
            Depending on the zoom level, the grids get certain css classes attached.
            The following classes are available:
          </p>

      
          <table className="styles">
            <tbody>
        <tr>
          <th>Description</th><th>Values</th>
        </tr>
        <tr>
          <td>Alternating columns</td><td><code>{`timeline-even`}</code>, <code>{`timeline-odd`}</code></td>
        </tr>
        <tr>
          <td>Current date</td><td><code>{`timeline-today`}</code>, <code>{`timeline-tomorrow`}</code>, <code>{`timeline-yesterday`}</code>, <code>{`timeline-current-week`}</code>, <code>{`timeline-current-month`}</code>, <code>{`timeline-current-year`}</code></td>
        </tr>
        <tr>
          <td>Hours</td><td><code>{`timeline-h0`}</code>, <code>{`timeline-h1`}</code>, ..., <code>{`timeline-h23`}</code></td>
        </tr>
        <tr>
          <td>Grouped hours</td><td><code>{`timeline-h0-h4`}</code> to <code>{`timeline-h20-h24`}</code></td>
        </tr>
        <tr>
          <td>Weekday</td><td><code>{`timeline-monday`}</code>, <code>{`timeline-tuesday`}</code>, <code>{`timeline-wednesday`}</code>, <code>{`timeline-thursday`}</code>, <code>{`timeline-friday`}</code>, <code>{`timeline-saturday`}</code>, <code>{`timeline-sunday`}</code></td>
        </tr>
        <tr>
          <td>Days</td><td><code>{`timeline-day1`}</code>, <code>{`timeline-day2`}</code>, ..., <code>{`timeline-day31`}</code></td>
        </tr>
        <tr>
          <td>Week</td><td><code>{`timeline-week1`}</code>, <code>{`timeline-week2`}</code>, ..., <code>{`timeline-week53`}</code></td>
        </tr>
        <tr>
          <td>Months</td><td><code>{`timeline-january`}</code>, <code>{`timeline-february`}</code>, <code>{`timeline-march`}</code>, <code>{`timeline-april`}</code>, <code>{`timeline-may`}</code>, <code>{`timeline-june`}</code>, <code>{`timeline-july`}</code>, <code>{`timeline-august`}</code>, <code>{`timeline-september`}</code>, <code>{`timeline-october`}</code>, <code>{`timeline-november`}</code>, <code>{`timeline-december`}</code></td>
        </tr>
        <tr>
          <td>Years</td><td><code>{`timeline-year2014`}</code>, <code>{`timeline-year2015`}</code>, ...</td>
        </tr>
      </tbody>
          </table>
          <p>Note: the 'week' scale is not included in the automatic zoom levels as its scale is not a direct logical successor of 'days' nor a logical predecessor of 'months'</p>

          <p>Examples:</p>

          <pre className="prettyprint lang-html">
{`<style>
/* alternating column backgrounds */
.timeline-time-axis .grid.timeline-odd {
background: #f5f5f5;
}

/* gray background in weekends, white text color */
.timeline-time-axis .timeline-grid.timeline-saturday,
.timeline-time-axis .timeline-grid.timeline-sunday {
background: gray;
}
.timeline-time-axis .timeline-text.timeline-saturday,
.timeline-time-axis .timeline-text.timeline-sunday {
color: white;
}
</style>`}
          </pre>

          <h3 id="Performance_Tips">Performance  Tips</h3>
          <p>Defining a timeline with many items and/or groups might affect initial loading time and general performance.
            Here are some tips to improve performance and avoid slow loading time:</p>
          <ul>
            <li>Define items and group with <code>{`DataSets`}</code></li>
            <li>Avoid applying heavy CSS on items (such as <code>{`box-shadow`}</code>, gradient background colors, etc.)</li>
            <li>Defining a <code>{`start`}</code> and an <code>{`end`}</code> in the timeline options.
            This will improve initial loading time.</li>
          </ul>
        </div>
    )
  }
}

StylesPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StylesPage);