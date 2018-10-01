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
        
      </div>
    );
  }
}

GroupsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupsPage);