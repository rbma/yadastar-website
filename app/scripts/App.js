'use strict';

// ------------------------------------------------
// Main App
//

import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import Header from './components/Header';


const App = React.createClass({

	getInitialState: function(){
		return {
			siteData: null,
			currentData: null,
			brands: null,
			language: 'english',
			invert: Math.random()
		}
	},

	// ------------------------------------------------
	// Fetch language
	//
	_fetchLanguage: function(lang){

		const self = this;


		let targetPos = _.findIndex(self.state.siteData.languages, function(o){
			return o.name === lang;
		});

		let newData = self.state.siteData.languages[targetPos];

		this.setState({
			currentData: newData
		});
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

		function setData(data){
			self.setState({
				siteData: data
			}, function(){
				self._fetchLanguage(self.state.language);
			});
		}

		let request = new XMLHttpRequest();
		request.open('GET', 'data/site.json', true);

		request.onload = function(){
			if (request.status >= 200 && request.status < 400){
				setData(JSON.parse(request.responseText));
			}
			else{
				console.log('FETCH ERROR');
			}
		};

		request.onerror = function(){
			console.log('FETCH ERROR');
		};

		request.send();

	},


	

	// ------------------------------------------------
	// Fetch initial data
	//
	
	componentDidMount: function(){
		
		this._fetch();
	},



	// ------------------------------------------------
	// Render
	//
	
	render: function(){

		let invert = false;
		if (this.state.invert < 0.5){
			invert = true;
		}

		let cx = classNames({
			container: true,
			invert: invert
		});

		return (
			<section className={cx}>
				
				{this.props.children && React.cloneElement(this.props.children, {
					currentData: this.state.currentData,
					changeLanguage: this._changeLanguage,
					language: this.state.language,
					siteData: this.state.siteData
				})}
			</section>
		);
	}
});


export default App;
