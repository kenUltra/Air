import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import "./App.css";
import Host from "./pages/Host";
import Matter from "./pages/Matter";
import Airbnb from "./pages/Airbnb";
import Home from "./Component/Home/Home";

const route = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" errorElement={<Matter />}>
			<Route index element={<Airbnb />} />
			<Route path="/host-house">
				<Route index element={<Host />} />
			</Route>
			<Route path="/become-hoster">
				<Route index element={<Home />} />
			</Route>
			<Route path="/search-index">
				<Route index element={<h2 style={{ textAlign: "center" }}>This is subject to change</h2>} />
			</Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={route} />;
}

export default App;
