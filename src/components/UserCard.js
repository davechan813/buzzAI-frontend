import React, {Component} from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  CardMedia,
  Button,
  withStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
  card: {
    width: 300,
    height: 400,
    margin: theme.spacing.unit * 2,
  },
  cardActionArea: {
    width: 300,
    height: 400,
  },
  media: {
    objectFit: 'cover',
    width: 250,
    paddingLeft: '8%',
    paddingTop: '2%',
    // paddingRight: '20%',
  },
});

class UserCard extends Component {
  changePictureSource = picture => {
    var res = "";
    for (var i = picture.length - 1; i >= 0; i--) {
      if (picture[i] === '/') break;
      res = picture[i] + res;
    }
    return ("http://papago-dadada2.s3-us-west-1.amazonaws.com/image_uploader/" + res);
  }

  render () {
    const { classes } = this.props;
    return (
      <div style={{ display: 'inline-block' }}>
        <Card className={classes.card}>
          <CardActionArea 
            href={ '/users/' +  (this.props._id.$oid || this.props._id) }
            target="_blank" 
            className={classes.cardActionArea}
          >
            <CardMedia
              component="img"
              image={ this.changePictureSource(this.props.picture) }
              className={classes.media}
              height="200"
            />
            <CardContent>
              <Typography>
                {'@'+this.props.name}<br />
                <strong>Category: </strong>{ this.props.influencer.brandCategories[0].title } and more...<br />
                <strong>Followers: </strong>{ this.props.followers }<br />
                <strong>Engagements: </strong>{ this.props.engagements }<br />
                <strong>Genders: </strong>{ this.props.genders.charAt(0) + this.props.genders.slice(1).toLowerCase() }<br />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    )
  }
}

UserCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserCard);