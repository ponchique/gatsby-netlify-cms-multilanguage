import React from 'react'
import Markdown from 'react-markdown'

import './Markdownify.scss'

const Markdownify = props => {
  const { source, style } = props
  const { reverse } = style ? style : ''
  const componentName = 'markdownify'
  const order = reverse ? reverse : ''
  return (
    <div className={componentName + ' ' + order}>
      <Markdown source={source} escapeHtml={false} />
    </div>
  )
}

export default Markdownify
