import RestaurantCard from "./resCard";
import Shimer from "./Shimer";
import { useEffect, useState } from "react";

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [originalList, setOriginalList] = useState([]);
	const [search_bar, SetSearch_bar] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6574006&lng=75.8359645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();

		const restaurantListCard = json?.data?.cards.find(
			(card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);

		const restaurants =
			restaurantListCard?.card?.card?.gridElements?.infoWithStyle
				?.restaurants || [];

		setListOfRestaurants(restaurants);
		setOriginalList(restaurants);
	};

	if (listOfRestaurants.length === 0) {
		return <Shimer />;
	}

	return (
		<div className="body">
			<div className="filter">
				<div className="search-box">
					<input
						type="text"
						className="search_bar"
						value={search_bar}
						onChange={(e) => SetSearch_bar(e.target.value)}
					></input>
					<button
						onClick={() => {
							const filtered_restaurants = originalList.filter((restaurant) =>
								restaurant.info.name
									.toLowerCase()
									.includes(search_bar.toLowerCase())
							);

							setListOfRestaurants(filtered_restaurants);
						}}
					>
						Search
					</button>
				</div>
				<button
					className="filter-button"
					onClick={() => {
						const filteredList = originalList.filter(
							(res) => res.info.avgRating > 4.3
						);
						setListOfRestaurants(filteredList);
					}}
				>
					Top Rated Restaurants
				</button>
			</div>

			<div className="res-container">
				{listOfRestaurants.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;
