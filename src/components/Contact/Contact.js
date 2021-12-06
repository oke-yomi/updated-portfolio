import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import classes from "./Contact.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Result = () => {
	return (
		<p>Your message has been successfully sent. I will contact you shortly</p>
	);
};

const Contact = (props) => {
	const [result, setShowResult] = useState(false);
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_43qekuk",
				"template_t3285ef",
				form.current,
				"user_dy6R0meZzeWuAUXaomBNi"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		form.current.reset();
		setShowResult(true);
	};

	// hide Result
	setTimeout(() => {
		setShowResult(false);
	}, 5000);

	return (
		<>
			<section id="contact" className={classes.form_1}>
				<div className={classes.s_contact}>
					<h2>Contact details</h2>
				</div>

				<div className={classes.container}>
					<div className={classes.row}>
						<div className={classes.col_lg_12}>
							<p className={classes.p_heading}>
								Have a new project in mind? Let's collaborate and build
								something awesome. Let's turn that idea to an even greater
								product :){" "}
								<address>
									<a href="mailto:okeoluwayomi9@gmail.com">
										<AiOutlineMail /> okeoluwayomi9@gmail.com
									</a>
									<br />
									<a href="tel:+2348144976291">
										{" "}
										<BsTelephone /> 0814-497-6291
									</a>
								</address>
							</p>
						</div>
          </div>
          
					<div className={classes.row}>
						<div className={classes.col_lg_12}>
							{/*Contact Form  */}
							<form id="contactForm" ref={form} onSubmit={sendEmail}>

								<div className={classes.rslt}>{result ? <Result /> : null}</div>
								<div className={classes.form_group}>
									<input
										type="text"
										className={classes.form_control_input}
										id="name"
										name="name"
                    required
                    placeholder="Name"
									/>
								</div>
								<div className={classes.form_group}>
									<input
										type="email"
										className={classes.form_control_input}
										id="email"
										name="email"
                    required
                    placeholder="Email"
									/>
                </div>
                <div className={classes.form_group}>
									<input
										type="phone"
										className={classes.form_control_input}
										id="phone"
										name="phone"
                    required
                    placeholder="Phone"
									/>
								</div>
								<div className={classes.form_group}>
									<textarea
										className={classes.form_control_textarea}
										id="message"
                    name="message"
                    placeholder="Project Details"
										required></textarea>
								</div>
								<div className={classes.form_group}>
									<button type="submit" className="form-control-submit-button">
										Submit
									</button>
								</div>

								
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
