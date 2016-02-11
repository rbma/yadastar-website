'use strict';

import React from 'react';

const Outro = React.createClass({

	propTypes: {
		currentData: React.PropTypes.object
	},

	render: function(){

		if (!this.props.currentData){
			return null;
		}

		return (
			<div className="outro-text">
				<h2>{this.props.currentData.outro}</h2>
			</div>
		);

	}
});


export default Outro;