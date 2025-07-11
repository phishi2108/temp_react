import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const DarkModeToggle = () => {
	const { isDark, setIsDark } = useContext(ThemeContext);

	return (
		<button
			onClick={() => setIsDark(!isDark)}
			className="text-sm font-semibold px-4 py-1.5 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-white transition-all duration-300"
		>
			{isDark ? "☀️ Light" : "🌙 Dark"}
		</button>
	);
};

export default DarkModeToggle;
