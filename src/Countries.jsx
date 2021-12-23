import Card from "./components/Card";
import StyledCountries from "./styled/Countries.styled";
import { Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";

const Countries = ({ countries }) => {
	const [result, setResult] = useState(countries);
	useEffect(() => {
		setResult(countries);
		return;
	}, [countries]);
	return (
		<>
			<SearchBar countries={countries} setResult={setResult} />
			<StyledCountries>
				{result?.map((country) => {
					return (
						<Link
							key={country.numericCode}
							to={`./country/${country.alpha3Code}`}
						>
							<Card
								flags={country.flags}
								name={country.name}
								population={country.population}
								region={country.region}
								capital={country.capital}
							/>
						</Link>
					);
				})}
			</StyledCountries>
		</>
	);
};

export default Countries;
