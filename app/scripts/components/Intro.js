'use strict';

import React from 'react';


const Intro = React.createClass({

	propTypes: {
		currentData: React.PropTypes.object
	},

	render: function(){


		if (!this.props.currentData){
			return null;
		}

		return (
			<div className="intro">
				<div className="text-wrapper">
					<h2>{this.props.currentData.intro}</h2>
				</div>
			</div>
		);

	}

});


export default Intro;