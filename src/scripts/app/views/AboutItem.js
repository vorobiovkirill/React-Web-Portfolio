import PropTypes from 'prop-types';
import React from 'react';

const AboutItem = (props) => {
	const {
		icon,
		alt,
		title,
		description,
	} = props;
	return (
		<div className="about-block__item">
			<div className="about-block__icon">
				<img src={icon} alt={alt} />
			</div>
			<div className="about-block__info">
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default AboutItem;
