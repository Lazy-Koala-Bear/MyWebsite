import React from "react"
import PropTypes from "prop-types"
import blogStyles from '../pages/blog.module.scss'
import Layout from '../components/layout'

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <div>
      <Layout>
      <h1>{tagHeader}</h1>
      <ul className= {blogStyles.posts}>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title, date} = node.frontmatter
          return (
            <li className={blogStyles.post} key={slug}>
              <Link to={`/blog/${slug}`}> <h2>{title}</h2> <p> {date} </p> </Link>
            </li>
          )
        })}
      </ul>

      {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
      <Link className= {blogStyles.tag} to="/tags">All Tags</Link>
      </Layout>
    </div>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
