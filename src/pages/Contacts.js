import React, { Component } from 'react';
import BuzzWordData from '../components/BuzzWordData';
import BuzzWordInput from '../components/BuzzWordInput';
import './BuzzWord.css';

class Contacts extends Component {
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
      backgroundColor: 'white'
    };

		return (
      <div style={styleContacts}>
        <h1>Contact</h1>

        <h3>John Doe</h3>
        <p>Email: johndoe@email.com, Phone: (111)-1111-1111</p>
      </div>
		);
	}
}

export default Contacts;
