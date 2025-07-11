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

	return (
		<section className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 md:px-16">
			<div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-xl">
				{/* Header */}
				<div className="mb-10 border-b pb-4">
					<h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
					<p className="text-gray-600 text-sm">{cuisines}</p>
					<p className="text-gray-700 text-sm mt-1">{costForTwo}</p>
				</div>

				{/* Menu */}
				<h2 className="text-2xl font-semibold text-gray-800 mb-6">🍽️ Menu</h2>
				<ul className="space-y-6">
					{itemCards.map((item, index) => {
						const dish = item.card.info;
						return (
							<li
								key={dish.id || index}
								className="p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row justify-between gap-4"
							>
								{/* Left Side */}
								<div className="flex-1">
									<h3 className="text-lg font-semibold text-gray-900">
										{dish.name}
									</h3>

									{/* Veg/Non-Veg */}
									<p className="text-xs mt-1">
										{dish.itemAttribute?.vegClassifier === "VEG" ? (
											<span className="text-green-600 font-bold">🟢 Veg</span>
										) : (
											<span className="text-red-600 font-bold">🔴 Non-Veg</span>
										)}
									</p>

									{/* Description */}
									{dish.description && (
										<p className="text-sm text-gray-500 mt-2 line-clamp-3">
											{dish.description}
										</p>
									)}

									{/* Price */}
									<p className="text-gray-800 font-medium mt-2">
										₹
										{(dish.price ?? dish.defaultPrice ?? 0) / 100}
									</p>
								</div>

								{/* Right Side */}
								<div className="flex flex-col items-center gap-2 min-w-[100px]">
									{dish.imageId && (
										<img
											src={`https://media-assets.swiggy.com/swiggy/image/upload/${dish.imageId}`}
											alt={dish.name}
											className="w-24 h-24 rounded-lg object-cover"
										/>
									)}
									<button className="text-sm px-4 py-1 bg-neutral-800 text-white rounded-md hover:bg-neutral-700 transition">
										Add
									</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default ResMenu;
