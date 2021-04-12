import React from 'react'
import { Link } from 'gatsby'
import './NavPagesLink.scss'

const NavPagesLink = ({url, name}) => (
  <li>
    <Link to={url} activeClassName="activeLink">{name}</Link>
  </li>
)

export default NavPagesLink
