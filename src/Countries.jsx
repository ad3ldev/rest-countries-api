import Card from "./components/Card";
import StyledCountries from "./styled/Countries.styled";
import { Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";

const Countries = ({ countries, url, setURL }) => {
	return (
		<>
			<SearchBar url={url} setURL={setURL} />
			<StyledCountries>
				{countries?.map((country) => {
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
