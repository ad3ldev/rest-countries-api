import StyledSearchBar from "./styled/SearchBar.styled";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = ({ countries, setCountries }) => {
	function search(name) {
		console.log(name);
		let result = [];
		countries.forEach((country) => {
			if (country.name.toLowerCase().includes(name)) {
				result.push(country);
			}
		});
		return result;
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
								setCountries(search(event.target.value));
							}
						}}
					/>
				</div>
			</form>
			<select>
				<option
					defaultValue={`World`}
					placeholder="Select a region"
				></option>
				<option value="grapefruit">Grapefruit</option>
				<option value="lime">Lime</option>
				<option value="coconut">Coconut</option>
				<option value="mango">Mango</option>
			</select>
		</StyledSearchBar>
	);
};

export default SearchBar;
