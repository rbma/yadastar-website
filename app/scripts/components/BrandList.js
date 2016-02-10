'use strict';

import React from 'react';

const BrandList = React.createClass({

	propTypes: {
		currentData: React.PropTypes.object
	},

	render: function(){

		if (!this.props.currentData){
			return null;
		}


		return (
			<div className="wrapper3">
				<div className="text-wrapper3-left">Yadastar Brand Consulting</div>
				<div className="text-wrapper3-right">
					<p>{this.props.currentData.brand.message}</p>
					<br />
					<div className="brand-list">
						{this.props.currentData.brand.brands.map(function(item, index){
							return <li key={index}>{item.name}</li>
						})}
					</div>
				</div>
			</div>
		);
	}


});

export default BrandList;