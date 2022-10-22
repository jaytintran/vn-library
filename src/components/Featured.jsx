import React from "react"
import Book from "./UI/Book"
import { books } from "../data"

function Featured() {
	console.log(books)
	console.log(books[0])
	return (
		<section id="features">
			<div className="container">
				<div className="row">
					<h2 className="section__title text-highlight">Featured Books</h2>
					<div className="books">
						{/* Take only the first 4 highest rating books from the books data*/}
						{/* Then map through them to create the book ui components */}
						{books
							.filter((book) => book.rating === 5)
							.slice(0, 4)
							.map((book) => (
								<Book key={book.id} book={book} />
							))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Featured
