import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/login" element={<Login/>} />
					<Route path="/signup" element={<Register/>} />
					<Route path="/cart" element={<Cart/>} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;