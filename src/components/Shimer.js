const Shimer = () => {
	return (
		<div className="res-container">
			{Array(8)
				.fill("")
				.map((_, index) => (
					<div className="shimmer-card" key={index}>
						<div className="shimmer-img shimmer-animate" />
						<div className="shimmer-title shimmer-animate" />
						<div className="shimmer-cuisine shimmer-animate" />
						<div className="shimmer-rating shimmer-animate" />
						<div className="shimmer-time shimmer-animate" />
					</div>
				))}
		</div>
	);
};

export default Shimer;
