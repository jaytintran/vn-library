import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { books } from "./data"

import Nav from "./components/Nav"
import Home from "./components/pages/Home"
import Footer from "./components/Footer"
import Books from "./components/pages/Books"
import BookInfo from "./components/pages/BookInfo"
import Cart from "./components/pages/Cart"

function App() {
	const [cart, setCart] = useState([])

	function addToCart(book) {
		setCart([...cart, { ...book, quantity: 1 }])
	}

	function changeQuantity(book, quantity) {
		setCart(
			cart.map((item) => {
				return item.id === book.id
					? {
							...item,
							quantity: +quantity,
					  }
					: item
			})
		)
	}

	function removeItem(item) {
		setCart(cart.filter((book) => book.id !== item.id))
		console.log("removed", item)
	}

	function cartNumber() {
		let counter = 0
		cart.forEach((item) => {
			counter += item.quantity
		})
		return counter
	}

	useEffect(() => {
		console.log(cart)
	}, [cart])
	return (
		<div className="App">
			<Router>
				<Nav cart={cart} cartNumber={cartNumber()} />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/books" element={<Books books={books} />} />
					<Route
						exact
						path="/books/:id"
						element={
							<BookInfo books={books} addToCart={addToCart} cart={cart} />
						}
					/>
					<Route
						exact
						path="/cart"
						element={
							<Cart
								books={books}
								cart={cart}
								changeQuantity={changeQuantity}
								removeItem={removeItem}
							/>
						}
					/>
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App
