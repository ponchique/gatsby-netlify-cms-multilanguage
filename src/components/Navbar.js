import React from 'react'
import { Link } from 'gatsby'

import staticData from '../data/navbar'
import LanguageSwitcher from '../components/LanguageSwitcher'

const Navbar = props => {
  const componentStyle = 'Navbar'
  const filteredData = staticData.filter(data => data.lang === props.lang)[0]

  return (
      <aside className={componentStyle}>
        <nav className="nav">
          <div className="logo">
            <Link
              to={staticData.filter(data => data.lang === props.lang)[0].path}
            >
              <img className="logo" src={''} alt="RobCo Industries" />
            </Link>
          </div>

          <div className="navbar-end">
            <div className="site-nav">
              {filteredData.nav.map(item => (
                <Link
                  className={componentStyle + '-desktop-nav'}
                  key={item.title}
                  to={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </div>
              <LanguageSwitcher slug={props.slug} />
          </div>
        </nav>
      </aside>
  )
}

export default Navbar
