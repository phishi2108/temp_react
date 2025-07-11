const Shimer = () => {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12 transition-colors duration-300">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{Array(8)
					.fill("")
					.map((_, index) => (
						<div
							key={index}
							className="animate-pulse bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md space-y-4"
						>
							<div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg w-full" />
							<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
							<div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
							<div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
							<div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
						</div>
					))}
			</div>
		</div>
	);
};

export default Shimer;
