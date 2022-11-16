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
	width: 40%;
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
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Sign up to Best Offer</Title>
				<Form>
					<Input placeholder="name" />
					<Input placeholder="last name" />
					<Input placeholder="adress" />
					<Input placeholder="phone number" />
					<Input placeholder="email" />
					<Input placeholder="password" />
					<Input placeholder="confirm password" />
					<Agreement>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Button primary text="Sign up" />
				</Form>
				<Separator text="Have an account?"/>
				<Link to="/login" style={{ textDecoration: "none" }}>
					<Button text="Login" />
				</Link>
			</Wrapper>
		</Container>
	);
};

export default Register;