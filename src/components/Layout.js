import React from 'react'

import '../shared/styles/normalize.css'

const Layout = props => (
  <div id="outer-container">
    <main id="page-wrap">{props.children}</main>
  </div>
)

export default Layout
