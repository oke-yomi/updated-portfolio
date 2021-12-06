import React from "react";
import classes from "./Projects.module.css";
import vill from "../../assets/vill-hotel.png";
import portfolio from "../../assets/portfolio.png";
import weather from "../../assets/weather.png";
import gclone from "../../assets/google-clone.png";
import githubFinder from "../../assets/github-finder.png";

const Projects = (props) => {
	return (
		<section id="projects" className={classes.project}>
			<div className={classes.container}>
				<div>
					<h2 className={classes.h2_heading}>A Few Of My Recent Projects</h2>
					<p className={classes.p_heading}>
						Listed below are some of the most representative projects I've
						worked on.
					</p>
        </div>
        
				<div className={classes.items}>
					<div className={classes.column}>
						<div className={classes.text_container}>
							<div className={classes.image_container}>
								<a href="https://vill-hotel.netlify.app/">
									<img
										className={classes.img_fluid}
										src={vill}
										alt="Vill hotel"
									/>
								</a>
							</div>
							<p className={classes.details}>
								<span>
									<p>Description: Vill Hotel Website</p>
								</span>
								<span>
									<p>
										Github Link:
										<a href="https://github.com/oke-yomi/viil-hotel-website">Link</a>
									</p>
								</span>
							</p>
            </div>
            
            <div className={classes.text_container}>
							<div className={classes.image_container}>
								<a href="https://yomi-portfolio-website.netlify.app/">
									<img
										className={classes.img_fluid}
										src={portfolio}
										alt="portfolio"
									/>
								</a>
							</div>
							<p className={classes.details}>
								<span>
									<p>Description: Portfolio 1.0</p>
								</span>
								<span>
									<p>
										Github Link:
										<a href="https://github.com/oke-yomi/portfolio_website">Link</a>
									</p>
								</span>
							</p>
            </div>
            
            <div className={classes.text_container}>
							<div className={classes.image_container}>
								<a href="https://yomi-weatherapp.netlify.app/">
									<img
										className={classes.img_fluid}
										src={weather}
										alt="weather"
									/>
								</a>
							</div>
							<p className={classes.details}>
								<span>
									<p>Description: Weather</p>
								</span>
								<span>
									<p>
										Github Link:
										<a href="https://github.com/oke-yomi/weather">Link</a>
									</p>
								</span>
							</p>
						</div>

            <div className={classes.text_container}>
							<div className={classes.image_container}>
								<a href="https://yomi-google-clone.netlify.app/">
									<img
										className={classes.img_fluid}
										src={gclone}
										alt="gclone"
									/>
								</a>
							</div>
							<p className={classes.details}>
								<span>
									<p>Description: Google Clone</p>
								</span>
								<span>
									<p>
										Github Link:
										<a href="https://github.com/oke-yomi/googleclone">Link</a>
									</p>
								</span>
							</p>
            </div>
            
            <div className={classes.text_container}>
							<div className={classes.image_container}>
								<a href="https://yomi-github-finder.netlify.app/">
									<img
										className={classes.img_fluid}
										src={githubFinder}
										alt="github finder"
									/>
								</a>
							</div>
							<p className={classes.details}>
								<span>
									<p>Description: Github Finder</p>
								</span>
								<span>
									<p>
										Github Link:
										<a href="https://github.com/oke-yomi/github-finder">Link</a>
									</p>
                </span>
							</p>
            </div>
            
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
