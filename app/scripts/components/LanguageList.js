'use strict';


import React from 'react';
import classNames from 'classnames';


const LanguageList = React.createClass({

	propTypes: {
		changeLanguage: React.PropTypes.func,
		language: React.PropTypes.string
	},

	_change: function(lang){
		//alert(lang);
		console.log(lang);
		this.props.changeLanguage(lang);
	},

	render: function(){
		const self = this;

		if (!self.props.language){
			return null;
		}

		let xEnglish = classNames({
			active: self.props.language === 'english'
		});
		let xFrench = classNames({
			active: self.props.language === 'french'
		});
		let xSpanish = classNames({
			active: self.props.language === 'spanish'
		});
		let xJapanese = classNames({
			active: self.props.language === 'japanese'
		});
		let xRussian = classNames({
			active: self.props.language === 'russian'
		});
		let xHebrew = classNames({
			active: self.props.language === 'hebrew'
		});

		let xGreek = classNames({
			active: self.props.language === 'greek'
		});

		let xDeutsch = classNames({
			active: self.props.language === 'deutsch'
		});

		


		return (
			<div className="languages">
				<div className="navi-left">
					Please choose:
				</div>
				<div className="navi-right">
					<ul>
						<li><a className={xEnglish} onClick={this._change.bind(null, 'english')}>English</a></li>
						<li><a className={xFrench} onClick={this._change.bind(null, 'french')}>Français</a></li>
						<li><a className={xSpanish} onClick={this._change.bind(null, 'spanish')}>Español</a></li>
						<li><a className={xJapanese} onClick={this._change.bind(null, 'japanese')}>日本語</a></li>
						<li><a className={xRussian} onClick={this._change.bind(null, 'russian')}>Русский</a></li>
					</ul>
				</div>
			</div>
		);
	}

});

export default LanguageList;

