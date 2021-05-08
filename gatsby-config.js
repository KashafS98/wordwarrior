module.exports = {
  siteMetadata: {
    title: "wordwarrior's",
    siteUrl: "https://wordwarrior.netlify.app/",
    description: "Kashaf S, a Full Stack Developer and Creator"
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    }, 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WordWarrior`,
        short_name: `WW`,
        start_url: `/`,
        icon: `src/images/favicon.png`, 
      },
    },   
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-plugin-netlify',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
