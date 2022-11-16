import styled from "styled-components";

const ButtonStyled = styled.button`
	width: 100%;
	border: 2px solid #F9A31C;
	padding: 15px 20px;
	color: ${(props) => props.primary ? "white" : "#F9A31C"};
	background-color: ${props => props.primary ? "#F9A31C" : "white"};
	cursor: pointer;
	margin: 10px 0;
	display: flex;
	justify-content: center;

	&:hover {
		color: ${props => props.primary ? "#F9A31C" : "white"};
		background-color: ${(props) => props.primary ? "white" : "#F9A31C"};
	}
`;

const Button = (props) => {
	return (
		<ButtonStyled {...props}>
			{props.text}
		</ButtonStyled>
	);
};

export default Button;