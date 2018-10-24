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
				<header className="landing-page-header">
					<div>
						<h1 className="landing-page-text">vuSearch</h1>
						<h3 className="landing-page-text"> The new AI B2B solution in e-commerce. </h3>
					</div>
				</header>
			</div>
		);
	}
}

export default Banner;
