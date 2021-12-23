import StyledCard from "./styled/Card.styled";

const Card = ({ flags, name, population, region, capital }) => {
	return (
		<StyledCard>
			<img src={flags.png} alt={`Flag of ${name}`} />
			<div>
				<h2>
					<span>{name}</span>
				</h2>
				<p>
					<span>Population: </span>
					{population}
				</p>
				<p>
					<span>Region: </span>
					{region}
				</p>
				<p>
					<span>Capital: </span>
					{capital}
				</p>
			</div>
		</StyledCard>
	);
};

export default Card;
