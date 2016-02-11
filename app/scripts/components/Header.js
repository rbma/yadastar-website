'use strict';


import React from 'react';
import { Link } from 'react-router';


const Header = React.createClass({
	render: function(){
		return (
			<div className="header"><Link to="/">Yadastar</Link></div>
		);
	}
});

export default Header;