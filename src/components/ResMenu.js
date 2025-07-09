import Shimer from "./Shimer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../util/useRestaurantMenu";
const ResMenu = () => {
	

	const { resId } = useParams();
	const resInfo = useRestaurantMenu(resId);


	if (!resInfo) return <Shimer />;

	const resDetails = resInfo?.cards[2]?.card?.card?.info;
	const name = resDetails?.name;
	const cuisines = resDetails?.cuisines?.join(", ");
	const costForTwo = resDetails?.costForTwoMessage;

	const regularCards =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

	const itemCards =
		regularCards.find((card) => card.card?.card?.itemCards)?.card?.card
			?.itemCards || [];

	console.log(itemCards);
	return (
		<div className="menu">
			<h1>{name}</h1>
			<p>
				{cuisines} - {costForTwo}
			</p>
			<h2>Menu</h2>
			<ul>
				{itemCards.map((item, index) => (
					<li key={item.card.info.id || item.card.info.name || index}>
						{item.card.info.name} - ₹
						{(item.card.info.price ?? item.card.info.defaultPrice ?? 0) / 100}
					</li>
				))}
			</ul>
		</div>
	);
};
export default ResMenu;
