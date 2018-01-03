import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const ResumeItem = (props) => {
	const {
		icon,
		alt,
		name,
		date,
		position,
		description,
	} = props;
	return (
		<div className="resume-block__item">

			<div className="item_wrapper">

				<div className="resume-block__icon">
					<img src={icon} alt={alt} />
				</div>

				<div className="resume-block__name">

					<h3>{name}</h3>

					<span>{date}</span>

				</div>

				<div className="resume-block__info">

					<h3>{position}</h3>

					<p>{description}</p>

				</div>

			</div>

		</div>
	);
};

export default ResumeItem;
