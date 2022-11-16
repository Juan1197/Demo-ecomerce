import { Checkbox, FormControlLabel, FormGroup, Slider, Tooltip } from '@material-ui/core';
import { Tune } from '@material-ui/icons';
import { uniqBy } from 'lodash'
import React, { useState } from 'react';
import styled from "styled-components";

import { popularProducts } from "../data";
import Product from "../components/Product";
import { getMax, getMin } from '../helpers/utils';

const Container = styled.div`
`;

const Title = styled.h1`
  	margin: 20px;
`;

const Filter = styled.div`
	margin: 10px 15px;
	display: block;
	@media only screen and (max-width: 500px) {
		display: flex;
		flex-direction: column;
	}
`;

const FilterButton = styled.div`
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	border: 0.5px solid lightgray;
	padding: 10px;
`;

const FilterButtonText = styled.span`
`;

const FilterContainer = styled.div`
	display: flex;
	border: 0.5px solid lightgray;
	margin: 10px 15px;
	@media only screen and (max-width: 500px) {
		flex-direction: column;
	}
`;

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 550;
	margin-right: 20px;
	@media only screen and (max-width: 500px) {
		margin: 3%;
	}
`;

const Select = styled.select`
	cursor: pointer;
	padding: 10px;
	display: inline-flex;
	@media only screen and (max-width: 500px) {
		margin-bottom: 10px;
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

	// Prevent product list update at first render
	const didMount = React.useRef(false);

	const [products, setProducts] = useState(popularProducts);
	const [filterPanel, setfilterPanel] = useState(false);
	const [minPrice, setMinPrice] = useState(getMin(popularProducts, "price"));
	const [maxPrice, setMaxPrice] = useState(getMax(popularProducts, "price"));
	const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
	const [brandsChecked, setBrandChecked] = useState(new Set());
	const [order, setOrder] = useState(0);

	// Update products list with the filters
	React.useEffect(() => {

		if (!didMount.current) {
			didMount.current = true;
			return;
		}

		var tmp_products = popularProducts

		// Update product list with the checked brands; only if there is 1 or more brand filter checked
		// We cant aply all the filters in one filter(); becasue we need to update the slider min and max values
		if (brandsChecked.size > 0) {
			tmp_products = popularProducts.filter(({ brand }) =>
				brandsChecked.has(brand)
			)
		}

		// Update product list with selected price range. Also update max and min in price slider

		// Save the max and min prices for the filtred brnds products
		var min = getMin(tmp_products, "price");
		var max = getMax(tmp_products, "price");

		// If priceRange is greater/lowest than maxPrice/minPrice for the selection; reset the max/min value; avoiding out of range
		if (priceRange[1] > maxPrice || priceRange[0] < minPrice) {
			priceRange[0] = min;
			priceRange[1] = max;
		}

		// If slider has changes; filter the products
		if (priceRange[0] !== minPrice || priceRange[1] !== maxPrice) {
			tmp_products = tmp_products.filter(({ price }) =>
				parseFloat(price) >= priceRange[0] && parseFloat(price) <= priceRange[1]
			)
		} else { // if slider doesnt have changes update the min and max slider positions to see all filtered products without position slider
			priceRange[0] = min;
			priceRange[1] = max;
		}

		// At least order the result product list; use switch because has better performance
		switch (order) {

			case "1": // Z-A
				tmp_products = [...tmp_products].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1);
				break;

			case "2": // price ▼
				tmp_products = [...tmp_products].sort((a, b) => a.price > b.price ? 1 : -1);
				break;

			case "3": // price ▲
				tmp_products = [...tmp_products].sort((a, b) => a.price > b.price ? -1 : 1);
				break;

			default: // A-Z
				tmp_products = [...tmp_products].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
				break;
		}


		// Update the product list
		setProducts(tmp_products)
		// Update slider min and max values
		setMinPrice(min);
		setMaxPrice(max);

	}, [brandsChecked, priceRange, minPrice, maxPrice, order])

	// Changing State when volume increases/decreases
	const rangeSelectorChange = (event, newValue) => {
		setPriceRange(newValue);
	};

	// Update the array of checked brands
	const checkboxChange = (event) => {

		const newbrandsChecked = new Set(brandsChecked);

		if (event.target.checked) {
			newbrandsChecked.add(event.target.name);
		} else {
			newbrandsChecked.delete(event.target.name);
		}

		setBrandChecked(newbrandsChecked);
	}

	// Show/Hide Filters panel
	const showFilterPanel = () => setfilterPanel(!filterPanel)

	// Slider left and right indexes
	const ValueLabelComponent = (props) => {
		const { children, open, value } = props;

		return (
			<Tooltip open={open} enterTouchDelay={0} placement="bottom" title={`$${value}`}>
				{children}
			</Tooltip>
		);
	}

	const selectorChange = (event) => setOrder(event.target.value)

	return (
		<div>
			<Container>
				<Title>Product list</Title>
				<Filter>
					<FilterText>Sort by:</FilterText>
					<Select onChange={selectorChange} >
						<Option defaultValue value={0}>Name (A-Z)</Option>
						<Option value={1}>Name (Z-A)</Option>
						<Option value={2}>Lowest Price</Option>
						<Option value={3}>Highest Price</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterButton onClick={showFilterPanel}>
						<Tune />
						<FilterButtonText>
							Filters
						</FilterButtonText>
					</FilterButton>
				</Filter>
				{filterPanel &&
					<FilterContainer>
						<Filter>
							<FilterText>Brands:</FilterText>
							<FormGroup style={{ marginLeft: "15px" }}>
								{uniqBy(popularProducts, "brand").map((item) => (
									<FormControlLabel control={<Checkbox color="primary" />} checked={brandsChecked.has(item.brand) ? true : false} label={item.brand} key={item.brand} name={item.brand} onChange={checkboxChange} />
								))}
							</FormGroup>
						</Filter>
						<Filter>
							<FilterText>Price:</FilterText>
							<Slider
								getAriaLabel={() => "Price range"}
								value={priceRange}
								min={minPrice}
								max={maxPrice}
								color="primary"
								onChange={rangeSelectorChange}
								valueLabelDisplay="on"
								ValueLabelComponent={ValueLabelComponent}
								style={{ minWidth: "200px", margin: "0px 15px" }}
							/>
						</Filter>
					</FilterContainer>}

				<ProductList>
					{products.map((item) => (
						<Product item={item} key={item.id} />
					))}
				</ProductList>
			</Container>

		</div >
	);
};

export default Home;