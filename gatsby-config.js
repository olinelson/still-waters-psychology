const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Still Waters Psychology',
    // siteURL: 'https://olinelson.github.io',
    siteURL: 'http://stillwaterspsychology.com.au/',
  },
  // pathPrefix: '/still-waters-psychology',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`),
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
