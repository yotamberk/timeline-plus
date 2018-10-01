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
        
      </div>
    );
  }
}

TemplatesPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemplatesPage);