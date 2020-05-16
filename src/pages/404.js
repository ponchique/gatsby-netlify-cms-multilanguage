import React from 'react'
import Layout from '../components/Layout'
import { Navbar } from '../components/Navbar'
import './404.scss'

const NotFoundPage = () => {
  return (
    <Layout>
      <Navbar lang="en" slug="/404/" />
      This is 404 page
    </Layout>
  )
}

export default NotFoundPage
