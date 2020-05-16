import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import { Link } from 'gatsby'

import Markdownify from '../components/Markdownify'

import './BlogPost.scss'

const Author = ({ name, className }) => {
  const autors = [
    {
      name: 'Hesler',
      pic: '',
      sign: 'Creating awesome content for Bitwala',
    }
  ]

  const Avatar = autors.map(author =>
    name.endsWith(author.name) ? (
      <div className={className + '-author'} key={author.name}>
        <img className={className + '-pic'} src={author.pic} />
        <div className={className + '-name-sign'}>
          <span className={className + '-name'}>{name || 'Author'}</span>
          <span className={className + '-sign'}>{author.sign}</span>
        </div>
      </div>
    ) : (
      ''
    )
  )
  return Avatar
}

const BlogPost = ({
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
          <h1 className={componentName + '-title'}>
            {title}
          </h1>
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
          <Markdownify source={body} className="body-content" />
          <Author name={author} className={componentName} />
        </div>
      </div>
    </div>
  )
}

export default BlogPost
