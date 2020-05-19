import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlebNavbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
	return (
		<div className="App">
			<PlebNavbar />
			<HomePage />
		</div>
	);
}

export default App;
