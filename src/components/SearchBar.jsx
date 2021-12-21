import { useState } from "react";
import StyledSearchBar from "./styled/SearchBar.styled";

const SearchBar = () => {
	const [query, setQuery] = useState("");
	return (
		<StyledSearchBar>
			<form action="">
				<label htmlFor="">
					Search:
					<input
						type="text"
						placeholder="Search for a country..."
						onChange={(event) => setQuery(event.target.value)}
					/>
				</label>
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
