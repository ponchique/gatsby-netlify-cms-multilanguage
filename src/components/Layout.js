import React from 'react'

import '../shared/styles/normalize.css'
import './Layout.scss'

const Layout = props => (
  <div className="Layout" id="outer-container">
    <main id="page-wrap">{props.children}</main>
  </div>
)

export default Layout
