const RestaurantCard = ({ restaurant }) => {
	const { name, cuisines, cloudinaryImageId, avgRating, sla } = restaurant.info;

	return (
		<div className="w-full h-[320px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.015] transition-all duration-300 flex flex-col">
			<img
				className="h-40 w-full object-cover"
				alt="res-logo"
				src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
			/>

			<div className="p-4 flex flex-col justify-between flex-grow">
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-5 line-clamp-1">
					{name}
				</h3>
				<h4 className="text-sm text-gray-500 dark:text-gray-300 mt-1 line-clamp-2">
					{cuisines.join(", ")}
				</h4>

				<div className="flex items-center justify-between mt-4 text-sm font-medium text-gray-600 dark:text-gray-400">
					<span>⭐ {avgRating}</span>
					<span>⏱️ {sla.deliveryTime} mins</span>
				</div>
			</div>
		</div>
	);
};

export default RestaurantCard;
