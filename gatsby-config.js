const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Still Waters Psychology',
    // siteURL: 'https://olinelson.github.io',
    siteURL: 'https://stillwaterspsychology.com.au'
  },
  // pathPrefix: '/still-waters-psychology',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`
      }
    }
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `markDown`,
    //     path: `${__dirname}/src/markDown`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
  ]
}
