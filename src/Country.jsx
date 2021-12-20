import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Country = () => {
	const { alpha3Code } = useParams();
	const {
		data: country,
		error,
		loading,
	} = useFetch(`https://restcountries.com/v2/alpha/${alpha3Code}`);
	return (
		<div>
			{!loading && (
				<img
					src={country.flags?.svg ?? "Not Loaded"}
					alt={`Flag of ${country.name}`}
				/>
			)}
			<h2>{country.name}</h2>
		</div>
	);
};

export default Country;
