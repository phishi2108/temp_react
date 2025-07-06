import { LOGO_URL } from "../util/constants";
import { useState } from "react";

const Header = () => {

	const [btnNameReact,setBtnNameReact] = useState("Log In");

	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src={LOGO_URL} />
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
					<li>
						<button
							className="Login-Button"
							onClick={() => {
								setBtnNameReact("Log Out");
							}}
						>
							{btnNameReact}
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Header;
