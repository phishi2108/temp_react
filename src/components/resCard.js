const RestaurantCard = ({ restaurant }) => {
	const { name, cuisines, cloudinaryImageId, avgRating, sla } = restaurant.info;

	return (
		<div className="res-card">
			<img
				className="res-logo"
				alt="res-logo"
				src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
			/>
			<h3>{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>⭐ {avgRating}</h4>
			<h4>⏱️ {sla.deliveryTime} mins</h4>
		</div>
	);
};

export default RestaurantCard;
