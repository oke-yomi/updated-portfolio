import React from "react";
import classes from "./About.module.css";
import {
	SiNextdotjs,
	SiGithub,
	SiReact,
	SiJavascript,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";

const About = () => {
	return (
		<>
			<section id="about">
				<div className={classes.services}>
					<div className={classes.head_container}>
						<h2 className={classes.h2_heading}>About Me</h2>
						<p className={classes.p_heading}>
							I am a great communicator and love to invest the necessary time to
							carry out research and understand the customer's problem very
							well. Frontend web development have been my bread and butter for,
							approximately, a year. During that time I've discovered that I can
							help startups and companies with the following services.
						</p>
					</div>
					<div className={classes.row}>
						<div className={classes.column}>
							<div className={classes.text_box}>
								<p>
									Name : <span> Oluwayomi OKE </span>
								</p>
								<p>
									Education :{" "}
									<span> B.Sc. Electronic and Electrical Engineering</span>
								</p>
								<p>
									Interest : <span>Web development (Frontend) </span>
								</p>
								<p>
									Skills :{" "}
									<span>HTML, CSS, Javascript, Typescript, React, Next.js</span>
								</p>
								<p>
									Language : <span> English, Yoruba </span>
								</p>
							</div>
						</div>

						<div className={classes.column}>
							<div className={classes.text_box}>
								<h4>DEVELOPMENT</h4>
								<p>
									I have a keen eye for details and can code the customer's
									design. My focus is to generate clean, pixel perfect code
									that's well structured for reliability
								</p>
							</div>
						</div>

						<div className={classes.column}>
							<div className={classes.text_box}>
								<h4>DEVELOPMENT TECHNOLOGIES</h4>
								<p>
									I am familiar with frontend technologies like HTML,
									CSS,JavaScript, React, and have beginner experience using
									NextJS, TailwindCSS, and Typescript.
								</p>
								<div className={classes.icons_container}>
									<TiHtml5 className={classes.html} />
									<IoLogoCss3 className={`${classes.icon} ${classes.css}`} />
									<SiJavascript className={`${classes.icon} ${classes.js}`} />
									<SiReact className={`${classes.icon} ${classes.react}`} />
									<SiNextdotjs className={`${classes.icon} ${classes.next}`} />
									<SiTailwindcss
										className={`${classes.icon} ${classes.tailwind}`}
									/>
									<SiTypescript className={`${classes.icon} ${classes.typescript}`} />
									<SiGithub className={classes.github} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
