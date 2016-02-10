'use strict';

// ------------------------------------------------
// Index Route
//
import React from 'react';

import Header from './Header';
import LanguageList from './LanguageList';
import Intro from './Intro';
import BrandList from './BrandList';
import SubHeader from './SubHeader';
import RBMAText from './RBMAText';
import PostBody from './PostBody';
import Outro from './Outro';
import Contact from './Contact';
import Logo from './Logo';



const Home = React.createClass({

	propTypes: {
		changeLanguage: React.PropTypes.func,
		currentData: React.PropTypes.object
	},




	render: function(){

		console.log(this.props);

		return (
			<div className="center">
				<Header />
				<div className="content">
					<LanguageList
						changeLanguage={this.props.changeLanguage}
					/>
					<Intro currentData={this.props.currentData} />
					<BrandList currentData={this.props.currentData} />
					<SubHeader currentData={this.props.currentData} />
					<RBMAText currentData={this.props.currentData} />
					<PostBody currentData={this.props.currentData} />
					<Outro currentData={this.props.currentData} />
					<Contact currentData={this.props.currentData} />
					<Logo />
				</div>
			</div>
		);
	}
});

export default Home;