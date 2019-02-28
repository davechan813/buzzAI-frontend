import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import KeywordTrend from './KeywordTrend';
import BuzzWord from './BuzzWord';
import Banner from '../components/Banner';
import Contacts from './Contacts';
import MeetTheTeam from './MeetTheTeam';
import InfluencerPage from './InfluencerPage';

class BuzzAI extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	setData = (data) => this.setState({data: data});

	render() {
		console.log(window.location.pathname);
		return (
			<div>
				{window.location.pathname != '/' && <NavBar />}
				<Route path="/" exact component={Banner} />
				<Route path="/buzz" exact component={BuzzWord} />
				<Route path="/keyword/" exact component={KeywordTrend} />
				<Route path="/keyword/:word" exact component={KeywordTrend} />
        		<Route path="/keyword" exact component={KeywordTrend} />
				<Route path="/contact" exact component={Contacts} />
				<Route path="/team" exact component={MeetTheTeam} />
				<Route path='/influencer' exact component={InfluencerPage} />
				<Route path="/users/:oid" exact component={userDetailPage} />
			</div>
		);
	}
}

export default BuzzAI;
