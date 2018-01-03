import React, { Component } from 'react';

// import EducationItem from '../../views/EducationItem';
import PropTypes from 'prop-types';
import ResumeItem from '../../views/ResumeItem';

class Portfolio extends Component {
	render() {
		return (
			<section className="portfolio section" id="portfolio">

				<div className="row">

					<div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-offset="200">

						<h2 className="title">SEO.portfolio.title</h2>

						<p>SEO.portfolio.subtitle</p>

						<span className="separator"></span>

					</div>

				</div>

				<div className="row">

					<div className="projects-wrapper">

					</div>

				</div>

				<div className="parallax-title right-pos rellax" data-rellax-speed="-2" data-rellax-percentage="0.5">
					SEO.portfolio.description
				</div>

			</section>
		);
	}
};

export default Portfolio;
