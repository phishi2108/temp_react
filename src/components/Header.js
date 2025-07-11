import { LOGO_URL } from "../util/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [btnNameReact, setBtnNameReact] = useState("Log In");

	return (
		<header className="backdrop-blur-md bg-white/60 shadow-lg sticky top-0 z-50 border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
				{/* Logo + Brand */}
				<div className="flex items-center gap-3">
					<img
						src={LOGO_URL}
						alt="App Logo"
						className="w-12 h-12 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
					/>
					<h1 className="text-3xl font-extrabold text-gray-800 tracking-tight hover:text-blue-600 transition-colors duration-300">
						Foodie<span className="text-blue-500">Hub</span>
					</h1>
				</div>

				{/* Nav Items */}
				<nav>
					<ul className="flex gap-8 items-center text-lg font-medium text-gray-700">
						<li className="hover:text-blue-600 transition-colors duration-200">
							<Link to="/">Home</Link>
						</li>
						<li className="hover:text-blue-600 transition-colors duration-200">
							<Link to="/about">About Us</Link>
						</li>
						<li className="hover:text-blue-600 transition-colors duration-200">
							<Link to="/contact">Contact Us</Link>
						</li>
						<li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">
							Cart 🛒
						</li>
						<li>
							<button
								className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-1.5 rounded-full shadow-md hover:from-indigo-500 hover:to-blue-500 transition-all duration-300"
								onClick={() =>
									setBtnNameReact((prev) =>
										prev === "Log In" ? "Log Out" : "Log In"
									)
								}
							>
								{btnNameReact}
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
