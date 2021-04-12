import React from 'react';
import HomeNavItem from './HomeNavItem/HomeNavItem'
import pages from '../../../data/pages'
import './HomeNav.scss';

const HomeNav = () => (
  <nav className="homeNav">
    <ul>
    {pages.map(item => (
      <HomeNavItem key={item.name} {...item}/>
    ))}

    </ul>
  </nav>
)

export default HomeNav
