import React, { Component } from 'react';

// import EducationItem from '../../views/EducationItem';
import PropTypes from 'prop-types';
import ResumeItem from '../../views/ResumeItem';

class Portfolio extends Component {
	render() {
		return (
			<section class="portfolio section" id="portfolio">

				<div class="row">

					<div class="section-title wow fadeInUp" data-wow-duration="1s" data-wow-offset="200">

						<h2 class="title">SEO.portfolio.title</h2>

						<p>SEO.portfolio.subtitle</p>

						<span class="separator"></span>

					</div>

				</div>

				<div class="row">

					<div class="projects-wrapper">

					</div>

				</div>

				<div class="parallax-title right-pos rellax" data-rellax-speed="-2" data-rellax-percentage="0.5">
					SEO.portfolio.description
				</div>

			</section>
		);
	}
};

export default Portfolio;
