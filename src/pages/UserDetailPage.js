import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import querystring from "querystring";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  LinearProgress,
  Button,
} from '@material-ui/core';

class UserDetailPage extends Component {
  state = {
    loadedUser: null
  }
  
  changePictureSource = picture => {
    var res = "";
    for (var i = picture.length - 1; i >= 0; i--) {
      if (picture[i] === '/') break;
      res = picture[i] + res;
    }
    return ("http://papago-dadada2.s3-us-west-1.amazonaws.com/image_uploader/" + res);
  }

  componentDidMount() {
    this.loadData();
  }

  getListItem = (type) => {
    let res = "";
    let array = (type === "categories") ? this.state.loadedUser.influencer.brandCategories : this.state.loadedUser.contacts;
    for (var i in array) { // i is for index
      res += (type === "categories") ? (array[i].title + ', ') : (array[i].value + ', ');
    }
    return res.slice(0, -2);
  }

  getLocation = () => {
    if (this.state.loadedUser.influencer.geoLocation.length >= 3) 
      return (
        this.state.loadedUser.influencer.geoLocation[1].title + ', ' +
        this.state.loadedUser.influencer.geoLocation[2].title + ', ' + 
        this.state.loadedUser.influencer.geoLocation[0].title
      );

    return this.state.loadedUser.influencer.geoLocation[0].title;
  }

  loadData() {
    if ( this.props.match.params.oid ) {
      if ( !this.state.loadedUser ) {
        const requestBody = querystring.stringify({ 
          value: this.props.match.params.oid
        });
        axios.post('http://papago-env.yrrdssvmkj.us-west-1.elasticbeanstalk.com/oid/', requestBody)
        .then(response => {
          console.log(response);
          this.setState({ loadedUser: response.data[0] });
        })
        .catch(error => {
          console.log(error);
        });
      }
    }
  }
    
  render() {
    if (!this.state.loadedUser) return <LinearProgress />
    return (    
      <div style={{ marginTop: 30 }}>
        <img 
          width={150} 
          height={150} 
          alt="150x150" 
          src={ this.changePictureSource(this.state.loadedUser.picture) }
          className="image"
        />
        <Table style={{ width: '80%' }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Instagram Link</TableCell>
              <TableCell>Genders</TableCell>
              <TableCell>Location</TableCell> { /* use influencer.geoLocation for detail location */}
              <TableCell>Contacts</TableCell>
              <TableCell>Categories</TableCell> { /* use influencer.geoLocation for detail location */}
              <TableCell>Followers</TableCell>
              <TableCell>Engagements</TableCell>
              <TableCell>Languages</TableCell>
            </TableRow>
          </TableHead>
          <TableBody> { /* make sure table heads and details are correctly matching */ }
            <TableRow>
              <TableCell>{ '@' + this.state.loadedUser.name }</TableCell>
              <TableCell>{ this.state.loadedUser.fullname }</TableCell>
              <TableCell>
                <Button href={this.state.loadedUser.link} target="_blank" >
                  Link
                </Button>
              </TableCell>
              <TableCell>{ this.state.loadedUser.genders }</TableCell>
              <TableCell>{ this.getLocation() }</TableCell>
              <TableCell>{ this.getListItem("contacts") }</TableCell>
              <TableCell>{ this.getListItem("categories") }</TableCell>
              <TableCell>{ this.state.loadedUser.followers }</TableCell>
              <TableCell>{ this.state.loadedUser.engagements }</TableCell>
              <TableCell>{ this.state.loadedUser.influencer.langs==="en" ? "English" : this.state.influencer.langs }</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        
        <Table style={{ width: '80%' }}>
          <TableHead>
            <TableRow>
              <TableCell>Audience Ages</TableCell>
              <TableCell>Audience Genders</TableCell>
              <TableCell>Audience Genders Per Ages</TableCell>
              <TableCell>Audience Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                18-24: { parseFloat(this.state.loadedUser.audienceAges['18-24'])*100 }% <br />
                25-34: { parseFloat(this.state.loadedUser.audienceAges['25-34'])*100 }% <br />
                35-44: { parseFloat(this.state.loadedUser.audienceAges['35-44'])*100 }% <br />
                45-64: { parseFloat(this.state.loadedUser.audienceAges['45-64'])*100 }% <br />
              </TableCell>
              <TableCell>
                Female: { parseFloat(this.state.loadedUser.audienceGenders.FEMALE)*100 }% <br/>
                Male: { 100 - parseFloat(this.state.loadedUser.audienceGenders.FEMALE)*100 }% <br/>
              </TableCell>
              <TableCell>
                18-24 & Female: { parseFloat(this.state.loadedUser.audienceGendersPerAge['18-24'].FEMALE) * 100 }% <br />
                25-34 & Female: { parseFloat(this.state.loadedUser.audienceGendersPerAge['25-34'].FEMALE) * 100 }% <br />
                35-44 & Female: { parseFloat(this.state.loadedUser.audienceGendersPerAge['35-44'].FEMALE) * 100 }% <br />
                45-64 & Female: { parseFloat(this.state.loadedUser.audienceGendersPerAge['45-64'].FEMALE) * 100 }% <br />
              </TableCell>
              <TableCell>
                { this.state.loadedUser.audienceGeoLocation[0].title }: { this.state.loadedUser.audienceGeoLocation[0].weight * 100 }% <br />
                Others: { 100 - this.state.loadedUser.audienceGeoLocation[0].weight*100 }% <br />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
};

export default UserDetailPage;