import {
	Link,
	NavLink,
	Route,
	BrowserRouter as Router,
	Switch,
} from 'react-router-dom';
import React, { Component, Fragment } from 'react';

import Footer from './components/Footer';
import PropTypes from 'prop-types';
import Routes from './Routes';
import Sidebar from './components/Sidebar';
import { defaultProps } from 'recompose';

const en = require('./locales/en');
const ru = require('./locales/ru');

const locales = { en, ru };

const enhance = defaultProps({
	counter: 0,
});

const App = () => {
	return (
		<Router>
			<Fragment>
				<div className="page-wrapper">
					<div className="content">
						<main className="page">
							<div className="container">
								<Routes />
								<Sidebar locale={locales.en} />
								<Footer />
							</div>
						</main>
					</div>
				</div>
			</Fragment>
		</Router>
	);
};

export default enhance(App);
