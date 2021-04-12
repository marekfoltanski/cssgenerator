import React from 'react';
import './HeaderHome.scss';
import NavTop from '../NavTop/NavTop';
import HeaderHomeContent from './HeaderHomeContent/HeaderHomeContent';

const HeaderHome = () => (
  <header className="headerHome">
    <NavTop isHome={true} />
    <HeaderHomeContent />
  </header>
)

export default HeaderHome
