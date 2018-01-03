import React, { Component } from 'react';

import AboutItem from '../../views/AboutItem';
import PropTypes from 'prop-types';

const About = () => {
	return (
		<section className="about section" id="about">

			<div className="row">

				<div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-offset="200">

					<h2 className="title">About Me</h2>

				</div>

			</div>

			<div className="row">

				<div className="about-block">

					<AboutItem name="Kirill Vorobiov" />

				</div>

			</div>

			<div className="row">

				<div className="about-text">
					<p>I have more than 9 years of experience in the field of Graphic/ E Learning/Web Designing. Specialized in Adobe web and graphic designing tools and also in otheta tools. Professional in Corporate branding, Graphic designing, Web Designing, visualization, GUI, graphics and animations for e-learning, illustrations, web icons, flash web banner, flash intro animations, logos, brochures, posters etc.</p>
				</div>

			</div>

			<div className="parallax-title right-pos rellax" data-rellax-speed="-2" data-rellax-percentage="0.5">
				About Me
			</div>

		</section>
	);
};

export default About;
