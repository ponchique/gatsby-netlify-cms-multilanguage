import React from 'react'
import Markdown from 'react-markdown'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const IndexPage = ({ data }) => {
  const { slug: slug } = data.page.fields
  const { frontmatter: page } = data.page
  const { frontmatter: content } = data.content
  return (
    <Layout>
      <Navbar lang={content.language} slug={slug} light enableLangSwitcher />
      <div className="content">
        <h1>{content.description}</h1>
        <div className="html">
          <Markdown source={data.page.html} escapeHtml={false} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query IndexById($id: String!, $language: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      html
      frontmatter {
        language
      }
    }
    content: markdownRemark(
      frontmatter: {
        type: { eq: 1 }
        templateKey: { eq: "templates/index" }
        language: { eq: $language }
      }
    ) {
      frontmatter {
        language
        title
        description
      }
    }
  }
`
