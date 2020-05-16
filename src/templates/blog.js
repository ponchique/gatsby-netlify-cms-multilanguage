import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { Navbar } from '../components/Navbar'

const Blog = ({ data }) => {
  const { slug: slug } = data.page.fields
  const { frontmatter: page } = data.page
  const { edges: blogs } = data.blogs

  // todo: create a JournalBody
  return (
    <Layout>
      <Navbar lang={page.language} slug={slug} enableLangSwitcher />
      {/* <BlogBody {...page} blogs={blogs} /> */}
      
    </Layout>
  )
}

export default Blog

export const blogPageQuery = graphql`
  query BlogPageByID($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        language
      }
    }
    blogs: allMarkdownRemark(
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
