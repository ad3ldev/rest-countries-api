import styled from "styled-components";

const StyledCountry = styled.div`
	display: grid;
	margin: 1rem;
	gap: 1rem;
	place-items: center;
	grid-template-columns: repeat(2, 1fr);
	.info {
		h2 {
			grid-column: 1 / span 2;
		}
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
`;

export default StyledCountry;
