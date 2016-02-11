'use strict';


import React from 'react';

const PostBody = React.createClass({

	propTypes: {
		currentData: React.PropTypes.object,
		siteData: React.PropTypes.object
	},

	_rawMarkup: function(){
		return {
			__html: this.props.currentData.postbody
		};
	},

	componentDidMount: function(){
		const year = document.getElementById('post-number');

		if (year){
			year.innerHTML = '<strong>' + this.props.siteData.academyCount + '</strong>';
		}
	},

	componentDidUpdate: function(oldProps){

		if (oldProps.currentData !== this.props.currentData){
			const year = document.getElementById('post-number');
			console.log(year);

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
			<div className="subheader">
				<div className="text-wrapper">
					<h3 dangerouslySetInnerHTML={this._rawMarkup()}></h3>
				</div>
			</div>
		);
	}

});


export default PostBody;