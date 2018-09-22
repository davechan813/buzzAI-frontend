import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import InputGroup from '../components/InputGroup';
import DataDisplay from '../components/DataDisplay';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { Button, Switch } from '@material-ui/core';
import BuzzWordData from '../components/BuzzWordData';

class BuzzWord extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	setData = (data) => this.setState({ data: data });

	render() {
		return (
			<div>
				<BuzzWordData />
			</div>
		);
	}
}

export default BuzzWord;