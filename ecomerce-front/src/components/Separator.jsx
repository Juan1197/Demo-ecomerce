import styled from "styled-components";

const TextStyled = styled.p`
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 700;
	letter-spacing: normal;
	margin: 0 10px;
`;

const Separator = (props) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
			<div style={{ flex: 1, height: '0.5px', backgroundColor: 'lightgrey' }} />

			<div>
				<TextStyled>{props.text}</TextStyled>
			</div>

			<div style={{ flex: 1, height: '0.5px', backgroundColor: 'lightgrey' }} />
		</div>
	);
};

export default Separator;