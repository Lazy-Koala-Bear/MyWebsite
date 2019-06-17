import React from 'react'
import Layout from '../components/layout'
import cat from "./cat.gif"
const IndexPage = () => {

	return(

		<div>
			<Layout>
				<h1> Hello. </h1>
				<h2> Welcome to a basic website from a basic developer. </h2>
				<img src={cat} alt="Logo" />
			</Layout>
		</div>
	)
}

export default IndexPage
