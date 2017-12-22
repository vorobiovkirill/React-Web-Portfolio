import React, { Component } from 'react';

import PropTypes from 'prop-types';

const Sidebar = (props) => {
	return (
		<aside className="header" id="header">

			<div className="header--logo">
				<div className="logo-face">
					<a><img src="/images/logo200.jpg" alt="logo" /></a>
				</div>
				<span>Kirill Vorobiov</span>
				<span>Front-end // Designer</span>
			</div>

			<div className="header--options" />

			<div className="header--nav">
				<nav className="navigation" role="navigation">
					<menu className="menu">
						<a>hghgf</a>
					</menu>
				</nav>

			</div>

			<div className="header--footer">
				<div className="contacts-data">
					© Kirill Vorobiov <br /> 2017 all rights reserved
				</div>
			</div>
		</aside>

	);
};

export default Sidebar;
