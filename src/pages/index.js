import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {

	return(

		<div>
			<Layout>
				<h1> Hello. </h1>
				<h2> I'm Penny and I'm a moch </h2>
				<p> Want to contact me? <Link to="/contact"> contact</Link> </p>
			</Layout>
		</div>
	)
}

export default IndexPage
