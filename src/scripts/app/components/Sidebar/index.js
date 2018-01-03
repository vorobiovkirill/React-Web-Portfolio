import {
	Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';

const Sidebar = ({ locale }) => {
	console.log(locale);
	return (
		<aside className="header" id="header">

			<div className="header--logo">
				<div className="logo-face">
					<Link to="/">
						<img src="/images/logo200.jpg" alt="logo" />
					</Link>
				</div>
				<span>{locale.name}</span>
				<span>{locale.post}</span>
			</div>

			<div className="header--options" />

			<div className="header--nav">
				<nav className="navigation" role="navigation">
					<Link to="/">home</Link>
					<Link to="/about">about me</Link>
					<Link to="/resume">resume</Link>
					<Link to="/skills">skills</Link>
					<Link to="/portfolio">portfolio</Link>
					<Link to="/contacts">contacts</Link>
				</nav>
			</div>

			<div className="header--footer">
				<div className="contacts-data">
					<span>© {locale.name}</span>
					<span>{locale.copyright}</span>
				</div>
			</div>
		</aside>

	);
};

export default Sidebar;
