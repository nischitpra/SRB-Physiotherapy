import React, { Component } from "react";
import patientCheckupImage from "../images/HomePatientDoctor.svg";
import BasicAppointmentForm from "./BasicAppointmentForm";
import { motion, AnimatePresence } from "framer-motion";

import image1 from "../images/main_images/1.JPG";
import image2 from "../images/main_images/2.JPG";
import image3 from "../images/main_images/3.JPG";
import image4 from "../images/main_images/4.JPG";
import image5 from "../images/main_images/5.JPG";
import image6 from "../images/main_images/6.JPG";
import image7 from "../images/main_images/7.JPG";
import image8 from "../images/main_images/8.JPG";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			images: [
				image1,
				image2,
				image3,
				image4,
				image5,
				image6,
				image7,
				image8,
			],
			index: 0,
			index1: 0,
			index2: 0,
			isImg1Visible: true,
		};

		this.animateMainImage = this.animateMainImage.bind(this);
	}

	componentDidMount() {
		this.imageInterval = setInterval(this.animateMainImage, 2000);
	}

	animateMainImage() {
		this.state.index = (this.state.index + 1) % this.state.images.length;
		if (this.state.isImg1Visible) {
			this.state.index2 = this.state.index;
		} else {
			this.state.index1 = this.state.index;
		}

		this.setState({
			isImg1Visible: !this.state.isImg1Visible,
		});
	}

	render() {
		const variants = {
			open: { opacity: 1 },
			closed: { opacity: 0 },
		};
		return (
			<div style={{ flex: 1 }}>
				<div className="home-container">
					<div className="flex-1 main-physio-image-container">
						<AnimatePresence>
							<motion.img
								className="main-image"
								animate={
									this.state.isImg1Visible ? "open" : "closed"
								}
								variants={variants}
								src={this.state.images[this.state.index1]}
							/>
							<motion.img
								className="main-image"
								animate={
									!this.state.isImg1Visible
										? "open"
										: "closed"
								}
								variants={variants}
								src={this.state.images[this.state.index2]}
							/>
						</AnimatePresence>
					</div>
					<BasicAppointmentForm className="flex-center basic-form" />
				</div>
				<div className = "treatment-container">
					<div className="treatment-title">What do we treat?</div>
					<ul className = "treatment-list">
						<li>Pain Management</li>
						<li>Orthophysiotherapy</li>
						<li>Neurophysiotherapy</li>
						<li>Cardiophysiotherapy</li>
						<li>Pediatric</li>
						<li>Geriatric</li>
					</ul>
				</div>

				<div className="footer">
					<div>
						<i
							class="fa fa-phone"
							style={{ marginLeft: 24, marginRight: 8 }}
						></i>
						+917204998046
					</div>
					<div>
						<i
							className="fa "
							style={{ marginLeft: 24, marginRight: 8 }}
						>
							&#xf0e0;
						</i>
						ramratan.yadav.881@gmail.com
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
