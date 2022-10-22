import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"
import Rating from "../UI/Rating"
import Price from "../UI/Price"
import Book from "../UI/Book"

function BookInfo({ books, addToCart, cart }) {
	const { id } = useParams()
	const book = books.find((book) => +book.id === +id)
	const currentBook = books[id - 1]

	function addBookToCart(book) {
		addToCart(book)
	}

	function isBookAdded() {
		// Recognize if the book is added already in the cart
		return cart.find((book) => book.id === +id)
	}

	return (
		<div id="books__body">
			<main className="books__main">
				<section className="books__container">
					<div className="row">
						<div className="book__selected--top">
							<Link to="/books" className="book__link">
								<FontAwesomeIcon
									icon={faArrowCircleLeft}
									style={{ color: "#7342D6", marginRight: ".5rem" }}
								/>
								Back
							</Link>
						</div>

						<div className="book__selected">
							<figure className="book__selected--figure">
								<img
									src={currentBook.url}
									className="book__selected--img"
									alt=""
								/>
							</figure>
							<div className="book__selected--description">
								<h2 className="boook__selected--title">{currentBook.title}</h2>
								<Rating rating={currentBook.rating} />
								<div className="book__selected--price">
									<Price
										originalPrice={currentBook.originalPrice}
										salePrice={currentBook.salePrice}
									/>
								</div>
								<div className="book__summary">
									<h3 className="book__summary--title">Summary</h3>
									<p className="book__summary--para">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Aliquam id arcu at justo porttitor varius. Nullam pharetra
										molestie pretium. Nunc magna ipsum, consectetur ac fermentum
										et, condimentum ac diam. Proin iaculis non purus ac
										imperdiet. Aenean in odio laoreet nisl laoreet congue ac sit
										amet nisl. Nunc suscipit nisl ac imperdiet mattis. Proin
										pellentesque rutrum dui eleifend eleifend. In fringilla nibh
										a nulla molestie, non sollicitudin velit commodo.
										Suspendisse sodales interdum mi vel tempus. Ut et nunc et
										odio pulvinar cursus. Cras quis tortor id libero viverra
										laoreet. Phasellus sagittis libero at magna molestie
										finibus. Quisque non mi at dolor venenatis hendrerit ac eu
										enim. Mauris quis euismod est.
									</p>
									{isBookAdded() ? (
										<Link to={`/cart`}>
											<button className="btn">Checkout</button>
										</Link>
									) : (
										<button
											className="btn"
											onClick={() => addBookToCart(currentBook)}
										>
											Add to Cart
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<section className="books__container">
				<div className="row">
					<div className="books__selected--top">
						<h2 className="books__selected--title--top">Recommended Books</h2>
						<div className="books">
							{books
								.filter((book) => book.rating === 5 && +book.id !== +id)
								.slice(0, 4)
								.map((book) => (
									<Book book={book} key={book.id} />
								))}
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default BookInfo
