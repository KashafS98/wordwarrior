module.exports = {
  siteMetadata: {
    title: "wordwarrior's",
    siteUrl: "https://wordwarrior.netlify.app/"
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
    'gatsby-plugin-netlify'
  ],
};
