import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, } from "@material-ui/icons";
import styled from "styled-components";

import Logo from "./Logo"
import payments from "../assets/payment.png"

const Container = styled.div`
	display: flex;
	background-color: #f0f0f0;
	align-items: center;
	@media only screen and (max-width: 500px) {
		flex-direction: column;
	}
	margin-top: auto;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Description = styled.p`
	margin: 20px 0px;
	padding: 5px;
`;

const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;

const Title = styled.h3`
	margin-bottom: 30px;
  `;

const Right = styled.div`
	flex: 1;
	padding: 20px;
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Payment = styled.img`
	  width: 50%;
	  max-width: 400px;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo />
				<Description>
					®Juan1197 2022
					<br />
					I hope you enjoyed this project
				</Description>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="E60023">
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: "10px" }} /> 1 One piece, Laugh Tale 12345
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} /> +1 234 56 78 90
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: "10px" }} /> juan1197@mailinator.com
				</ContactItem>
				<Payment src={payments} />
			</Right>
		</Container>
	);
};

export default Footer;