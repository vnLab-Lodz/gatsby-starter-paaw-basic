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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
              disableBgImageOnAlpha: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/../src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `publication`,
        path: `${__dirname}/../publication`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Default vnLab Publication-as-a-Website starter`,
        short_name: `vnLab starter`,
        description: `A simple starter for PaaW projects.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        orientation: `portrait`,
        icon: `${__dirname}/../src/images/vnLab-maskable.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`],
        workboxConfig: {
          globPatterns: [`**/icons/*`],
        },
      },
    },
  ],
} as GatsbyConfig
