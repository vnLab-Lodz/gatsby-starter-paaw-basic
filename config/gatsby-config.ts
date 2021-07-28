import { GatsbyConfig } from "gatsby"

export default {
  siteMetadata: {
    title: `Basic Publication-as-a-Website Starter`,
    description: `Kick off your next PaaW project with this basic starter.`,
    author: `@vnLab1`,
    siteUrl: `http://vnlab.filmschool.lodz.pl/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/../src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
} as GatsbyConfig
