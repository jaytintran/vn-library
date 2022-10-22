import React from "react"
import HeaderImage from "../assets/Undraw_Books.svg"
import { Link } from "react-router-dom"

function Landing() {
	return (
		<section id="landing">
			<header>
				<div className="header__container">
					<div className="header__description">
						<h1>Vietnam's Awared Online Library Platform</h1>
						<h2>Find your next life-changing book with us</h2>
						<Link to="features">
							<button className="btn">Browse Books</button>
						</Link>
					</div>
					<figure className="header__img--wrapper">
						<img src={HeaderImage} alt="" />
					</figure>
				</div>
			</header>
		</section>
	)
}

export default Landing
