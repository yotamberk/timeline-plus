import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
  },
});

class LocalizationPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <h2 id="Localization">Localization</h2>
      <p>
        Timeline can be localized. For localization, Timeline depends largely on the localization of <a href="http://momentjs.com">moment.js</a>. Locales are not included in timeline.js by default. To enable localization, moment.js must be loaded with locales. Moment.js offers a bundle named "moment-with-locales.min.js" for this and there are various alternative ways to load locales.
      </p>

      <p>
        To set a locale for the Timeline, specify the option <code>{`locale`}</code>:
      </p>

    <pre className="prettyprint lang-js">
{`var options = {
locale: 'nl'
};`}
    </pre>

      <h3>Create a new locale</h3>

      To load a locale (that is not supported by default) into the Timeline, one can add a new locale to the option <code>{`locales`}</code>:

    <pre className="prettyprint lang-js">
{`var options = {
locales: {
// create a new locale (text strings should be replaced with localized strings)
mylocale: {
  current: 'current',
  time: 'time',
}
},

// use the new locale
locale: 'mylocale'
};
`}
    </pre>

      <h3 id="available-locales">Available locales</h3>

      <p>
        Timeline comes with support for the following locales:
      </p>

      <table>
      <tbody>
        <tr>
          <th>Language</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>English</td>
          <td>
            <code>{`en`}</code><br/>
            <code>{`en_EN`}</code><br/>
            <code>{`en_US`}</code>
          </td>
        </tr>
        <tr>
          <td>Italian</td>
          <td>
            <code>{`it`}</code><br/>
            <code>{`it_IT`}</code><br/>
            <code>{`it_CH`}</code>
          </td>
        </tr>
        <tr>
          <td>Dutch</td>
          <td>
            <code>{`nl`}</code><br/>
            <code>{`nl_NL`}</code><br/>
            <code>{`nl_BE`}</code>
          </td>
        </tr>
      <tr>
          <td>German</td>
          <td>
            <code>{`de`}</code><br/>
            <code>{`de_DE`}</code><br/>
          </td>
        </tr>
      </tbody>
        </table>


      <h2 id="Time_zone">Time zone</h2>
      <p>
        By default, the Timeline displays time in local time. To display a Timeline in another time zone or in UTC, the date constructor can be overloaded via the configuration option <code>{`moment`}</code>, which by default is the constructor function of moment.js. More information about UTC with moment.js can be found in the docs: <a href="http://momentjs.com/docs/#/parsing/utc/">http://momentjs.com/docs/#/parsing/utc/</a>.
      </p>

      <p>
        Examples:
      </p>

    <pre className="prettyprint lang-js">
{`//display in UTC
var options = {
moment: function(date) {
return timeline.moment(date).utc();
}
};

// display in UTC +08:00
var options = {
moment: function(date) {
return timeline.moment(date).utcOffset('+08:00');
}
};`}
    </pre>

      </div>
    );
  }
}

LocalizationPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocalizationPage);