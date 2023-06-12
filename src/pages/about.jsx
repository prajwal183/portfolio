import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title contact-title">
									Unveiling the Story Behind
								</div>
								<div className="subtitle about-subtitle">
									{" "}
									<p> {INFO.about.title}</p>
									<h3>Passion and Expertise</h3>
									<p>
										From a young age, I developed a deep
										passion for technology and its
										transformative power. Over the years, I
										have honed my skills and become
										proficient across the entire stack. From
										crafting elegant front-end interfaces
										with HTML, CSS, and JavaScript to
										architecting scalable back-end solutions
										using frameworks like Node.js and
										Django, I have gained a comprehensive
										understanding of the development
										process. My expertise extends to
										database management with SQL and NoSQL
										systems, ensuring the seamless
										integration of data-driven applications.
									</p>
									<h3>A Vision for the Future</h3>
									<p>
										As a visionary, I embrace the potential
										of technology to shape the world. I
										constantly seek out emerging trends,
										staying ahead of the curve to anticipate
										future needs and opportunities. By
										blending my technical expertise with a
										forward-thinking mindset, I strive to
										develop solutions that not only meet
										present requirements but also lay the
										foundation for future innovations. I
										believe in creating digital experiences
										that are not only functional and
										user-friendly but also revolutionize
										industries and positively impact lives.
									</p>
									<h3>Collaboration and Communication</h3>
									<p>
										I firmly believe in the power of
										collaboration and effective
										communication to drive successful
										project outcomes. I value open dialogue,
										actively listening to clients and team
										members to ensure a deep understanding
										of their goals and aspirations. By
										fostering an environment of trust and
										respect, I encourage diverse
										perspectives and ideas, ultimately
										leading to the development of innovative
										solutions that surpass expectations.
										Together, we can transform visions into
										reality.
									</p>
									<h3>Commitment to Growth</h3>
									<p>
										In the ever-evolving landscape of
										technology, I embrace a growth mindset
										that fuels my continual learning and
										development. I actively seek
										opportunities to expand my knowledge,
										whether through attending industry
										conferences, participating in online
										courses, or engaging with the developer
										community. By staying at the forefront
										of industry advancements, I bring fresh
										insights and cutting-edge approaches to
										every project, delivering solutions that
										stand out in a competitive digital
										landscape.
									</p>
									<h2>Let's Connect!</h2>
									<p>
										If you're looking for a dedicated and
										experienced developer to bring your
										ideas to life, I would be thrilled to
										connect with you. Whether you have a
										specific project in mind or simply want
										to explore possibilities, feel free to
										reach out. Together, we can create
										extraordinary digital experiences that
										make a lasting impact.
									</p>
									<p>
										Thank you for taking the time to learn
										more about me. I look forward to the
										opportunity to collaborate and
										contribute to your success in the
										dynamic world of technology.
									</p>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
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

export default About;
