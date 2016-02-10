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
			<div className="wrapper2">
				<div className="text-wrapper2">
					{this.props.currentData.intro}
				</div>
			</div>
		);

	}

});


export default Intro;