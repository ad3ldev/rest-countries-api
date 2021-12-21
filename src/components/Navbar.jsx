import { Link } from "react-router-dom";
import StyledNavbar from "./styled/Navbar.styled";
import { RiMoonLine, RiMoonFill } from "react-icons/ri";

const Navbar = ({ theme, setTheme }) => {
	return (
		<StyledNavbar>
			<Link to="/rest-countries-api">
				<h1>Where in the world?</h1>
			</Link>
			<div
				className="dark-mode"
				onClick={() => {
					setTheme(!theme);
				}}
			>
				{theme && <RiMoonLine />}
				{!theme && <RiMoonFill />}
				<p>Dark Mode</p>
			</div>
		</StyledNavbar>
	);
};

export default Navbar;
