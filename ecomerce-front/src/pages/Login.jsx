import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "../components/Button";
import Separator from "../components/Separator";

const Container = styled.div`
	min-height: 57vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background-color: white;
	@media only screen and (max-width: 500px) {
		width: 75%;
	}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 5px 0;
	padding: 10px;
`;

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>LOG IN</Title>
				<Form>
					<Input id="username" placeholder="username" />
					<Input id="passw" type="password" placeholder="password" />
					<Link to="#">I forgot my password</Link> 
					<Button primary text="Login" />
				</Form>
				<Separator text="Are you a new client?"/>
				<Link to="/signup" style={{ textDecoration: "none" }}>
					<Button text="Create a new account" />
				</Link>
			</Wrapper>
		</Container>
	);
};

export default Login;