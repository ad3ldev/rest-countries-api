import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
    
    *{
        color: ${({ theme }) => theme.text};
        font-family: "Nunito Sans", sans-serif;
        text-decoration: none;
    }
    body {
        padding: 0;
        margin: 0;
        background-color: ${({ theme }) => theme.bg};
    }
`;

export default GlobalStyle;
