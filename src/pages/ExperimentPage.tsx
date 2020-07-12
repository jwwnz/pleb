import React, { FunctionComponent, useState } from "react";
import { Container } from "react-bootstrap";
import Select from "react-select";
import "./HomePage.css";

const options = [{ value: "conveyancing", label: "Conveyancing (Property)" }];

const ExperimentPage: FunctionComponent<{ selection?: string }> = ({
	selection = "",
}) => {
	return (
		<>
			<Container>
				<div>What legal area do you need information?</div>
				<Select options={options} />
			</Container>
		</>
	);
};

export default ExperimentPage;
