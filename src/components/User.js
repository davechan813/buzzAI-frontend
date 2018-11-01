import React, {Component} from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  CardMedia,
  Button
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    width: 300,
    height: 450,
    margin: theme.spacing.unit * 2,
  },
  media: {
    objectFit: 'cover',
    width: 250,
    paddingLeft: '8%',
    paddingTop: '2%',
    // paddingRight: '20%',
  },
});

class User extends Component {
  changePictureSource = picture => {
    var res = "";
    for (var i = picture.length - 1; i >= 0; i--) {
      if (picture[i] === '/') break;
      res = picture[i] + res;
    }
    return ("http://papago-dadada2.s3-us-west-1.amazonaws.com/image_uploader/" + res);
  }

  render () {
    console.log("herere");
    const { classes } = this.props;
    return (
      <div style={{ display: 'inline-block' }}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={ this.changePictureSource(this.props.picture) }
              className={classes.media}
              height="200"
            />
            <CardContent>
              <Typography component="p">
                {'@'+this.props.name}
                <ul>
                  <li><strong>Category: </strong>{ this.props.influencer.brandCategories[0].title } and more...</li>
                  <li><strong>Followers: </strong>{ this.props.followers }</li>
                  <li><strong>Engagements: </strong>{ this.props.engagements }</li>
                  <li>
                    <strong>Genders: </strong>
                    { this.props.genders.charAt(0) + this.props.genders.slice(1).toLowerCase() }
                  </li>
                </ul>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              // href={'/users/' +  (this.props._id.$oid || this.props._id)}
            >
              Explore
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

User.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(User);