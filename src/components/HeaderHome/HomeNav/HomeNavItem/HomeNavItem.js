import React from 'react';
import { Link } from 'gatsby';
import './HomeNavItem.scss';

const HomeNavItem = ({name, url}) => (
  <li><Link to={url}>{name}</Link></li>
)

export default HomeNavItem
