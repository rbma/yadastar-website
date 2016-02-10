'use strict';


import React from 'react';

const PostBody = React.createClass({

	propTypes: {
		currentData: React.PropTypes.object
	},

	_rawMarkup: function(){
		return {
			__html: this.props.currentData.postbody
		};
	},

	render: function(){

		if (!this.props.currentData){
			return null;
		}

		return (
			<div className="wrapper4">
				<div className="text-wrapper6" dangerouslySetInnerHTML={this._rawMarkup()}>
				</div>
			</div>
		);
	}

});


export default PostBody;