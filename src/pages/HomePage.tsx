import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const legalLinks = [
	{
		name: "Law Society complaints",
		link:
			"https://www.lawsociety.org.nz/for-the-community/lawyers-complaints-service",
		description:
			"This is the detailed official website which outlines how to make a complaint about a lawyer",
	},
	{
		name: "Contractual obligations",
		link: "https://www.consumer.org.nz/articles/contract-law",
		description:
			"This is a great summary of obligations when you sign up to a contract.",
	},
];

function HomePage() {
	const homePageStyle = {
		padding: "100px 0px 0px 0px",
	} as React.CSSProperties;

	const quoteStyle = {
		fontStyle: "italic",
	} as React.CSSProperties;

	return (
		<>
			<Container style={homePageStyle}>
				<Row>
					<Col>
						<Image src="people.jpg" fluid />
					</Col>
				</Row>
				<Row>
					<Col style={quoteStyle}>
						Use the law. It's yours as much as anyones.
					</Col>
				</Row>
				<hr style={{ width: "100px" }} />
				<Row>
					<Col>
						<h4>Important links</h4>
						{legalLinks.map(({ name, link, description }) => (
							<div>
								<a href={link}>{name}</a> - <span>{description}</span>
							</div>
						))}
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default HomePage;
