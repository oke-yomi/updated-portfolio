import React from "react";
import classes from "./Footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
	return (
		<>
			<footer>
				<div className={classes.container}>
					<span className={classes.social_link}>
						<a href="https://www.linkedin.com/in/oluwayomi-oke-347648179">
							<FaLinkedin size={32} className={classes.footerIcon} />
						</a>
					</span>
					<span className={classes.social_link}>
						<a href="https://github.com/oke-yomi">
              <FaGithub size={32} className={classes.footerIcon} />
						</a>
					</span>
				</div>
				<div className={classes.copy}>
					<p class="p-small">
						Copyright ©{"2021 "}
						<a class="no-line" href="#your-link">
							Yoms💛
						</a>
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
