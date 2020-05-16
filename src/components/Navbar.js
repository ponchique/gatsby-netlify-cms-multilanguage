import React from 'react'
import { Link } from 'gatsby'

import staticData from '../data/navbar'
import LanguageSwitcher from './LanguageSwitcher'

import './Navbar.scss'

const Navbar = props => {
  const componentStyle = 'Navbar'
  const filteredData = staticData.filter(data => data.lang === props.lang)[0]
  return (
    <aside className={componentStyle}>
      <Link to={staticData.filter(data => data.lang === props.lang)[0].path}>
        <p className="logo">{filteredData.logo}</p>
      </Link>

      <div className={`${componentStyle}-nav`}>
        {filteredData.nav.map(item => (
          <Link key={item.title} to={item.href}>
            {item.title}
          </Link>
        ))}
      </div>

      <LanguageSwitcher slug={props.slug} />
    </aside>
  )
}

export default Navbar
