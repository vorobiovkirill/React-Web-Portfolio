import PropTypes from 'prop-types';
import React from 'react';

const EducationItem = (props) => {
	const {
		icon,
		name,
		date,
		post,
		desc,
	} = props;
	return (
		<div className="resume-block__item">

			<div className="item_wrapper">

				<div className="resume-block__icon">
					<img src={icon} alt={name} />
				</div>

				<div className="resume-block__name">

					<h3>{name}</h3>
					<span>{date}</span>

				</div>

				<div className="resume-block__info">

					<h3>{post}</h3>
					<p>{desc}</p>

				</div>

			</div>

		</div>
	);
};

export default EducationItem;
