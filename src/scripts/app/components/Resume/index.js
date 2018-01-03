import React, { Component } from 'react';

import { EDUCATION_DATA } from '../../data/Education';
import EducationItem from '../../views/EducationItem';
import PropTypes from 'prop-types';
import { RESUME_DATA } from '../../data/Resume';
import ResumeItem from '../../views/ResumeItem';
import { SEO_DATA } from '../../data/SeoData';
import _ from 'lodash';

class Resume extends Component {
	render() {
		return (
			<section className="resume section" id="education">

				<div className="row">

					<div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-offset="200">

						<h2 className="title">{SEO_DATA.page_title}</h2>

						<h3 className="subtitle">SEO.resume.subtitle.work</h3>

					</div>

				</div>

				<div className="row">

					<div className="resume-block">
						{
							_.map(RESUME_DATA, (item, index) => {
								return (
									<ResumeItem
										key={index}
										icon={item.icon}
										alt={item.alt}
										name={item.company_name}
										date={item.company_date}
										position={item.position}
										description={item.description}
									/>
								);
							})
						}
					</div>

				</div>

				<div className="row">

					<div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-offset="200">

						<h3 className="subtitle">resume.subtitle.education</h3>

					</div>

				</div>

				<div className="row">

					<div className="education-block">
						{
							_.map(EDUCATION_DATA, (item, index) => {
								return (
									<EducationItem
										key={index}
										icon={item.education_img}
										name={item.education_name}
										date={item.education_date}
										post={item.education_post}
										desc={item.education_desc}
									/>
								);
							})
						}
					</div>

				</div>

				<div className="parallax-title right-pos rellax" data-rellax-speed="-2" data-rellax-percentage="0.5">
					resume
				</div>

			</section>

		);
	}
};

export default Resume;
