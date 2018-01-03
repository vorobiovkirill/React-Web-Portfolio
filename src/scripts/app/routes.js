import {
	Link,
	NavLink,
	Route,
	BrowserRouter as Router,
	Switch,
} from 'react-router-dom';
import React, { Fragment } from 'react';

import About from './components/About';
import Contacts from './components/Contacts';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Skills from './components/Skills';

export default () => (
	<Fragment>
		<Route exact path="/" component={Hero} />
		<Route path="/about" component={About} />
		<Route path="/resume" component={Resume} />
		<Route path="/skills" component={Skills} />
		<Route path="/portfolio" component={Portfolio} />
		<Route path="/contacts" component={Contacts} />
	</Fragment>
);
