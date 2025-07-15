import RestaurantCard from "./resCard";
import Shimer from "./Shimer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useonlineStatus";
import { BiSearch } from "react-icons/bi";

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [originalList, setOriginalList] = useState([]);
	const [search_bar, SetSearch_bar] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.19088557012942&lng=79.90561876482693&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

			const json = await data.json();

			const allRestaurants = [];

			json?.data?.cards.forEach((card) => {
				const restaurants =
					card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
				if (restaurants) {
					allRestaurants.push(...restaurants);
				}
			});

			setListOfRestaurants(allRestaurants);
			setOriginalList(allRestaurants);
		} catch (err) {
			console.error("Fetch error:", err);
		}
	};

	const onlineStatus = useOnlineStatus();

	if (!onlineStatus) {
		return (
			<h1 className="text-center text-xl text-red-600 dark:text-red-400 font-semibold mt-20">
				🚫 You're offline. Please check your internet connection.
			</h1>
		);
	}

	if (listOfRestaurants.length === 0) {
		return <Shimer />;
	}

	return (
		<section className="min-h-screen bg-[#fefefe] dark:bg-gray-900 px-4 sm:px-10 md:px-20 lg:px-32 py-10 transition-colors duration-300">
			{/* 🔍 Search Bar */}
			<div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
				<div className="flex w-full md:w-[60%] items-center bg-white dark:bg-gray-800 rounded-full shadow-lg px-4 py-2 transition-all">
					<input
						type="text"
						placeholder="Search..."
						value={search_bar}
						onChange={(e) => SetSearch_bar(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								const filtered = originalList.filter((restaurant) =>
									restaurant.info.name
										.toLowerCase()
										.includes(search_bar.toLowerCase())
								);
								setListOfRestaurants(filtered);
							}
						}}
						className="flex-grow bg-transparent text-gray-800 placeholder-gray-400 outline-none px-2 dark:text-white"
					/>

					<button
						onClick={() => {
							const filtered_restaurants = originalList.filter((restaurant) =>
								restaurant.info.name
									.toLowerCase()
									.includes(search_bar.toLowerCase())
							);
							setListOfRestaurants(filtered_restaurants);
						}}
						className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition-all"
					>
						<BiSearch className="text-lg" />
					</button>
				</div>

				<button
					className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-md text-gray-800 dark:text-white font-semibold hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95 transition-all duration-200"
					onClick={() => {
						const filteredList = originalList.filter(
							(res) => res.info.avgRating > 4.3
						);
						setListOfRestaurants(filteredList);
					}}
				>
					<span className="text-xl">🌟</span> Top Rated
				</button>
			</div>

			{/* 🍱 Restaurant Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{listOfRestaurants.map((restaurant, index) => (
					<Link
						key={restaurant.info.id + "_" + index}
						to={"/restaurants/" + restaurant.info.id}
						className="hover:scale-[1.02] transition-transform duration-300"
					>
						<RestaurantCard restaurant={restaurant} />
					</Link>
				))}
			</div>
		</section>
	);
};

export default Body;
