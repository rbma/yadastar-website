'use strict';


import React from 'react';
import { Link } from 'react-router';
import TableData from './TableData';
import Logo from './Logo';


const Imprint = React.createClass({

	propTypes: {
		siteData: React.PropTypes.object
	},

	_makeEmail: function(){
		return (
			<a id="email" href="mailto:info@yadastar.com">info@yadastar.com</a>
		);
	},

	render: function(){

		if (!this.props.siteData){
			return null;
		}

		return (
			<section className="center">
				<div className="content">
					<div className="header-imprint">
						<Link to="/">Yadastar</Link>
					</div>
					<div className="wrapper-imprint">
						<table>
							<tbody>
								{this.props.siteData.imprint.map(function(item, index){
									console.log(item);
									return <TableData key={index} itemData={item} />
								})}
							</tbody>
						</table>
					</div>
					<Logo />
				</div>
				
			</section>
		);
	}

});

export default Imprint;