import React from 'react'
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

export default PageHeader
