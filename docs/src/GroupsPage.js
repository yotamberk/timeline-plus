import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
  },
});

class GroupsPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <h3 id="groups">Groups</h3>
      <p>
        For the items, groups can be an Array, a DataSet (offering 2 way data binding),
        or a DataView (offering 1 way data binding).

        Using groups, items can be grouped together.
        Items are filtered per group, and displayed as

        Group items can contain the properties <code>{`id`}</code>,
        <code>{`content`}</code>, and <code>{`className`}</code> (optional).
      </p>
      <p>
        Groups can be applied to a timeline using the method <code>{`setGroups`}</code> or supplied in the constructor.
        A table with groups can be created like:
      </p>

    <pre className="prettyprint lang-js">
{`var groups = [
{
  id: 1,
  content: 'Group 1'
  // Optional: a field 'className', 'style', 'order', [properties]
}
// more groups...
]);`}
    </pre>


      <p>
        Groups can have the following properties:
      </p>

      <table className="properties">
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
          <td>This field is optional. A className can be used to give groups
            an individual css style. For example, when a group has className
            'red', one can define a css style
            <code>{`
              .red {
              color: red;
              }
            `}</code>.
            More details on how to style groups can be found in the section
            <a href="#Styles">Styles</a>.
          </td>
        </tr>
        <tr>
          <td>content</td>
          <td>String or Element</td>
          <td>yes</td>
          <td>The contents of the group. This can be plain text, html code or an html element.</td>
        </tr>
        <tr>
          <td>id</td>
          <td>String or Number</td>
          <td>yes</td>
          <td>An id for the group. The group will display all items having a
            property <code>{`group`}</code> which matches the <code>{`id`}</code>
            of the group.</td>
        </tr>
        <tr>
          <td>style</td>
          <td>String</td>
          <td>no</td>
          <td>
            A css text string to apply custom styling for an individual group label, for
            example <code>{`"color: red; background-color: pink;"`}</code>.
          </td>
        </tr>
        <tr>
          <td>order</td>
          <td>number</td>
          <td>no</td>
          <td>Order of the group in the list.
            By default, groups are ordered by first-come, first-show.
          </td>
        </tr>
        <tr>
          <td>subgroupOrder</td>
          <td>String or Function</td>
          <td>no</td>
          <td>Order the subgroups by a field name or custom sort function.
            By default, groups are ordered by first-come, first-show.
          </td>
        </tr>
        <tr>
          <td>subgroupStack</td>
          <td>Object or Boolean</td>
          <td>no</td>
          <td>Enables stacking within individual subgroups. Example: <code>{`{'subgroup0': true, 'subgroup1': false, 'subgroup2': true}`}</code> 
              For each subgroup where stacking is enabled, items will be stacked on top of each other within that subgroup such that they do no overlap.
              If set to <code>{`true`}</code> all subgroups will be stacked.
              If a value was specified for the <code>{`order`}</code> parameter in the options, that ordering will be used when stacking the items.
          </td>
        </tr>
        <tr>
          <td>title</td>
          <td>String</td>
          <td>no</td>
          <td>A title for the group, displayed when holding the mouse on the groups label.
            The title can only contain plain text.
          </td>
        </tr>
        <tr>
          <td>visible</td>
          <td>Boolean</td>
          <td>no</td>
          <td>Provides a means to toggle the whether a group is displayed or not. Defaults to <code>{`true`}</code>.</td>
        </tr>
        <tr>
          <td>nestedGroups</td>
          <td>Array</td>
          <td>no</td>
          <td>Array of group ids nested in the group. Nested groups will appear under this nesting group.</td>
        </tr>
        <tr>
          <td>showNested</td>
          <td>Boolean</td>
          <td>no</td>
          <td>Assuming the group has nested groups, this will set the initial state of the group - shown or collapsed. The <code>{`showNested`}</code> is defaulted to <code>{`true`}</code>.</td>
        </tr>
        <tr>
          <td>heightMode</td>
          <td>String</td>
          <td>no</td>
          <td>This field is optional. Can be 'auto' (default) or 'fixed'. If set this overrides the global <code>{`groupHeightMode`}</code> configuration option for this group.</td>
        </tr>
      </tbody>
        </table>
      </div>
    );
  }
}

GroupsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupsPage);