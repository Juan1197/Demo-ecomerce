import { Add, Remove } from "@material-ui/icons";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

import { popularProducts } from "../data";
import Button from "../components/Button";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
	@media only screen and (max-width: 500px) {
		padding: 10px;
	}
`;

const Title = styled.h1`
	font-weight: 300;
`;

const CartInfo = styled.span`
	color: lightgrey;
	margin: 10px;
`;

const CartDetail = styled.div`
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 500px) {
		flex-direction: column;
	}
`;

const Info = styled.div`
  	flex: 3;
	border: 0.5px solid lightgray;
	margin: 0 10px;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media only screen and (max-width: 500px) {
		flex-direction: column;
	}
`;

const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;

const Image = styled.img`
	padding: 5px;
  	width: 200px;
	height: 200px;
`;

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
`;

const ProductLabel = styled.span`
	margin-bottom: 15px;
`;

const ProductPrice = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	font-size: 30px;
	font-weight: 200;
	@media only screen and (max-width: 500px) {
		margin-bottom: 20px;
	}
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 5px;
	border: 0.5px solid lightgray;
	margin: 10px;
	height: fit-content;
	width: fit-content;
	justify-content: center;
`;

const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	@media only screen and (max-width: 500px) {
		margin: 5px 15px;
	}
`;

const Hr = styled.hr`
	background-color: lightgrey;
	border: none;
	height: 1px;
`;

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	padding: 20px;
	height: fit-content;

	@media only screen and (max-width: 500px) {
		margin-top: 20px;
	}
`;

const SummaryTitle = styled.h1`
	font-size: 1.0625rem;
	line-height: 1.5rem;
    font-weight: 700;
    letter-spacing: normal;
    color: rgb(115, 115, 115);
    margin: 0px 0px 1.5rem;
`;

const SummaryItem = styled.div`
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 400;
	letter-spacing: normal;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === "total" && "400"};
	font-size: ${(props) => props.type === "total" && "1.0625rem"};
`;

const SummarySeparator = styled.div`
	margin: 1rem 0px 1.5rem;
	border-bottom: 2px dashed rgb(204, 204, 204);
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const CartAuxButtons = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
`;

const Cart = () => {

	const shippingCost = 5;
	const [products, setProducts] = useState(popularProducts);
	const total = products.reduce((total, item) => total = total + (item.price * item.quantity), 0);

	const increaseQuantity = (event) => {
		console.log(event.target)
	}
	
	const decreaseQuantity = (event) => {
		console.log(event.target)
	}

	return (
		<Container>
			<Wrapper>
				<Title>Your Bag</Title>
				<CartInfo>{products.length} Items</CartInfo>
				<CartDetail>
					<Info>
						{products.map((item, i, row) => (
							<React.Fragment key={item.id}>
								<Product item={item}>
									<ProductDetail>
										<Image src={item.img} />
										<Details>
											<ProductLabel>
												<b> {item.name} </b>
											</ProductLabel>
											<ProductPrice>${item.price * item.quantity}</ProductPrice>
											<ProductLabel>
												<b>Price per unit:</b> ${item.price}
											</ProductLabel>
											<ProductLabel style={{ color: "green" }}>
												Get it tomorrow
											</ProductLabel>
										</Details>
									</ProductDetail>
									<ProductAmountContainer>
										<Remove style={{ cursor: "pointer" }} onClick={decreaseQuantity}/>
										<ProductAmount>{item.quantity}</ProductAmount>
										<Add style={{ cursor: "pointer" }} onClick={increaseQuantity}/>
									</ProductAmountContainer>
								</Product>
								{i + 1 !== row.length && <Hr />}
							</React.Fragment>
						))}
					</Info>
					<Summary>
						<SummaryTitle>Sumary</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>${total}</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping costs</SummaryItemText>
							<SummaryItemPrice>${shippingCost}</SummaryItemPrice>
						</SummaryItem>
						<SummarySeparator />
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>${total + shippingCost}</SummaryItemPrice>
						</SummaryItem>
						<Button primary text="Checkout now"></Button>
					</Summary>
				</CartDetail>
				<CartAuxButtons>
					<Button text="Empty cart" style={{ width: "auto" }} />
					<Link to="/" style={{ textDecoration: "none" }}>
						<Button text="Continue shopping" style={{ width: "auto" }} />
					</Link>
				</CartAuxButtons>
			</Wrapper>
		</Container>
	);
};

export default Cart;