import styled from "styled-components";

const StyledCountry = styled.div`
	display: grid;
	margin: 2rem;
	gap: 2rem;
	place-items: center;
	grid-template-columns: repeat(2, 1fr);
	h2 {
		font-weight: 800;
	}
	.flag {
		img {
			width: 100%;
		}
	}
	.info {
		h2 {
			grid-column: 1 / span 2;
		}
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
	.borders {
		p {
			font-weight: 600;
		}
		grid-column: span 2;
		display: flex;
		flex-wrap: wrap;
	}
`;

export default StyledCountry;
