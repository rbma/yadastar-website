'use strict';


import React from 'react';


const RBMAText = React.createClass({

	propTypes: {
		currentData: React.PropTypes.object,
		siteData: React.PropTypes.object
	},

	_rawMarkup: function(){
		return {
			__html: this.props.currentData.body
		};
	},

	componentDidMount: function(){
		const year = document.getElementById('number');

		if (year){
			year.innerHTML = '<strong>' + this.props.siteData.academyCount + '</strong>';
		}
	},

	componentDidUpdate: function(oldProps){

		if (oldProps.currentData !== this.props.currentData){
			const year = document.getElementById('number');

			if (year){
				year.innerHTML = '<strong>' + this.props.siteData.academyCount + '</strong>';
			}
		}
	},


	render: function(){

		if (!this.props.currentData){
			return null;
		}


		return (
			<div className="main-text" dangerouslySetInnerHTML={this._rawMarkup()}>
			</div>
		);
	}

});


export default RBMAText;