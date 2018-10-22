import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './Banner.css';

class Banner extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
			<img src="/lightscape-735108-unsplash.jpg" width="1500" height="800" />
				<h1> h </h1>
			</div>
		);
	}
}

export default Banner;
