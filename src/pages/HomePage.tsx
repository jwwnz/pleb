import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function HomePage() {
	const homePageStyle = {
		padding: "100px",
		fontStyle: "italic",
	} as React.CSSProperties;

	return (
		<>
			<Container style={homePageStyle}>
				<Row>
					<Col>Use the law. It's yours as much as anyones.</Col>
				</Row>
			</Container>
		</>
	);
}

export default HomePage;
