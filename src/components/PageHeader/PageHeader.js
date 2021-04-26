import React from 'react'
import PropTypes from 'prop-types'
import NavTop from '../NavTop/NavTop'

import './PageHeader.scss'

const PageHeader = ({h1, desc}) => (
  <header className="PageHeader">
    <NavTop />
    <div className="container-fluid">
      <div className="row">
        <div className="PageHeader__content">
          <h1>{h1}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  </header>
)

PageHeader.propTypes = {
  h1: PropTypes.string,
  desc: PropTypes.string,
}

PageHeader.defaultProps = {
  h1: "Heading...",
  desc: "Description...",
}

export default PageHeader
