import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './NavPagesLink.scss'

const NavPagesLink = ({url, name}) => (
  <li>
    <Link to={url} activeClassName="activeLink">{name}</Link>
  </li>
)

NavPagesLink.propTypes = {
  url: PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
}

export default NavPagesLink
