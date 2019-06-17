/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/MyWebsite",
  siteMetadata: {
    title: 'Penny Xu',
    author: 'Penny Xu'
  },

  plugins: [

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-141814063-1",
        head: true,
      },
    },

    'gatsby-plugin-sass',
    {
      resolve:'gatsby-source-filesystem',
      options:{
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
            'gatsby-remark-relative-images',
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false
              }
            },
            {
              resolve: `gatsby-remark-katex`,
              options: {
                strict: `ignore`
              }
            }
          ]
      }
    }
  ]
}
