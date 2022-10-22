import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faBars,
	faShoppingCart,
	faTimes,
} from "@fortawesome/free-solid-svg-icons"
import Logo from "../assets/logo.png"

function Nav({ cart, cartNumber }) {
	function openMenu() {
		document.body.classList.add("menu--open")
	}
	function closeMenu() {
		document.body.classList.remove("menu--open")
	}
	return (
		<nav>
			<div className="nav__container">
				<Link to="/">
					<img src={Logo} alt="Logo" className="logo" />
				</Link>
				<ul className="nav__links">
					<li className="nav__list">
						<Link to="/" className="nav__link">
							Home
						</Link>
					</li>
					<li className="nav__list">
						<Link to="/books" className="nav__link">
							Books
						</Link>
					</li>
					<button className="btn__menu">
						<FontAwesomeIcon icon={faBars} onClick={openMenu} />
					</button>
					<li className="nav__icon">
						<Link to="/cart" className="nav__link">
							<FontAwesomeIcon icon={faShoppingCart} />
						</Link>
						{cartNumber > 0 && (
							<span className="cart__length">{cartNumber}</span>
						)}
					</li>
				</ul>
				<div className="menu__backdrop">
					<button className="btn__menu btn__menu--close" onClick={closeMenu}>
						<FontAwesomeIcon icon={faTimes} />
					</button>
					<ul className="menu__links">
						<li className="menu__list">
							<Link to="/" className="menu__link">
								Home
							</Link>
						</li>
						<li className="menu__list">
							<Link to="/books" className="menu__link">
								Books
							</Link>
						</li>
						<li className="menu__list">
							<Link to="/cart" className="menu__link">
								Cart
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Nav
