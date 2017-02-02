import React from 'react';
import {render} from 'react-dom';

import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

import App from 'app';
import Modules from 'modules';

render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="/:module" component={Modules}/>
		</Route>
	</Router>
), document.getElementById('main'))