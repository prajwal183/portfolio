import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
							<div className="work">
							<img
								src="/work/tma.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">The Media Ant</div>
							<div className="work-subtitle">
								Associate Manager
							</div>
							<div className="work-duration">
								Jan 2023 - Present
							</div>
						</div>
						<div className="work">
							<img
								src="/work/tma.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">The Media Ant</div>
							<div className="work-subtitle">
								Senior Fullstack Engineer
							</div>
							<div className="work-duration">
								May 2022 - Dec 2022
							</div>
						</div>
						<div className="work">
							<img
								src="/work/flyo.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Flyo</div>
							<div className="work-subtitle">
								Frontend Consultant
							</div>
							<div className="work-duration">
								May 2022 - Jun 2022
							</div>
						</div>
						<div className="work">
							<img
								src="/work/tripleess.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Triple Ess</div>
							<div className="work-subtitle">
								Fullstack Developer
							</div>
							<div className="work-duration">
								Feb 2021 - Jan 2022
							</div>
						</div>
						<div className="work">
							<img
								src="/work/mit.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">
								CEMS - vendor Management
							</div>
							<div className="work-subtitle">Founder</div>
							<div className="work-duration">
								Jun 2020 - Dec 2021
							</div>
						</div>
						<div className="work">
							<img
								src="/work/lprs.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">LPRS</div>
							<div className="work-subtitle">Partner</div>
							<div className="work-duration">
								Oct 2017 - Jan 2019
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
