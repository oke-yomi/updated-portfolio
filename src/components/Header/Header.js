import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Hero = () => {
	return (
		<>
			<header id="header" className={classes.header}>
				<div className={classes.container}>
					<h2 className={classes.h1_large}>
						Hi! I'm Yomi <br />
						I'm a Frontend Dev{" "}
          </h2>
          
          <div className={classes.text_container}>
					<a className={`${classes.btn_solid_lg} ${classes.btn_outline_lg}`} href="#contact">
						Contact Me
            </a>
            <a
						href="https://drive.google.com/file/d/1uP9ZxdxK1oCdvvC9RTAzNSE6gYirqo1o/view?usp=sharing"
						target="_blank"
						className={classes.btn_solid_lg}>
						Download CV
					</a>
          </div>
				</div>
			</header>
		</>
	);
};

export default Hero;
