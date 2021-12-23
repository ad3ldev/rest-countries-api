import styled from "styled-components";

const StyledSelect = styled.select`
	width: 150px;
	background: ${({ theme }) => theme.elements};
	color: ${({ theme }) => theme.text};
	box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
	border-radius: 8px;
	outline: none;
`;

export default StyledSelect;
