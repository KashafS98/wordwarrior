// const path = require('path');

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const blogPostTemplate = path.resolve('src/templates/blog.js');

//   return graphql(`
//   {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             title
//             description
//             date
//           }
//           html
//         }
//       }
//     }
//   }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors);
//     }

//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//         createPage({
//           path: `blog/${node.frontmatter.title}`,
//           component: blogPostTemplate,
//           context: {
//             id:node.frontmatter.title
//           }, // additional data can be passed via context
//         })
//       })
//   });
// };