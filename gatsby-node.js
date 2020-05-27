const path = require('path')
const _ = require("lodash")

module.exports.onCreateNode = ({node, actions}) => {
  const {createNodeField} = actions
  if(node.internal.type === 'MarkdownRemark'){
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`src/templates/blog.js`);
  const tagTemplate = path.resolve(`src/templates/tags.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;
    // Creates blog posts
    posts.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.fields.slug}`,
        component: postTemplate,
        context: { slug: node.fields.slug }, // additional data can be passed via context
      });
    });

    // create Tags pages
    // pulled directly from https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);
    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      });
    });

    /// blog BlogList
    // const postsPerPage = 2;
    // const numPages = Math.ceil(posts.length / postsPerPage);
    //
    // Array.from({ length: numPages }).forEach((_, i) => {
    //   createPage({
    //     path: i === 0 ? `/` : `/${i + 1}`,
    //     component: path.resolve("./src/pages/blog.js"),
    //     context: {      limit: postsPerPage,      skip: i * postsPerPage,      numPages,      currentPage: i + 1    }  });
    //   });
    //

  });
};
