'use strict';

import React from 'react';


const SubHeader = React.createClass({
	propTypes: {
		currentData: React.PropTypes.object
	},

	render: function(){

		if (!this.props.currentData){
			return null;
		}

		return (
			<div className="subheader">
				<div className="text-wrapper">
					<h3>{this.props.currentData.subheader}</h3>
				</div>
			</div>
		);
	}
});

export default SubHeader;