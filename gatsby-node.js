/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)


/**
 * Projects
 */

// Markdown items: Create slug and collection nodes based on folder
exports.onCreateNode = ({ node, getNode, actions }) => {
    if (node.internal.type === `MarkdownRemark` || node.internal.type === `AllMarkdownRemark` ) {
        const slug = createFilePath({ node, getNode, basePath: `content` })

        actions.createNodeField({
            node,
            name: `slug`,
            value: `/projects${slug}`,
        })
    }
}

// Generate pages for each project.

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    // Query all the data
    const queryResult = await graphql(`
    {
      postQuery: allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___sort] }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
    if (queryResult.errors) {
        reporter.panic("error loading events", queryResult.errors)
        return
    }

    // Generate single project pages
    const posts = queryResult.data.postQuery.edges
    posts.forEach(post => {
        createPage({
            path: post.node.fields.slug,
            component: path.resolve(`./src/templates/project.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: post.node.fields.slug,
            },
        })
    })
}
