import styled from "styled-components";

const StyledSearchBar = styled.div`
	display: flex;
	margin: 2rem;
	justify-content: space-between;
	form {
		box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
		border-radius: 8px;
		background: ${({ theme }) => theme.elements};
		color: ${({ theme }) => theme.text};
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			label {
				padding: 0 1rem;
			}
		}
		input {
			border: none;
			height: 2.25rem;
			border-radius: 8px;
			background: ${({ theme }) => theme.elements};
			color: ${({ theme }) => theme.text};
			&:focus {
				outline: none;
			}
		}
	}
`;

export default StyledSearchBar;
