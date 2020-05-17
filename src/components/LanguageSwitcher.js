import React from 'react'
import { Link } from 'gatsby'

import languages from '../data/languages'

import './LanguageSwitcher.scss'

const LanguageSwitcher = ({ slug }) => {
  const componentStyle = 'LanguageSwitcher'
  let activeLanguage = slug.startsWith('/de/') ? 'de' : 'en'
  let url = slug.startsWith('/de/')
    ? slug.replace('/de/', '/')
    : slug.replace('/', '/de/')
  return (
    <div className={componentStyle}>
      {languages.langs.map(item => (
        <Link
          className={`${componentStyle}-item${
            activeLanguage === item[0] ? '-active' : ''
          }`}
          to={url}
        >
          {item[0]}
        </Link>
      ))}
    </div>
  )
}

export default LanguageSwitcher
