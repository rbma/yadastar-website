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
			<div className="text-wrapper7">
				<p>{this.props.currentData.outro}</p>
			</div>
		);

	}
});


export default Outro;