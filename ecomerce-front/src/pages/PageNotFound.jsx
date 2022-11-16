import React from 'react';
import { Link } from "react-router-dom";

import Button from '../components/Button';

const PageNotFound = () => {

	return (
		<div style={{alignItems: "center"}}>
			<h1>Page you are looking for doesn&apos;t exists.</h1>
			<br />
			<Link to="/">
				<Button primary text="Go back" />
			</Link>
		</div>
	);
};

export default PageNotFound;