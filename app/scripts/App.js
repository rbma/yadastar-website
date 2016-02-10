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
			console.log(o.name);
			return o.name == lang;
			// return o.name === lang;
		});

		console.log('TARGET', targetPos);

		let newData = self.state.siteData.languages[targetPos];

		this.setState({
			currentData: newData
		});

		console.log(this.state);
	},

	_changeLanguage: function(lang){
		
		const self = this;
		
		let newLanguage = '';

		switch (lang){
			case 'english':
				newLanguage = 'english';
				break;
			case 'french':
				newLanguage = 'french';
				break;
			case 'spanish':
				newLanguage = 'spanish';
				break;
			case 'japanese':
				newLanguage = 'japanese';
				break;
			case 'russian':
				newLanguage = 'russian';
				break;
			case 'hebrew':
				newLanguage = 'hebrew';
				break;
			case 'greek':
				newLanguage = 'greek';
				break;
			case 'deutsch':
				newLanguage = 'deutsch';
				break;
			
			default:
				newLanguage = 'english';
		}

		this.setState({
			language: newLanguage
		}, function(){
			self._fetchLanguage(newLanguage);
		});
	},


	_fetch: function(){
		
		const self = this;

		$.ajax({
			url: 'data/site.json',
			type: 'GET',
			success: function(data){
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


	

	// ------------------------------------------------
	// Fetch initial data
	//
	
	componentDidMount: function(){
		
		this._fetch();


		
	},

	render: function(){
		return (
			<section className="container">
				
				{this.props.children && React.cloneElement(this.props.children, {
					currentData: this.state.currentData,
					changeLanguage: this._changeLanguage,
					language: this.state.language
				})}
			</section>
		);
	}
});


export default App;
