import React, { Component } from 'react';

import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Hero extends Component {
	render() {
		return (
			<section className="main-content" id="main-content">

				<div className="intro-bg gradient-intro" id="home">

					<div className="intro">

						<div className="intro-content">

							<h1 className="wow fadeInDown" data-wow-duration="1s" data-wow-offset="200">
								<span>Hello i'm</span>
								Kirill Vorobiov
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
		)
	}
};

export default Hero;
