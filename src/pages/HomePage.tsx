import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const legalLinks = [
	{
		name: "Law Society complaints",
		category: "Lawyers",
		link:
			"https://www.lawsociety.org.nz/for-the-community/lawyers-complaints-service",
		description:
			"This is the detailed official website which outlines how to make a complaint about a lawyer",
	},
	{
		name: "Contractual obligations",
		category: "Contracts",
		link: "https://www.consumer.org.nz/articles/contract-law",
		description:
			"This is a great summary of obligations when you sign up to a contract. Just because a disaster strikes doesn't automatically mean that you get to rip up your contractual obligations.",
	},
	{
		name: "Official Registry of NZ lawyers",
		category: "Lawyers",
		link:
			"https://www.lawsociety.org.nz/for-the-community/search-register-of-lawyers",
		description:
			"If you are not sure if the lawyer you are dealing with is real search using this link",
	},
	{
		name: "Covid-19 Wage subsidy Employer obligations",
		category: "Covid-19",
		link:
			"https://www.employment.govt.nz/leave-and-holidays/other-types-of-leave/coronavirus-workplace/wage-subsidy/",
		description:
			"So many crappy employers are taking advantage of their employees. The wage subsidy is not a variation of existing law. Also there are very clear legal requirements that employers are signing up to to get the wage subsidy.",
	},
];

function HomePage() {
	const homePageStyle = {
		padding: "20px 0px 0px 0px",
	} as React.CSSProperties;

	const quoteStyle = {
		fontStyle: "italic",
	} as React.CSSProperties;

	const rowStyle = {
		margin: "20px 0 20px 0",
	};

	const paragraphStyle = {
		margin: "10px 0 10px 0",
	};

	return (
		<>
			<Container style={homePageStyle}>
				<Row style={rowStyle}>
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
				<Row style={rowStyle}>
					<Col>
						<h4>Important links</h4>
						{legalLinks
							.filter(({ category }) => category !== "Covid-19")
							.map(({ name, link, description }) => (
								<div style={paragraphStyle}>
									<a href={link}>{name}</a> - <span>{description}</span>
								</div>
							))}
					</Col>
				</Row>
				<Row style={rowStyle}>
					<Col>
						<h4>Covid-19 Related links</h4>
						{legalLinks
							.filter(({ category }) => category === "Covid-19")
							.map(({ name, link, description }) => (
								<div style={paragraphStyle}>
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
