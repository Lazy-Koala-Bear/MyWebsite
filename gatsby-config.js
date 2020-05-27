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

    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `pennyxu`
      }
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
    },
    {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./src/favicon.png",

      // WebApp Manifest Configuration
      appName: null, // Inferred with your package.json
      appDescription: null,
      developerName: null,
      developerURL: null,
      dir: 'auto',
      lang: 'en-US',
      background: '#fff',
      theme_color: '#fff',
      display: 'standalone',
      orientation: 'any',
      start_url: '/?homescreen=1',
      version: '1.0',

      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        yandex: false,
        windows: false
      }
    }
  }
  ]
}
