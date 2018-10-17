import React, { Component } from 'react';
import BuzzWordData from '../components/BuzzWordData';
import BuzzWordInput from '../components/BuzzWordInput';
import './BuzzWord.css';

class MeetTheTeam extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			address: '',
			loaded: false
		};
	}

	// function to get data from its child and set to its own state
	setProps = (name, val) => this.setState({ [name]: val });


  // TODO: Add a progress bar when data is loading
	render() {
    const styleContacts = {
      backgroundColor: 'white',
    };

    const titleList = {
      textAlign: 'left'
    }

		return (
      <div style={styleContacts}>
        <h1>Meet the Team</h1>
        <ul style={titleList}>
          <li>#1</li>
          <li>#2</li>
          <li>#3</li>
          <li>#4</li>
          <li>#5</li>
        </ul>
      </div>
		);
	}
}

export default MeetTheTeam;
