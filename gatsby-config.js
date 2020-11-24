module.exports = {
  siteMetadata: {
    title: `Susanna Zanatta - Digital Developer`,
    description: `Portfolio showcasing my work`,
    headerTitleSm: 'SZ',
    headerTitle: 'Susanna Zanatta',
    headerDescription: 'Digital Developer',
    author: `Susanna Zanatta`,
    menuLinks: [
      {
        name: `Work`,
        link: `/work`,
      },
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Contact`,
        link: `/contact`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-css-customs`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-v2-plugin-page-transitions',
      options: {
        transitionTime: 500
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Playfair Display`,
            variants: [`400`, `700`]
          },
          {
            family: `Raleway`,
            subsets: [`latin`]
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
