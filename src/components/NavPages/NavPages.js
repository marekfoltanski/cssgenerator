import React from 'react'
import NavPagesLink from './NavPagesLink'
import pages from '../../data/pages'
import './NavPages.scss'

const NavPages = () => (
  <section className="navPages">
    <div className="d-md-none logo"><strong>GENERATOR <span className="color2">CSS</span></strong></div>
    <nav>
      <ul>
        {pages.map(item => (
          <NavPagesLink key={item.name} {...item}/>
        ))}
      </ul>
    </nav>
  </section>
)

export default NavPages
