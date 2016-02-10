'use strict';


import React from 'react';


const RBMAText = React.createClass({

	propTypes: {
		currentData: React.PropTypes.object
	},

	_rawMarkup: function(){
		return {
			__html: this.props.currentData.body
		};
	},


	render: function(){

		if (!this.props.currentData){
			return null;
		}


		return (
			<div className="wrapper5" dangerouslySetInnerHTML={this._rawMarkup()}>
			</div>
		);
	}

});


export default RBMAText;