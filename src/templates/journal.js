import React from 'react'
import Markdown from 'react-markdown'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const JournalPage = ({ data }) => {
  const { slug: slug } = data.page.fields
  const { frontmatter: page } = data.page
  const { edges: blogs } = data.blogs
  return (
    <Layout>
      <Navbar lang={page.language} slug={slug} enableLangSwitcher />
      <div className="content">
        <h1>{page.title}</h1>
      </div>

      {blogs.map(post => (
        <Link to={post.node.fields.slug}>
          <div className="note">
s            <h3>{post.node.frontmatter.title}</h3>

            <div className="html">
              <Markdown source={post.node.excerpt} escapeHtml={false} />
            </div>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default JournalPage

export const journalPageQuery = graphql`
  query journalById($id: String!, $language: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        language
        title
      }
    }
    blogs: allMarkdownRemark(
      filter: {
        frontmatter: {
          contentType: { eq: "note" }
          language: { eq: $language }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 80)
          fields {
            slug
          }
          frontmatter {
            language
            title
          }
        }
      }
    }
  }
`
