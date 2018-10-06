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


const styles = theme => {
  console.log(theme)
  return ({
  root: {
    height: '100%',
    width: '100%',
  },
  backButton: {
    top: theme.mixins.toolbar.minHeight,
    left: '0',
    position: 'absolute',
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
})};

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
                    <Typography variant="title" className={classes.title}>
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
            <Button key='back-btn' variant="extendedFab" aria-label="Delete" className={classes.backButton} onClick={this.handleClose}>
              <BackIcon className={classes.extendedIcon} />
              Back
            </Button>,
            <Iframe
              key='iframe-container'
              url={`${process.env.PUBLIC_URL}/examples/${this.state.chosenExample.directory}/${this.state.chosenExample.file}.html`}
              width="100%"
              height="100%"
              display="initial"
              position="relative"
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