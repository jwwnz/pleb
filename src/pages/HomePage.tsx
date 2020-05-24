import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./HomePage.css";
import { legalLinks } from "../test-data/test-data";

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
										<div className="paragraphStyle" key={name}>
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
								<div className="paragraphStyle" key={name}>
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
													<div className="questionAnswerStyle" key={question}>
														<div style={{ fontStyle: "italic" }}>
															"{question}"
														</div>
														<br />
														<div>{answer}</div>
														<br />

														{sources &&
															sources.map(({ name, link }) => (
																<Button
																	variant="primary"
																	href={link}
																	style={{ margin: "2px" }}
																	key={name}
																>
																	{name}
																</Button>
															))}
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
