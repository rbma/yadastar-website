'use strict';

// ------------------------------------------------
// Mount point
//
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import App from './App';
import Home from './components/Home';
import Imprint from './components/Imprint';
import Datenschutz from './components/Datenschutz';

ReactDOM.render(
	<Router>
		<Route component={App}>
			<Route path="/" component={Home} />
			<Route path="imprint" component={Imprint} />
			<Route path="datenschutz" component={Datenschutz} />
		</Route>
	</Router>,
	document.getElementById('mount')
);