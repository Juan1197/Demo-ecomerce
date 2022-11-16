import { ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";

const HoverEffect = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
`;

const Icon = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;
	flex-direction: column;
  
	&:hover ${HoverEffect}{
	  opacity: 1;
	}
`;

const ProductImage = styled.img`
	height: 70%;
	z-index: 2;
`;

const Description = styled.div`
	margin: 20px 0px;
	padding: 5px;
	height: 30%;
	letter-spacing: normal;
	width: 90%;
	display: block;
	font-size: 1.0625rem;
`;

const Name = styled.span`
`;

const Price = styled.span`
	display: flex;
	margin-top: 10px;
	line-height: 1.5rem;
	font-weight: 800;
    color: #333333;
	@media only screen and (min-width: 75em) {
    	font-size: 1.25rem;
    	line-height: 1.75rem;
    	font-weight: 700;
  	}
`;

const Product = ({ item }) => {
	return (
		<Container>
			<HoverEffect>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>
			</HoverEffect>
			<ProductImage src={item.img} />
			<Description>
				<Name>
					{item.name}
				</Name>
				<Price>
					${item.price}
				</Price>
			</Description>
		</Container>
	);
};

export default Product;