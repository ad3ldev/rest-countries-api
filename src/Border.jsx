import { Link } from "react-router-dom";
import Button from "./components/Button";
import useFetch from "./useFetch";

const Border = ({ code }) => {
	const {
		data: country,
		error,
		loading,
	} = useFetch(`https://restcountries.com/v2/alpha/${code}`);
	return (
		<>
			{error && <Button>Not Found</Button>}
			{loading && <p>loading..</p>}
			{!error && !loading && (
				<Link
					key={country.numericCode}
					to={`/rest-countries-api/country/${country.alpha3Code}`}
				>
					<Button name={country.name}></Button>
				</Link>
			)}
		</>
	);
};

export default Border;
