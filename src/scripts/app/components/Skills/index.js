import React, { Component } from 'react';

// import EducationItem from '../../views/EducationItem';
import PropTypes from 'prop-types';
import ResumeItem from '../../views/ResumeItem';

class Skills extends Component {
	render() {
		return (
			<section class="skills section" id="skills">

				<div class="row">

					<div class="section-title wow fadeInUp" data-wow-duration="1s" data-wow-offset="200">

						<h2 class="title">SEO.skills.title</h2>

						<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>

						<span class="separator"></span>

					</div>

				</div>

				<div class="row">

				</div>

				<div class="row">

					<div class="skills-content">

						<h2>My professional strengths</h2>

						<p>SEO.skills.text</p>

					</div>

				</div>

				<div class="parallax-title right-pos rellax" data-rellax-speed="-2" data-rellax-percentage="0.5">
					SEO.skills.description
				</div>

			</section>

		);
	}
};

export default Skills;
