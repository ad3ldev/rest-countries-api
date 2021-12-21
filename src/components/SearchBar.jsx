import StyledSearchBar from "./styled/SearchBar.styled";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = ({ url, setURL }) => {
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
								setURL("https://restcountries.com/v2/all");
							} else {
								setURL(
									`https://restcountries.com/v2/name/${event.target.value}`,
								);
							}
							console.log(url);
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
