import {
	Container,
	Grid,
	Header,
	Menu,
} from 'semantic-ui-react';
import React, { Component, Fragment } from 'react';

import Hero from './components/Hero';
import PropTypes from 'prop-types';
import Sidebar from './components/Sidebar';

const App = () => {
	return (
		<Fragment>
			<div className="page-wrapper">
				<div className="content">
					<Hero />
					<Sidebar />
				</div>
			</div>
		</Fragment>
	);
};

export default App;
