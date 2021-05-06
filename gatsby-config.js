module.exports = {
  siteMetadata: {
    title: `CSS GENERATOR`,
    description: `CSS GENERATOR`,
    author: `Marek Foltański`,
    siteURL: `https://cssgenerator.pl`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
       resolve: "gatsby-plugin-google-tagmanager",
       options: {
         id: "GTM-NJQQ785",
         includeInDevelopment: false,
       },
     },
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
        name: `Cssgenerator.pl`,
        short_name: `CSS GENERATOR`,
        start_url: `/`,
        background_color: `#1f2024`,
        theme_color: `#1f2024`,
        display: `minimal-ui`,
        icon: `src/images/css-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-google-fonts-v2`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto Mono:wght@400;700`,
    //       }
    //     ]
    //   }
    // },
    `gatsby-plugin-preload-fonts`,
  ],
}
