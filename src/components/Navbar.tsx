import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const plebNavbarBrandStyle = {
	fontWeight: "bold",
} as React.CSSProperties;

const PlebNavbar = () => (
	<Navbar bg="light" variant="light">
		<Navbar.Brand href="#home" style={plebNavbarBrandStyle}>
			Pleb.nz
		</Navbar.Brand>
		<Nav className="mr-auto">
			{/* <Nav.Link href="#features">Features</Nav.Link> */}
		</Nav>
	</Navbar>
);

export default PlebNavbar;
