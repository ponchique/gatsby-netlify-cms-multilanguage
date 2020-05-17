import React from 'react'
import Markdown from 'react-markdown'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const NotePage = ({ data }) => {
  const { slug: slug } = data.markdownRemark.fields
  const { frontmatter: note } = data.markdownRemark
  return (
    <Layout>
      <Navbar lang={note.language} slug={slug} />
      <div className="note">
        <h3>{note.title}</h3>
        <div className="html">
          <Markdown source={data.markdownRemark.html} escapeHtml={false} />
        </div>
      </div>
    </Layout>
  )
}

export default NotePage

export const noteQuery = graphql`
  query noteById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        language
        date
      }
    }
  }
`
