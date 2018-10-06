import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Iframe from 'react-iframe';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import BackIcon from '@material-ui/icons/ArrowBack';


import ExamplesList from './examplesList.json'


const styles = theme => ({
  root: {
    flex: '1',
    width: '100%',
  },
  backButton: {
    top: theme.mixins.toolbar.minHeight,
    right: '5px',
    position: 'absolute',
    margin: theme.spacing.unit + 2,
    zIndex: '1111',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  iframe: {
    height: `100%`,
    width: '100%',
  }
});

class ExamplesPage extends React.Component {
  state = {
    chosenExample: null,
  }

  handleClickOpen = (directory, file) => () => {
    this.setState({ chosenExample: { file, directory } });
  };

  handleClose = () => {
    this.setState({ chosenExample: null });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {
          !this.state.chosenExample &&
          <div className='examples-list'>
            {
              ExamplesList.map((exampleDirectory) => {
                return (
                  <div key={exampleDirectory.directory} className='examples-directory'>
                    <Typography variant='title' className={classes.title}>
                      {exampleDirectory.directory}
                    </Typography>
                    <List dense>
                      {
                        exampleDirectory.files.map((file) => {
                          return (
                            <ListItem key={file} dense button onClick={this.handleClickOpen(exampleDirectory.directory, file)}>
                              <ListItemText
                                primary={file}
                              />
                            </ListItem>
                          )
                        })
                      }
                    </List>
                  </div>
                )

              })
            }
          </div>
        }
        {
          this.state.chosenExample &&
          [
            <Button key='back-btn' 
              color='secondary'
              variant='extendedFab'
              aria-label='Back' 
              className={classes.backButton} 
              onClick={this.handleClose}
            >
              <BackIcon className={classes.extendedIcon} />
              Back
            </Button>,
            <Iframe
              key='iframe-container'
              className={classes.iframe}
              url={`${process.env.PUBLIC_URL}/examples/${this.state.chosenExample.directory}/${this.state.chosenExample.file}.html`}
              display='initial'
              position='relative'
              allowFullScreen
            />
          ]
        }
      </div>
    );
  }
}

ExamplesPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExamplesPage);