import React from 'react'
import { Link } from 'gatsby'

import languages from '../data/languages'

import './LanguageSwitcher.scss'

const LanguageSwitcher = ({ slug, disabled }) => {
  const componentStyle = 'LanguageSwitcher'
  let url = slug
  let activeLanguage = slug.startsWith('/de/') ? 'de' : 'en'

  return (
    <div className={componentStyle}>
      {languages.langs.map(item => (

        <Link
          className={`${componentStyle}-item${
            activeLanguage === item[0] ? '-active' : ''
          }`}
          to={item[1]}
        >
          {item[0]}
        </Link>
  ))}
    </div>
  )
  
  
}

export default LanguageSwitcher
