import { Link } from "react-router-dom";
import StyledNavbar from "./styled/Navbar.styled";

const Navbar = () => {
	return (
		<StyledNavbar>
			<Link to="/rest-countries-api">
				<h1>Where in the world?</h1>
			</Link>
			<div>
				<p>Dark Mode</p>
			</div>
		</StyledNavbar>
	);
};

export default Navbar;
