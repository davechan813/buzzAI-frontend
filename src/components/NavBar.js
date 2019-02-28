import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import LocalMenu from './LocalMenu';
import { Button } from '@material-ui/core';
import { inherits } from 'util';

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    float: 'right',
  },
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleDrawer = open => () => {
    this.setState({ open: open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              <a 
                href='/' 
                style={{
                  color: 'inherit',
                  textDecoration: 'inherit'
                }}
              >
                BuzzAI
              </a>
            </Typography>
            <Button
              color="inherit"
              style={{ position: 'absolute', right: 30 }}
            >
              Signup
            </Button>
            <Button
              color="inherit"
              style={{ position: 'absolute', right: 130 }}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>

        <Drawer open={this.state.open} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <LocalMenu />
          </div>
        </Drawer>
     

      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);