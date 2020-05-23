import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./HomePage.css";

const legalLinks = [
	{
		name: "Law Society complaints",
		category: "Lawyers",
		hidden: true,
		link:
			"https://www.lawsociety.org.nz/for-the-community/lawyers-complaints-service",
		description:
			"This is the detailed official website which outlines how to make a complaint about a lawyer",
	},
	{
		name: "Contractual obligations",
		category: "Contracts",
		hidden: false,
		link: "https://www.consumer.org.nz/articles/contract-law",
		description:
			"This is a great summary of obligations when you sign up to a contract. Just because a disaster strikes doesn't automatically mean that you get to rip up your contractual obligations.",
	},
	{
		name: "Official Registry of NZ lawyers",
		category: "Lawyers",
		hidden: false,
		link:
			"https://www.lawsociety.org.nz/for-the-community/search-register-of-lawyers",
		description:
			"If you are not sure if the lawyer you are dealing with is real search using this link",
	},
	{
		name: "Covid-19 Wage subsidy Employer obligations",
		category: "Covid-19",
		hidden: false,
		link:
			"https://www.employment.govt.nz/leave-and-holidays/other-types-of-leave/coronavirus-workplace/wage-subsidy/",
		description:
			"So many crappy employers are taking advantage of their employees. The wage subsidy is not a variation of existing law. Also there are very clear legal requirements that employers are signing up to to get the wage subsidy.",
		questionsAndAnswers: [
			{
				question:
					"My employer just cut my wages to the wage subsidy amount only without written agreement on my part, can they do this?",
				answer:
					"The starting point is no. Requirements under employment law and contract are not automagically changed due to Covid-19. Some employers misunderstand the request from the government to pay 'at least the wage subsidy' to mean that they are entitled to do so without proper legal steps, this is incorrect and illegal. They must consult with you in good faith, and in their agreement with the government in getting this subsidy they agreed they will try their 'hardest' to pay the employee at least 80% of their usual wage.",
				sources: [
					{
						name: "Work and Income - Wage subsidy payments",
						link:
							"https://workandincome.govt.nz/covid-19/wage-subsidy/making-payments.html#null",
					},
					{
						name: "Covid-19 Wage subsidy Employer obligations",
						link:
							"https://www.employment.govt.nz/leave-and-holidays/other-types-of-leave/coronavirus-workplace/wage-subsidy/",
					},
				],
			},
		],
	},
	{
		name: "Disputes Tribunal Information",
		category: "Courts",
		hidden: false,
		link: "https://www.justice.govt.nz/tribunals",
		description:
			"The Disputes Tribunal is a small claims court that hears disputes cases below $30,000",
	},
];

function HomePage() {
	const homePageStyle = {
		padding: "20px 0px 0px 0px",
	} as React.CSSProperties;

	const quoteStyle = {
		fontStyle: "italic",
	} as React.CSSProperties;

	const pictureRowStyle = {
		margin: "20px 0 20px 0",
	} as React.CSSProperties;

	const rowStyle = {
		margin: "20px 0 20px 0",
		textAlign: "left",
	} as React.CSSProperties;

	return (
		<>
			<Container style={homePageStyle}>
				<Row style={pictureRowStyle}>
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
							.map(
								({ name, link, description, hidden }) =>
									!hidden && (
										<div className="paragraphStyle">
											<a href={link}>{name}</a>
											<div>{description}</div>
										</div>
									)
							)}
					</Col>
				</Row>
				<Row style={rowStyle}>
					<Col>
						<h4>Covid-19 Related links</h4>
						{legalLinks
							.filter(({ category }) => category === "Covid-19")
							.map(({ name, link, description, questionsAndAnswers }) => (
								<div className="paragraphStyle">
									<a href={link}>{name}</a>
									<div>{description}</div>
									{questionsAndAnswers && (
										<div>
											<hr />
											<div
												style={{
													fontWeight: "bold",
													padding: "0 0 1rem 0",
												}}
											>
												Questions and answers
											</div>
											{questionsAndAnswers.map(
												({ question, answer, sources }) => (
													<div className="questionAnswerStyle">
														<div style={{ fontStyle: "italic" }}>
															"{question}"
														</div>
														<br />
														<div>{answer}</div>
														<br />
														<ul>
															{sources &&
																sources.map(({ name, link }) => (
																	<li>
																		<a href={link}>{name}</a>
																	</li>
																))}
														</ul>
													</div>
												)
											)}
										</div>
									)}
								</div>
							))}
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default HomePage;
