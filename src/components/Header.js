import { LOGO_URL } from "../util/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import userContext from "../util/userContext";

const Header = () => {
	const [btnNameReact, setBtnNameReact] = useState("Log In");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const { loggedInUser } = useContext(userContext);
	console.log(loggedInUser);

	return (
		<header className="backdrop-blur-lg bg-white/60 dark:bg-gray-900/60 shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
			<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
				{/* Logo + Brand */}
				<div className="flex items-center gap-3">
					<img
						src={LOGO_URL}
						alt="App Logo"
						className="w-12 h-12 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
					/>
					<Link to="/">
						<h1 className="text-3xl font-extrabold text-gray-800 dark:text-white tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer">
							Foodie<span className="text-blue-500">Hub</span>
						</h1>
					</Link>
				</div>

				{/* Desktop Nav */}
				<nav className="hidden md:flex">
					<ul className="flex gap-8 items-center text-lg font-medium text-gray-700 dark:text-gray-200">
						<li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
							<Link to="/">Home</Link>
						</li>
						<li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
							<Link to="/about">About Us</Link>
						</li>
						<li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
							<Link to="/contact">Contact Us</Link>
						</li>
						<li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer">
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
						<li>
							<DarkModeToggle />
						</li>
						
					</ul>
				</nav>

				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						{isMobileMenuOpen ? (
							<X size={28} className="text-gray-800 dark:text-white" />
						) : (
							<Menu size={28} className="text-gray-800 dark:text-white" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			{isMobileMenuOpen && (
				<nav className="md:hidden px-6 pb-6">
					<ul className="flex flex-col gap-4 text-lg font-medium text-gray-700 dark:text-gray-200">
						<li>
							<Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
								Home
							</Link>
						</li>
						<li>
							<Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
								About Us
							</Link>
						</li>
						<li>
							<Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
								Contact Us
							</Link>
						</li>
						<li>
							<span className="cursor-pointer">Cart 🛒</span>
						</li>
						<li>
							<button
								className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-1.5 rounded-full shadow-md hover:from-indigo-500 hover:to-blue-500 transition-all duration-300"
								onClick={() => {
									setBtnNameReact((prev) =>
										prev === "Log In" ? "Log Out" : "Log In"
									);
									setIsMobileMenuOpen(false);
								}}
							>
								{btnNameReact}
							</button>
						</li>
						<li>
							<DarkModeToggle />
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Header;
