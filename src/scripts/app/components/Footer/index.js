import React, { Component } from 'react';

import PropTypes from 'prop-types';

const Footer = () => {
	return (
		<footer className="footer" id="footer">

			<div className="row">

				<div className="copyright">
					© 2017 - Designed with <i className="fa fa-heart" /> by Kirill Vorobiov
				</div>

				<div className="social-link">

					<a className="social-icon si-linkedin" target="_blank">
						<i className="fa fa-linkedin" aria-hidden="true" />
					</a>
					<a className="social-icon si-facebook" target="_blank">
						<i className="fa fa-facebook" aria-hidden="true" />
					</a>
					<a className="social-icon si-vkontakte" target="_blank">
						<i className="fa fa-vk" aria-hidden="true" />
					</a>
					<a className="social-icon si-instagram" target="_blank">
						<i className="fa fa-instagram" aria-hidden="true" />
					</a>
					<a className="social-icon si-behance" target="_blank">
						<i className="fa fa-behance" aria-hidden="true" />
					</a>
					<a className="social-icon si-dribbble" target="_blank">
						<i className="fa fa-dribbble" aria-hidden="true" />
					</a>
					<a className="social-icon si-pinterest" target="_blank">
						<i className="fa fa-pinterest-p" aria-hidden="true" />
					</a>
					<a className="social-icon si-github" target="_blank">
						<i className="fa fa-github" aria-hidden="true" />
					</a>

				</div>

			</div >

		</footer >
	);
};

export default Footer;
