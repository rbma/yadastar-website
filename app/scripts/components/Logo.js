'use strict';


import React from 'react';
import { Link } from 'react-router';


const Logo = React.createClass({

	
	render: function(){
		return (
			<footer className="logo">
				<Link to="/">
					<div className="text-wrapper">
						<p>
							YS
							<br />
							AT
							<br />
							DA
							<br />
							AR
						</p>
					</div>
				</Link>
			</footer>
		);
	}
});

export default Logo;