const path = require('path')
const _ = require('lodash')
const slugHandler = require('./src/api/slugHandler')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { type: { ne: 1 } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              language
              title
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    // this is where pages are being built
    posts.forEach(edge => {
      const id = edge.node.id
      const language = edge.node.frontmatter.language
      const templateKey = edge.node.frontmatter.templateKey
      const slug = slugHandler(
        language,
        templateKey,
        edge.node.frontmatter.slug
      )
      createPage({
        path: slug,
        component: path.resolve(`src/${String(templateKey)}.js`),
        context: {
          id,
          language,
          templateKey,
          slug,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (!!node.frontmatter && !!node.frontmatter.slug) {
    createNodeField({
      node,
      name: `slug`,
      value: slugHandler(
        node.frontmatter.language,
        node.frontmatter.templateKey,
        node.frontmatter.slug
      ),
    })
  }
}
