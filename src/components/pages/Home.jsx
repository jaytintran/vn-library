import React from "react"
import Highlights from "../Highlights"
import Featured from "../Featured"
import Discounted from "../Discounted"
import Explore from "../Explore"
import Landing from "../Landing"

function Home() {
	return (
		<>
			<Landing />
			<Highlights />
			<Featured />
			<Discounted />
			<Explore />
		</>
	)
}

export default Home
