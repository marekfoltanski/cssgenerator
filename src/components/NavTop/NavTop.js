import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import './NavTop.scss'

const openFn = () => {
  document.querySelector('.navPages').classList.toggle('open')
  document.querySelector('.hamburger').classList.toggle('open')
}

const NavTop = ({isHome}) => (
  <div className="container-fluid navTop">
    <div className="row">
      <div className="navTop__wrapper">
          <div className="navTop__logo">
            <Link to="/"><strong><span className="color1">CSS</span> GENERATOR</strong></Link>
          </div>
          {!isHome && <button type="button" name="hamburger" aria-label="Hamburger menu" className="hamburger" onClick={openFn}><span></span></button>}
      </div>
    </div>
  </div>
)

NavTop.propTypes = {
  isHome: PropTypes.bool,
}

NavTop.defaultProps = {
  isHome: false,
}

export default NavTop
