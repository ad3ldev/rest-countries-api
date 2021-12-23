import StyledSearchBar from "./styled/SearchBar.styled";
import { RiSearchLine } from "react-icons/ri";
import Select from "./Select";

const SearchBar = ({ countries, setResult, setURL }) => {
	function search(name) {
		let result = [];
		countries.forEach((country) => {
			if (country.name.toLowerCase().includes(name.toLowerCase())) {
				result.push(country);
			}
		});
		setResult(result);
	}
	return (
		<StyledSearchBar>
			<form action="">
				<div>
					<label htmlFor="">
						<RiSearchLine />
					</label>
					<input
						type="text"
						placeholder="Search for a country..."
						onChange={(event) => {
							if (event.target.value === "") {
							} else {
								search(event.target.value);
							}
						}}
					/>
				</div>
			</form>
			<Select setURL={setURL} />
		</StyledSearchBar>
	);
};

export default SearchBar;
