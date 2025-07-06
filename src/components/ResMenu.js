import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import { useParams } from "react-router-dom";

const ResMenu = () => {
	const [resInfo, setResInfo] = useState(null);

	const { resId } = useParams();

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.19088557012942&lng=79.90561876482693&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
		);
		const json = await data.json();

		setResInfo(json.data);
	};

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
