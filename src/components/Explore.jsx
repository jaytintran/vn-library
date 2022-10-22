import React from "react"
import { Link } from "react-router-dom"

function Explore() {
	return (
		<section id="explore">
			<div className="container">
				<div className="row row__column">
					<h2 className="section__title">
						Explore More <span className="text-highlight">Books</span>
					</h2>
					<Link to="/books">
						<button className="btn">Go to Library</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Explore
