import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
  },
});

class TemplatesPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <h2 id="Templates">Templates</h2>

      <p>
        Timeline supports templates to format item contents. Any template engine (such as <a href="http://handlebarsjs.com/">handlebars</a> or <a href="http://mustache.github.io/">mustache</a>) can be used, and one can also manually build HTML. In the options, one can provide a template handler. This handler is a function accepting an item's data as the first argument, the item element as the second argument and the edited data as the third argument, and outputs formatted HTML:
      </p>

    <pre className="prettyprint lang-js">
{`var options = {
template: function (item, element, data) {
var html = ... // generate HTML markup for this item
return html;
}
};`}
    </pre>

      <h3>Create HTML manually</h3>

      The HTML for an item can be created manually:

    <pre className="prettyprint lang-js">
{`var options = {
template: function (item, element, data) {
return '<h1>' + item.header + data.moving?' '+ data.start:'' + '</h1><p>' + item.description + '</p>';
},
onMoving: function (item, callback) {
item.moving = true;
}
};`}
    </pre>

      <h3>Using a template engine</h3>

      Using <a href="http://handlebarsjs.com/">handlebars</a>, one can write the template in HTML:

    <pre className="prettyprint lang-html">
{`<script id="item-template" type="text/x-handlebars-template">
<h1>{{header}}</h1>
<p>{{description}}</p>
</script> `}
    </pre>

      Compile the template:

    <pre className="prettyprint lang-js">
{`var source = document.getElementById('item-template').innerHTML;
var template = Handlebars.compile(source);`}
    </pre>

      And then specify the template in the Timeline options

    <pre className="prettyprint lang-js">
{`var options = {
template: template
};`}
    </pre>

    <h3>React templates</h3>

    You can use a React component for the templates by rendering them to the templates' element directly:

    <pre className="prettyprint lang-js">
{`template: function (item, element, data) {
return ReactDOM.render(<b>{item.content}</b>, element);
}`}
    </pre>


      <h3>Multiple templates</h3>

      In order to support multiple templates, the template handler can be extended to switch between different templates, depending on a specific item property:

    <pre className="prettyprint lang-js">
{`var templates = {
template1: Handlebars.compile(...),
template2: Handlebars.compile(...),
template2: Handlebars.compile(...),
...
};

var options = {
template: function (item, element, data) {
var template = templates[item.template];  // choose the right template
return template(item);                    // execute the template
}
};`}
    </pre>

      Now the items can be extended with a property <code>{`template`}</code>, specifying which template to use for the item.

      </div>
    );
  }
}

TemplatesPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemplatesPage);