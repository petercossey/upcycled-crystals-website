module.exports = {
  siteMetadata: {
    title: `Upcycled Crystal Inventory`,
    description: `Inventory browser for upcycled crystal products.`,
    author: `@petercossey`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Upcycled Crystal Inventory`,
        short_name: `Upcycled Crystals`,
        start_url: `/`,
        background_color: `#FF00FF`,
        theme_color: `#FF00FF`,
        display: `minimal-ui`,
        icon: `src/images/crystal-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-csv`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
