'use strict';


import React from 'react';


const LanguageList = React.createClass({

	propTypes: {
		changeLanguage: React.PropTypes.func
	},

	_change: function(lang){
		//alert(lang);
		console.log(lang);
		this.props.changeLanguage(lang);
	},

	render: function(){
		console.log(this.props);
		return (
			<div className="wrapper1">
				<div className="navi-left">
					Please choose:
				</div>
				<div className="navi-right">
					<ul>
						<li><a onClick={this._change.bind(null, 'english')}>English</a></li>
						<li><a onClick={this._change.bind(null, 'french')}>Français</a></li>
						<li><a onClick={this._change.bind(null, 'spanish')}>Español</a></li>
						<li><a onClick={this._change.bind(null, 'japanese')}>日本語</a></li>
						<li><a onClick={this._change.bind(null, 'russian')}>Русский</a></li>
						<li><a onClick={this._change.bind(null, 'hebrew')}>עברית</a></li>
						<li><a onClick={this._change.bind(null, 'greek')}>ελληνικός</a></li>
						<li><a onClick={this._change.bind(null, 'deutsch')}>Deutsch</a></li>
					</ul>
				</div>
			</div>
		);
	}

});

export default LanguageList;

