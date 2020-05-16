import React from 'react'
import { Link } from 'gatsby'

import languages from '../data/languages'

import './LanguageSwitcher.scss'

const LanguageSwitcher = ({ slug, disabled, theme }) => {
  const componentStyle = 'language-switcher'
  const disabledSwitcher = disabled ? 'disabled' : ''
  let url = slug
  let activeLanguage
  if (slug.startsWith('/de/')) {
    url = disabled ? null : slug.replace('/de/', '/')
    activeLanguage = 'en'
  } else {
    url = disabled ? null : slug.replace('/', '/de/')
    activeLanguage = 'de'
  }
  return (
    <div
      className={componentStyle + ' ' + activeLanguage + ' ' + disabledSwitcher}
    >
      {languages.langs.map(item => (
        <div key={item} className={componentStyle + '-items'}>
          <Link to={url}>{item}</Link>
        </div>
      ))}
    </div>
  )
}

export default LanguageSwitcher
