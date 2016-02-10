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
			<div className="wrapper4">
				<div className="text-wrapper4">
					<p>{this.props.currentData.subheader}</p>
				</div>
			</div>
		);
	}
});

export default SubHeader;