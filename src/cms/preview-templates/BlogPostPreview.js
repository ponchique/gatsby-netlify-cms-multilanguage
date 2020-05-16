import React from 'react'
import PropTypes from 'prop-types'
import BlogPost from '../../components/BlogPost'

const BlogPostPreview = ({ entry }) => {
  const data = entry.get('data').toJS()
  return (
    <div className="cms-device-box">
      <div className="cms-device-box-border">
        <BlogPost {...data} />
      </div>
    </div>
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default BlogPostPreview
