'use strict';


import React from 'react';

const ImprintItem = React.createClass({

	propTypes:{
		itemData: React.PropTypes.object
	},

	_rawMarkup: function(){
		return {
			__html: this.props.itemData.row
		};
	},

	render: function(){
		return (
			<tr>
				<td className="left">{this.props.itemData.title}</td>
				<td className="right" dangerouslySetInnerHTML={this._rawMarkup()}></td>
			</tr>
		);
	}
});


export default ImprintItem;