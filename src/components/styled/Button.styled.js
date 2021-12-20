import styled from "styled-components";

const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.elements};
	box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
	padding: 0.5rem;
	margin: 1rem;
	border-radius: 8px;
	border: none;
`;

export default StyledButton;
