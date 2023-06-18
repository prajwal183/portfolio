import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import ReactGA from 'react-ga4'

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
		ReactGA.send({ hitType: "pageview", page: "/contact", title: "contact" });
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Connect and Make Ideas Happen
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch. I
							would be delighted to connect with you and discuss
							how we can collaborate, bring ideas to life, or
							simply engage in meaningful conversations. Please
							use the provided contact information &nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							<h3>
								I'm available for a variety of opportunities,
								including:
							</h3>
							<ul>
								<li>
									Project Collaborations: If you have a
									project idea or a business opportunity that
									you believe would benefit from my expertise,
									I would love to hear from you. Let's discuss
									your vision, goals, and how we can work
									together to make it a reality.
								</li>
								<li>
									Consulting Engagements: Are you seeking
									advice or guidance in the realms of software
									development, innovation, or technology
									strategy? I offer consulting services
									tailored to your specific needs. Let's
									explore ways to leverage technology to drive
									your business forward.
								</li>
								<li>
									Speaking Engagements: If you're organizing
									an event or conference and are looking for
									an engaging speaker to share insights on
									topics such as full stack development,
									innovation, or emerging technologies, I
									would be thrilled to contribute. Let's
									discuss the details and make your event a
									success.
								</li>
								<li>
									General Inquiries: Have a question,
									feedback, or simply want to connect? Don't
									hesitate to drop me a message. I'm always
									open to engaging in discussions, exchanging
									ideas, and connecting with like-minded
									individuals.
								</li>
							</ul>
							<p>
								I value your time and assure you that I will
								respond promptly to any inquiries or messages
								received. Let's connect, explore possibilities,
								and turn ideas into reality.
							</p>
							<p>
								Thank you for considering reaching out. I look
								forward to hearing from you and the potential of
								working together on exciting endeavors.
							</p>
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
