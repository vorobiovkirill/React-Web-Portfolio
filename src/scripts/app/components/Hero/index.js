import React, { Component } from 'react'

import Button from 'material-ui/Button';

class Hero extends Component {
	render() {
		return (
			<section className="main-content" id="main-content">

				<div className="intro-bg gradient-intro" id="home">

					<div className="intro">

						<div className="intro-content">

							<h1 className="wow fadeInDown" data-wow-duration="1s" data-wow-offset="200">
								<span>dfdsf</span>
								sdfdsf
							</h1>

							<span className="element">sdfdsf</span>

							<div className="cv-download">

								<Button
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
						</div>
					</div>
				</div>
			</section >
		)
	}
}

export default Hero;
