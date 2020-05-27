import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'
import tagStyles from '../styles/tags.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags} from '@fortawesome/free-solid-svg-icons'
import { Disqus} from 'gatsby-plugin-disqus'

import { kebabCase } from 'lodash';


import "katex/dist/katex.min.css"

export const query = graphql`

	query($slug: String!){

		markdownRemark(fields:{slug: {eq: $slug}}){

			frontmatter{
				title
				date
				tags
			}
			html
		}

	}
`

const Blog = (props) => {
	return(
		<>
		<Layout>
			<h1>{props.data.markdownRemark.frontmatter.title}</h1>
			<p>{props.data.markdownRemark.frontmatter.date}</p>
			<nav>
			<ul className={tagStyles.navList}>
				<p className={tagStyles.tag}> <FontAwesomeIcon icon={faTags} size="xs" /> Tags: </p>
			  {props.data.markdownRemark.frontmatter.tags.map(tag => (

			    <li key={tag + `tag`}>
			      <Link className={tagStyles.navItem} activeClassName={tagStyles.activeNavItem} to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>

			    </li>
			  ))}
			</ul>
			</nav>
			<hr></hr>
			<div dangerouslySetInnerHTML = {{ __html: props.data.markdownRemark.html }}></div>
			<hr></hr>
			<Disqus/>
		</Layout>

		</>
	)
}

export default Blog
