'use strict';

// ------------------------------------------------
// Main App
//

import React from 'react';
import $ from 'jquery';
import _ from 'lodash';

import Header from './components/Header';


const App = React.createClass({

	getInitialState: function(){
		return {
			siteData: null,
			currentData: null,
			language: 'english'
		}
	},

	_parseMarkdown: function(){

	},

	// ------------------------------------------------
	// Fetch language
	//
	_fetchLanguage: function(lang){

		const self = this;

		let targetPos = _.findIndex(self.state.siteData.languages, function(o){
			return o.name = lang;
		});

		let newData = self.state.siteData.languages[targetPos];

		this.setState({
			currentData: newData
		});
	},

	_changeLanguage: function(){
		alert('change language');
	},


	

	// ------------------------------------------------
	// Fetch initial data
	//
	
	componentDidMount: function(){
		const self = this;


		$.ajax({
			url: 'data/site.json',
			type: 'GET',
			success: function(data){
				console.log(data);
				self.setState({
					siteData: data
				}, function(){
					self._fetchLanguage(self.state.language);
				});
				
			},
			error: function(err){
				console.log(err);
			}
		});
	},

	render: function(){
		return (
			<section className="container">
				
				{this.props.children && React.cloneElement(this.props.children, {
					currentData: this.state.currentData,
					changeLanguage: this._changeLanguage
				})}
			</section>
		);
	}
});


export default App;
