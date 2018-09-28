import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NavMenu extends React.Component {
  state = {
    openSection: null,
  };

  changeOpenSection = (section) => {
    this.setState(state => ({ openSection: this.state.openSection === section ? null : section }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav" disablePadding>
          <ListItem button onClick={() => this.changeOpenSection('gettingStarted')}>
            <ListItemText primary='Getting started' />
          </ListItem>
          <Collapse in={this.state.openSection==='gettingStarted'} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/getting-started/installation">
                <ListItem button className={classes.nested}>
                  <ListItemText inset primary="installation" />
                </ListItem>
              </Link>
            </List>
            <List component="div" disablePadding>
              <Link to="/getting-started/usage">
                <ListItem button className={classes.nested}>
                  <ListItemText inset primary="usage" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

NavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavMenu);