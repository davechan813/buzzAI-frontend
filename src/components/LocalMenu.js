import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import EmailIcon from '@material-ui/icons/Email'
import PeopleIcon from '@material-ui/icons/People'

const styles = {
  list: {
    width: 250,
  },
};

class LocalMenu extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.list}>
        <List component="nav">
          <ListItem component="a" href="/" button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem component="a" href="/buzz" button>
            <ListItemIcon>
              <TrendingUpIcon />
            </ListItemIcon>
            <ListItemText primary="Top Buzzwords" />
          </ListItem>
          <ListItem component="a" href="/keyword" button>
            <ListItemIcon>
              <LocationSearchingIcon />
            </ListItemIcon>
            <ListItemText primary="Latest Trends" />
          </ListItem>
          <Divider />
          <ListItem component="a" href="/team" button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Meet the Team" />
          </ListItem>
          <ListItem component="a" href="/contact" button>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </div>
    );
  }
}

LocalMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocalMenu);