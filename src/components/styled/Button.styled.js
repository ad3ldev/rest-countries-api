import styled from "styled-components";

const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.elements};
	box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
	padding: 0.5rem;
	margin: 1rem;
	border-radius: 8px;
	border: none;
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.05);
	}
	&:active {
		transform: scale(0.9);
	}
	cursor: pointer;
`;

export default StyledButton;
