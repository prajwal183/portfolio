import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";
import ReactGA from 'react-ga4'

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logos={project.logos}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						onClick={() =>
							ReactGA.event({
								action:"project_click",
								category:"projects",
								label:"Projects_click"
							})
						}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
