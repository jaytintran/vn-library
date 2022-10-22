import React, { useState } from "react"
import Book from "../UI/Book"

function Books({ books: initialBooks }) {
	const [books, setBooks] = useState(initialBooks)

	function filterBooks(filterValue) {
		if (filterValue === "LOW_TO_HIGH") {
			setBooks(
				books
					.slice()
					.sort(
						(a, b) =>
							(a.salePrice || a.originalPrice) -
							(b.salePrice || b.originalPrice)
					)
			)
		} else if (filterValue === "HIGH_TO_LOW") {
			setBooks(
				books
					.slice()
					.sort(
						(a, b) =>
							(b.salePrice || b.originalPrice) -
							(a.salePrice || a.originalPrice)
					)
			)
		} else if (filterValue === "RATING") {
			setBooks(books.slice().sort((a, b) => b.rating - a.rating))
		}
	}
	return (
		<div id="books__body">
			<main id="books__main">
				<section className="books__container">
					<div className="row">
						<div className="books__header">
							<h2 className="section__title">
								All <span className="text-highlight">Books</span>
							</h2>
							<select
								id="filter"
								defaultValue="DEFAULT"
								onChange={(event) => filterBooks(event.target.value)}
							>
								<option value="DEFAULT" disabled>
									Sort
								</option>
								<option value="LOW_TO_HIGH">Price | Low to High</option>
								<option value="HIGH_TO_LOW">Price | High to High</option>
								<option value="RATING">Sort by Rating</option>
							</select>
						</div>
						<div className="books">
							{books.map((book) => (
								<Book book={book} key={book.id} />
							))}
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Books
