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
        
      </div>
    );
  }
}

LocalizationPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocalizationPage);