import React, { Component } from 'react';
import {
	branch,
	compose,
	lifecycle,
	pure,
	renderComponent,
	renderNothing,
	setDisplayName,
	withProps,
	withState,
} from 'recompose';

import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const setDisplayNameHOC = setDisplayName('Hero');

const withPropsHOC = withProps({
	title: 'Kirill Vorobiov',
	subtitle: 'Hello i\'m',
});

const withStateHOC = withState('loading', 'updateLoading', false);

const withLifecycleHOC = lifecycle({});

const Spinner = () => {
	return (
		<Button raised>
			Default
		</Button>
	);
};

const Hero = ({ title, subtitle }) => {
	return (
		<section className="main-content" id="main-content">
			<div className="intro-bg gradient-intro" id="home">
				<div className="intro">
					<div className="intro-content">

						<h1 className="wow fadeInDown" data-wow-duration="1s" data-wow-offset="200">
							<span>{subtitle}</span>
							{title}
						</h1>

						<div className="cv-download">
							<Button
								component={Link}
								to="/contacts"
								raised
								color="primary"
							>
								Hire me
							</Button>

							<Button
								raised
								color="primary"
								download="/files/CV_Kirill Vorobiov.pdf"
							>
								Download my CV
							</Button>
						</div>

						<div className="cv-download">
							<Button
								raised
								color="primary"
							>
								en
							</Button>

							<Button
								raised
								color="primary"
							>
								ru
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section >
	);
};

const isLoading = ({ loading }) => loading;

const withSpinnerWhileLoading = branch(
	isLoading,
	renderComponent(Spinner),
	renderComponent(Hero),
);

const enhance = compose(
	setDisplayNameHOC,
	withPropsHOC,
	withStateHOC,
	withLifecycleHOC,
	withSpinnerWhileLoading,
	pure,
);

export default enhance(Hero);
