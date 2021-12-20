import StyledCard from "./styled/Card.styled";

const Card = ({ flags, name, population, region, capital }) => {
	return (
		<StyledCard>
			<img src={flags.png} alt={`Flag of ${name}`} />
			<div>
				<h2>{name}</h2>
				<p>{`Population: ${population}`}</p>
				<p>{`Region: ${region}`}</p>
				<p>{`Capital: ${capital}`}</p>
			</div>
		</StyledCard>
	);
};

export default Card;
