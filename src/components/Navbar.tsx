import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

const plebNavbarBrandStyle = {
	fontWeight: "bold",
} as React.CSSProperties;

const PlebNavbar = () => (
	<Navbar bg="light" className="navbarplebi" variant="light">
		<Navbar.Brand href="#home">
			<span style={plebNavbarBrandStyle}>PlebL</span> <span>NZ</span>
		</Navbar.Brand>
		<Nav className="mr-auto">
			{/* <Nav.Link href="#features">Features</Nav.Link> */}
		</Nav>
	</Navbar>
);

export default PlebNavbar;
