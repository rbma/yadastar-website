'use strict';


import React from 'react';
import { Link } from 'react-router';


const Contact = React.createClass({
	propTypes: {
		currentData: React.PropTypes.object
	},


	render: function(){
		
		if (!this.props.currentData){
			return null;
		}

		return (
			<div className="wrapper6">
				<div className="text-wrapper8-left">
					<p>Contact:</p>
					<p>Office Cologne:</p>
				</div>
				<div className="text-wrapper8-right">
					<p>{this.props.currentData.contact}</p>
					<div className="address">
						<p>Yadastar GmbH</p>
						<p>Boisseréestr. 9-11 - 50674 Cologne - Germany</p>
						<p>T +49 221 355 053 0</p>
						<p>F +49 221 355 053 50</p>
					</div>
					<div className="imprint-links">
						<Link to="/imprint">Imprint</Link> | <Link to="datenschutz">Datenschutz</Link>
					</div>
				</div>
			</div>
		);
	}

});


export default Contact;