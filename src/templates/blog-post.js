import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { Navbar } from '../components/Navbar'
import BlogPost from '../components/BlogPost'

const BlogPostPage = ({ data }) => {
  const { slug: slug } = data.markdownRemark.fields
  const { frontmatter: blog } = data.markdownRemark
  return (
    <Layout>
      <Navbar
        lang={blog.language}
        slug={slug}
        enableLangSwitcher={blog.enableLangSwitcher}
      />
      <BlogPost {...blog} slug={slug} body={data.markdownRemark.html} />
    </Layout>
  )
}

export default BlogPostPage

export const blogQuery = graphql`
  query BlogPostblogByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        language
        enableLangSwitcher
      }
    }
  }
`
