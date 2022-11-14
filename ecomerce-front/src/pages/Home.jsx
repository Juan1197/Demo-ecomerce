import { Checkbox, FormControlLabel, FormGroup, Slider } from '@material-ui/core';
import { uniqBy } from 'lodash'
import React, { useState } from 'react';
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "../components/Product";

const Container = styled.div`
`;

const Title = styled.h1`
  	margin: 20px;
`;

const FilterContainer = styled.div`
	display: flex;
	@media only screen and (max-width: 500px) {
		flex-direction: column;
	}
`;

const Filter = styled.div`
	margin: 20px;
	@media only screen and (max-width: 500px) {
		width: 80%;
		display: flex;
		flex-direction: column;
	}
`;

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
	position: inline-block;
	@media only screen and (max-width: 500px) {
		margin-right: 0px;
		margin: 3%;
	}
`;

const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
	@media only screen and (max-width: 500px) {
		margin: 10px 5px;
	}
`;

const Option = styled.option`
`;

const ProductList = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
	min-height: 57vh;
`;

const Home = () => {

	const [priceRange, setPriceRange] = useState([40, 100]);

	const minPrice = 0;
	const maxPrice = 180;

	// Changing State when volume increases/decreases
	const rangeSelectorChange = (event, newValue) => {
		setPriceRange(newValue);
	};

	return (
		<div>
			<Container>
				<Title>Product list</Title>
				<FilterContainer>
					<Filter>
						<FilterText>Brands:</FilterText>
						<FormGroup style={{ marginLeft: "15px" }}>
							{uniqBy(popularProducts, 'brand').map((item) => (
								<FormControlLabel control={<Checkbox color="primary" />} label={item.brand} />
							))}
						</FormGroup>
					</Filter>
					<Filter>
						<FilterText>Sort by:</FilterText>
						<Select>
							<Option selected>Name (A-Z)</Option>
							<Option>Name (Z-A)</Option>
							<Option>Lowest Price</Option>
							<Option>Highest Price</Option>
						</Select>
					</Filter>
					<Filter>
						<FilterText>Price:</FilterText>
						<Slider
							getAriaLabel={() => "Price range"}
							value={priceRange}
							min={minPrice}
							max={maxPrice}
							input="true"
							color="primary"
							onChange={rangeSelectorChange}
							valueLabelDisplay="auto"
							style={{minWidth: "200px"}}
						/>
					</Filter>
				</FilterContainer>
				<ProductList>
					{popularProducts.map((item) => (
						<Product item={item} key={item.id} />
					))}
				</ProductList>
			</Container>

		</div >
	);
};

export default Home;