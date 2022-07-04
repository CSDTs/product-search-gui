import { useState, useEffect } from "react";

import { Container } from "@chakra-ui/react";

import ProductGrid from "./components/Grid/Grid";
import Filter from "./components/Filter/Filter";
import CategoryDrawer from "./components/CategoryDrawer/CategoryDrawer";

import "./App.css";

function App() {
	const [products, setProducts] = useState([]);
	const [attributes, setAttributes] = useState([]);

	const fetchProducts = async () => {
		//TODO Replace with final endpoint
		const res = await fetch("products.json");
		const data = await res.json();
		setProducts(data);
	};
	const fetchAttributes = async () => {
		//TODO Replace with final endpoint
		const res = await fetch("principles.json");
		const data = await res.json();
		setAttributes(data);
	};

	useEffect(() => {
		fetchProducts();
		fetchAttributes();
	}, [products, attributes]);

	return (
		<div className="App">
			<header className="App-header">
				<p>Artisanal Futures</p>
				<CategoryDrawer attributes={attributes} />
				<Container>
					<Filter attributes={attributes} />
				</Container>

				<ProductGrid products={products} />
			</header>
		</div>
	);
}

export default App;
