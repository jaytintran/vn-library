import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import Price from "./Price"
import Rating from "./Rating"

function Book({ book }) {
	const [img, setImg] = useState()

	const mountedRef = useRef(true)

	useEffect(() => {
		const img = new Image()
		img.src = book.url
		img.onload = () => {
			setTimeout(() => {
				mountedRef.current && setImg(img)
			}, 1000)
		}
		return () => {
			// when the component unmount
			mountedRef.current = false
		}
	})
	return (
		<div className="book">
			{img ? (
				<>
					<Link to={`/books/${book.id}`}>
						<figure className="book__img--wrapper">
							<img src={book.url} className="book__img" alt="" />
						</figure>
					</Link>
					<div className="book__title">
						<Link to={`/books/${book.id}`} className="book__title--link">
							{book.title}
						</Link>
					</div>
					<Rating rating={book.rating} />
					<Price
						originalPrice={book.originalPrice}
						salePrice={book.salePrice}
					/>
				</>
			) : (
				<>
					<div className="book__img--skeleton"></div>
					<div className="skeleton book__title--skeleton"></div>
					<div className="skeleton book__rating--skeleton"></div>
					<div className="skeleton book__price--skeleton"></div>
				</>
			)}
		</div>
	)
}

export default Book
