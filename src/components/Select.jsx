import StyledSelect from "./styled/Select.styled";
const Select = ({ setURL }) => {
	const options = [
		{
			id: 0,
			label: "Filter by Region",
			value: "https://restcountries.com/v2/all",
		},
		{
			id: 1,
			label: "Africa",
			value: "https://restcountries.com/v2/region/africa",
		},
		{
			id: 2,
			label: "Americas",
			value: "https://restcountries.com/v2/region/americas",
		},
		{
			id: 3,
			label: "Asia",
			value: "https://restcountries.com/v2/region/asia",
		},
		{
			id: 4,
			label: "Europe",
			value: "https://restcountries.com/v2/region/europe",
		},
		{
			id: 5,
			label: "Oceania",
			value: "https://restcountries.com/v2/region/oceania",
		},
	];
	return (
		<StyledSelect
			defaultValue={options[0].value}
			onChange={(e) => setURL(e.target.value)}
		>
			{options.map((option) => {
				return (
					<option key={option.id} value={option.value}>
						{option.label}
					</option>
				);
			})}
		</StyledSelect>
	);
};

export default Select;
