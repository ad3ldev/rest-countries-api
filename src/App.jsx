import { ThemeProvider } from "styled-components";
import Countries from "./Countries";
import GlobalStyle from "./styled/globalStyle";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Country from "./Country";
import useFetch from "./useFetch";
import { useState } from "react";

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

// TODO: Make the fetch once and then pass down props

function App() {
	const {
		error,
		loading,
		data: countries,
	} = useFetch("https://restcountries.com/v2/all");
	const [theme, setTheme] = useState(true);
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme ? themeLight : themeDark}>
				<Navbar theme={theme} setTheme={setTheme} />
				<GlobalStyle />
				<Routes>
					<Route
						path="/rest-countries-api"
						element={
							!loading && (
								<Countries
									countries={
										countries ? countries : "Not Ready"
									}
								/>
							)
						}
					/>
					<Route
						path="/rest-countries-api/country/:alpha3Code"
						element={<Country />}
					/>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
