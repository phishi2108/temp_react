import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../util/cartSlice";

const Cart = () => {
	const cartItems = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	const handleRemoveItem = () => {
		dispatch(removeItem());
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	const totalAmount = cartItems.reduce((acc, item) => {
		const price = item.card.info.price ?? item.card.info.defaultPrice ?? 0;
		return acc + price;
	}, 0);

	if (cartItems.length === 0) {
		return (
			<section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
				<p className="text-xl font-semibold text-gray-700 dark:text-white">
					🛒 Your cart is empty.
				</p>
			</section>
		);
	}

	return (
		<section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 sm:px-8 md:px-16 transition-colors duration-300">
			<div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-xl shadow-lg">
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
						🛍️ Your Cart
					</h2>
					<button
						className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md transition"
						onClick={handleClearCart}
					>
						Clear Cart
					</button>
				</div>

				<ul className="space-y-6">
					{cartItems.map((item, index) => {
						const dish = item.card.info;
						const price = (dish.price ?? dish.defaultPrice ?? 0) / 100;

						return (
							<li
								key={`${dish.id}-${index}`}
								className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4"
							>
								{/* Info */}
								<div className="flex-1 w-full">
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
										{dish.name}
									</h3>
									<p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
										₹{price}
									</p>
								</div>

								{/* Image & Button */}
								<div className="flex flex-col items-center gap-2 min-w-[100px]">
									{dish.imageId && (
										<img
											src={`https://media-assets.swiggy.com/swiggy/image/upload/${dish.imageId}`}
											alt={dish.name}
											className="w-20 h-20 object-cover rounded-lg"
										/>
									)}
									<button
										className="text-xs px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
										onClick={() => handleRemoveItem(dish.id)}
									>
										Remove
									</button>
								</div>
							</li>
						);
					})}
				</ul>

				{/* Total */}
				<div className="mt-10 flex justify-end text-lg text-gray-900 dark:text-white font-semibold">
					Total: ₹{totalAmount / 100}
				</div>
			</div>
		</section>
	);
};

export default Cart;
