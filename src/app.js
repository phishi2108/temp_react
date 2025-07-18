import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";
import { Provider } from "react-redux";
import webStore from "./util/webStore";
import Cart from "./components/Cart";
const AppLayout = () => {
	return (
		<Provider store={webStore}>
			<div className="app min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
				<Header />
				<Outlet />
			</div>
		</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurants/:resId",
				element: <ResMenu />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},

		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// ✅ Wrap your app in ThemeProvider for global access
root.render(
	<ThemeProvider>
		<RouterProvider router={appRouter} />
	</ThemeProvider>
);
