import React from 'react'
import _ from 'lodash'

import './Note.scss'

const Note = ({
  title,
  headerImage,
  imageAlt,
  date,
  author,
  body,
  language,
}) => {
  const componentName = 'bitwala-post'
  const blogPath = language === 'de' ? '/de/blog/' : '/blog/'
  return (
    <div className={componentName}>
      <div className={componentName + '-container'}>
        <div className={componentName + '-details'}>
          <h1 className={componentName + '-title'}>{title}</h1>
          <div className={componentName + '-tag-data-box'}>
            {/* {tags ? (
              <Link to={`${blogPath}${_.kebabCase(tags)}/`}>
                <Tag tag={tags} />
              </Link>
            ) : (
              ''
            )} */}

            {date ? (
              <span className={componentName + '-date'}>
                {moment(date, 'YYYY-MM-DD').format('MMM Do YY')}
              </span>
            ) : (
              ''
            )}
          </div>
        </div>

        <div className={componentName + '-image'}>
          <img src={headerImage} alt={imageAlt} />
        </div>

        <div className={componentName + '-content'}>
          <Author name={author} className={componentName} />
        </div>
      </div>
    </div>
  )
}

export default BlogPost
