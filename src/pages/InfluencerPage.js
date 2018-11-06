import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import UserDisplay from '../components/UserDisplay'
import axios from 'axios';
import querystring from "querystring";
import {
  CircularProgress,
  MenuItem,
  FormControl,
  Grid,
  Select,
  InputLabel,
  Button,
  TextField,
} from '@material-ui/core';

const styles = theme => ({
  gridList: {
    width: 500,
    height: 450,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
    width: 100,
    height: 45,
  },
  gridList: {
    width: 2000,
    height: 450,
  },
  circularProgress: {
    height: 20
  }
});

class InfluencerPage extends Component {
  state = {
    users: [],
    sort: "",
    follower: "",
    category: "",
    gender: "",
    engagement: "",
    loading: false
  };

  changeHandler = name => e => {
    this.setState({ 
      [name]: e.target.value
    }, () => this.searchHandler());
  }

  searchHandler = () => {
    this.setState({ loading: true });

    const requestBody = querystring.stringify({ 
      brandCategories: this.state.category,
      followers: this.state.follower,
      engagements: this.state.engagement,
      gender: this.state.gender,
      sort: this.state.sort
    });
    
    axios.post('http://papago-env.yrrdssvmkj.us-west-1.elasticbeanstalk.com/filter/', requestBody)
    .then(response => {
      window.scrollTo(0, 0);
      this.setState({
        users: response.data.slice(0, 40),
        loading: false,
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  getPageUsersHandler = (page) => {
    // if (page < 1 || page > this.state.allPages) return;
    // this.setState({
    //   users: this.state.allUsers.slice((page - 1) * 32, page * 32),
    //   selectedPage: page
    // });
  }

  render () {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="sort-by">Sort By</InputLabel>
            <Select
              value={this.state.sort}
              onChange={this.changeHandler('sort')}
              inputProps={{
                name: 'sort',
                id: 'sort-by',
              }}
            >
              <MenuItem value="followersMinus">Followers Most to Least</MenuItem>
              <MenuItem value="followersPlus">Followers Least to Most</MenuItem>
              <MenuItem value="engagementMinus">Engagements Highest to Lowest</MenuItem>
              <MenuItem value="engagementPlus">Engagements Lowest to Highest</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="category-of">Category</InputLabel>
              <Select
                value={this.state.category}
                onChange={this.changeHandler('category')}
                inputProps={{
                  name: 'category',
                  id: 'category-of',
                }}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Music">Music</MenuItem>
                <MenuItem value="Clothes, Shoes, Handbags & Accessories">
                  Clothes, Shoes, Handbags & Accessories
                </MenuItem>
                <MenuItem value="Business & Careers">
                  Business & Careers
                </MenuItem>
                <MenuItem value="Sports">
                  Sports
                </MenuItem>
                <MenuItem value="Restaurants, Food & Grocery">
                  Restaurants, Food & Grocery
                </MenuItem>
                <MenuItem value="Television & Film">
                  Television & Film
                </MenuItem>
                <MenuItem value="Art & Design">
                  Art & Design
                </MenuItem>
                <MenuItem value="Fitness & Yoga">
                  Fitness & Yoga
                </MenuItem>
                <MenuItem value="Friends, Family & Relationships">
                  Friends, Family & Relationships
                </MenuItem>
                <MenuItem value="Travel, Tourism & Aviation">
                  Travel, Tourism & Aviation
                </MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="follower">Follower</InputLabel>
            <Select
              value={this.state.follower}
              onChange={this.changeHandler('follower')}
              inputProps={{
                name: 'follower',
                id: 'follower',
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="1 - 1000">1 - 1000</MenuItem>
              <MenuItem value="1001 - 2000">1001 - 2000</MenuItem>
              <MenuItem value="2001 - 3000">2001 - 3000</MenuItem>
              <MenuItem value="3001 - 4000">3001 - 4000</MenuItem>
              <MenuItem value="4001 - 5000">4001 - 5000</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="engagement">Engagement</InputLabel>
            <Select
              value={this.state.engagement}
              onChange={this.changeHandler('engagement')}
              inputProps={{
                name: 'engagement',
                id: 'engagement',
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="0 - 100">0 - 100</MenuItem>
              <MenuItem value="101 - 200">101 - 200</MenuItem>
              <MenuItem value="201 - 300">201 - 300</MenuItem>
              <MenuItem value="301 - 400">301 - 400</MenuItem>
              <MenuItem value="401 - 500">401 - 500</MenuItem>
              <MenuItem value="501 - 600">501 - 600</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="gender">Genders</InputLabel>
            <Select
              value={this.state.gender}
              onChange={this.changeHandler('gender')}
              inputProps={{
                name: 'gender',
                id: 'gender',
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="FEMALE">Female</MenuItem>
              <MenuItem value="MALE">Male</MenuItem>
              <MenuItem value="OTHER">Other</MenuItem>
            </Select>
          </FormControl>
          <div style={{ display: 'inline-block' }}>
            { this.state.loading ? 
              <CircularProgress className={classes.circularProgress} /> :
              <Button
              onClick={this.searchHandler}
                variant="contained"
                size="medium"
                color="primary"
                className={classes.button}
              >
                <span className={classes.buttonText} id="buzz-button-text">Buzz!</span>
              </Button>
            }
          </div>
        </div>
        
        <div style={{ marginLeft: 50, marginRight: 50 }}>
          <UserDisplay users={ this.state.users } />
        </div>
      
      </div>
    )
  }
}

InfluencerPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfluencerPage);