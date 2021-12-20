import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import StyledApp from "./styled/App.styled";
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
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		fetch("https://restcountries.com/v2/all")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setCountries(data);
			});
	}, []);
	return (
		<>
			<ThemeProvider theme={light ? themeLight : themeDark}>
				<GlobalStyle />
				<Navbar />
				<StyledApp>
					{countries.map((country) => {
						return (
							<Card
								key={country.numericCode}
								flags={country.flags}
								name={country.name}
								population={country.population}
								region={country.region}
								capital={country.capital}
							/>
						);
					})}
				</StyledApp>
			</ThemeProvider>
		</>
	);
}

export default App;
