import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt, faBookOpen, faTags } from "@fortawesome/free-solid-svg-icons"
import Highlight from "./UI/Highlight"

function Highlights() {
	return (
		<section id="highlights">
			<div className="container">
				<div className="row">
					<h2 className="section__title text-highlight">Why Choose Us?</h2>

					<div className="highlight__wrapper">
						<Highlight
							icon={<FontAwesomeIcon icon={faBolt} />}
							title="Easy & Quick"
							description="Get access to purchased book online with ease and instantly."
						/>
						<Highlight
							icon={<FontAwesomeIcon icon={faBookOpen} />}
							title="1000+ Books"
							description="Browse our massive constant updated library single-click."
						/>
						<Highlight
							icon={<FontAwesomeIcon icon={faTags} />}
							title="Affortdable"
							description="We got deals and sales frequently, our price is competitive."
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Highlights
