import classes from "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
	return (
		<div className={classes.app}>
			<Router>
				<Navbar />
					<Header />
					<About />
				<Projects />
				<Contact />
				<section>
					<Footer />
				</section>
				<footer></footer>
			</Router>
		</div>
	);
}

export default App;
