import { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import GlobalStyle from "./styled/globalStyle";
import Navbar from "./components/Navbar";

const themeLight = {
	text: "hsl(200, 15%, 8%)",
	input: "hsl(0, 0%, 52%)",
	elements: "hsl(0, 0%, 100%)",
	bg: "hsl(0, 0%, 98%)",
};

const themeDark = {
	text: "hsl(0, 0%, 100%)",
	input: "hsl(0, 0%, 52%)",
	elements: "hsl(209, 23%, 22%)",
	bg: "hsl(207, 26%, 17%)",
};

let light = true;

function App() {
	return (
		<>
			<ThemeProvider theme={light ? themeLight : themeDark}>
				<GlobalStyle />
				<Navbar />
				<Button />
			</ThemeProvider>
		</>
	);
}

export default App;
