import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import StyledCountry from "./styled/Country.styled";

const Country = () => {
	const { alpha3Code } = useParams();
	const {
		data: country,
		error,
		loading,
	} = useFetch(`https://restcountries.com/v2/alpha/${alpha3Code}`);
	return (
		<StyledCountry>
			<div className="flag">
				{!loading && (
					<img
						src={country.flags?.svg ?? "Not Loaded"}
						alt={`Flag of ${country.name}`}
					/>
				)}
			</div>
			<div className="info">
				<h2>{country.name}</h2>
				<div>
					<p>
						<span>Native Name: </span>
						{country.nativeName}
					</p>
					<p>
						<span>Population: </span>
						{country.population}
					</p>
					<p>
						<span>Region: </span>
						{country.region}
					</p>
					<p>
						<span>Sub Region: </span>
						{country.subregion}
					</p>
					<p>
						<span>Capital: </span>
						{country.capital}
					</p>
				</div>
				<div>
					<p>
						<span>Top Level Domain: </span>
						{country.topLevelDomain}
					</p>
					<p>
						<span>Currencies: </span>
						{country.currencies?.map((currency) => {
							return `${currency.name}`;
						})}
					</p>
					<p>
						<span>Languages: </span>
						{country.languages?.map((language) => {
							return `${language.name}`;
						})}
					</p>
				</div>
			</div>
		</StyledCountry>
	);
};

export default Country;
