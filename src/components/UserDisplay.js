import React, {Component} from 'react';
import UserCard from './UserCard';

// Manage each user
class UserDisplay extends Component {
  render () {
    console.log(this.props.users);
    return this.props.users.map((user, index) => {
      return (
        <UserCard
          key={index} // to avoid warning
          audienceAges={ user.audienceAges }
          audienceGenders={ user.audienceGenders }
          audienceGendersPerAge={ user.audienceGendersPerAge }
          audienceGeoLocation={ user.audienceGeoLocation }
          brandCategories={ user.brandCategories }
          contacts={ user.contacts }
          emails={ user.emails }
          engagements={ user.engagements }
          followers={ user.followers }
          fullname={ user.fullname }
          genders={ user.genders }
          geoLocation={ user.geoLocation }
          influencer={ user.influencer }
          langs={ user.langs }
          link={ user.link }
          name={ user.name }
          picture={ user.picture }
          socialId={ user.socialId }
          _id={ user._id }
        />
    )});
  }
}

export default UserDisplay;