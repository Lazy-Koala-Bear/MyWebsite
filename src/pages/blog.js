import React from 'react'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery} from 'gatsby'
import blogStyles from './blog.module.scss'

const BlogPage = () => {

	const data = useStaticQuery(graphql`
		query{
			allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ){
				edges{
					node{
			 			frontmatter{
							title
							date
						}
						fields{
							slug
						}
					}
				}

			}
		}
 `)

	return(
		//code
		<div>
			<Layout>
				<h1> Blog </h1>
				<ol className= {blogStyles.posts}>
						{data.allMarkdownRemark.edges.map((edge) => {
							return(
								<li className={blogStyles.post}>
									<Link to={`/blog/${edge.node.fields.slug}`} >
									<h2> {edge.node.frontmatter.title} <level>{edge.node.frontmatter.category}</level> </h2>
									<p>{edge.node.frontmatter.date}</p>
									</Link>
								</li>
							)
						})}
				</ol>
			<Link className= {blogStyles.tag} to="/tags">All Tags</Link>
			</Layout>
		</div>

	)
}

export default BlogPage
