import styled from "styled-components";

const StyledCard = styled.div`
	background-color: ${({ theme }) => theme.elements};
	box-shadow: 0 0 15px rgb(0 0 0 / 0.2);
	display: grid;
	border-radius: 8px;
	grid-template-rows: repeat(2, 1fr) h2, p {
		padding: 0.5rem;
	}
	div {
		padding: 1rem;
	}
	img {
		border-radius: 8px 8px 0 0;
		object-fit: cover;
		width: 20rem;
		aspect-ratio: 16/9;
	}
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.05);
	}
`;

export default StyledCard;
