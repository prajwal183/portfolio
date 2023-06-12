import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";

import "./styles/project.css";

const Project = (props) => {
	const { logos, title, description, linkText, link } = props;
	console.log(logos);

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link} target="_blank">
					<div className="project-container">
						<Grid container md={12} columnSpacing={"8px"}>
							{logos.map((logo) => (
								<Grid item>
									<div className="project-logo">
										<img src={logo} alt="logo" />
									</div>
								</Grid>
							))}
						</Grid>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
