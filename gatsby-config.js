module.exports = {
  siteMetadata: {
    title: `jordank.co`,
    description: `jordank.co`,
    author: `@j0rnado`,
    siteUrl: `https://jordank.co.`,
    defaultImage: `src/images/jor-icon.png`,
    defaultDescription: `jordan köerner | sales architect`,
    twitterUsername: `@j0rnado`,
    
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
        name: `jordank.co`,
        short_name: `jordank.co`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `minimal-ui`,
        icon: `src/images/jor-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Poppins",
              variants: ["400", "700"],
              fontDisplay: 'block',
            },
            {
              family: "Open Sans",
              variants: ["400", "700"],
              fontDisplay: 'block',
            },
          ],
        },
      },
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
          // Setting this parameter is optional
          anonymize: true
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    // end
  ],
}
