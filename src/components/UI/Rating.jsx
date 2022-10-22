import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"

function Rating({ rating }) {
	return (
		<div className="book__ratings">
			{/* Take the rating number and render the number of stars */}
			{new Array(Math.floor(rating)).fill(0).map((_, index) => (
				<FontAwesomeIcon icon={faStar} key={index} />
			))}
			{/* If the rating is decimal, render half a star */}
			{rating % 1 !== 0 ? <FontAwesomeIcon icon={faStarHalfAlt} /> : null}
		</div>
	)
}

export default Rating
