import PropTypes from 'prop-types';
import React from 'react';

const AboutItem = (props) => {
	// const { name } = this.props;
	return (
		<div className="about-block__item">

			<div className="about-block__icon">
				<img src="/images/about-icons/smug.png" alt="Name" />
			</div>

			<div className="about-block__info">

				<h4>Name</h4>
				<p>{props.name}</p>

			</div>

		</div>
	);
};

export default AboutItem;
