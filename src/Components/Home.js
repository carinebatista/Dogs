import React from 'react'
import Feed from './Feed/Feed'
import Head from './Helper/Head'

 const Home = () => {
	return (
		<section className="container mainContainer">
			<Head title="Fotos" description="Home do Site Dogs, com feed de Fotos"/> 
			<Feed/>
		</section>
	)
}

export default Home