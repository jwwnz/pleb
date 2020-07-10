import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PlebNavbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import ExperimentPage from "./pages/ExperimentPage";

function App() {
	return (
		<Router>
			<div className="App">
				<PlebNavbar />
			</div>

			<Switch>
				<Route path="/experiment">
					<ExperimentPage />
				</Route>
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
