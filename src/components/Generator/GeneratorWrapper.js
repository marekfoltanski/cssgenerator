import React from 'react'
import PropTypes from "prop-types"
import './Generator.scss'

const GeneratorWrapper = ({children, additionalClass}) => (
        <section className={["generator", additionalClass].join(" ")}>
          <div className="container-fluid">
            {children}
          </div>
        </section>
)
GeneratorWrapper.propTypes = {
  additionalClass: PropTypes.string,
}
GeneratorWrapper.defaultProps = {
  additionalClass: null,
}

export default GeneratorWrapper
