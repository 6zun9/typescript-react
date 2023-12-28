import React from 'react'
import PropTypes from 'prop-types'

interface GreeterProps  {
  person: string
}

function Greeter({person}:GreeterProps): JSX.Element {
  return (
    <div>Hello!! {person}</div>
  )
}

Greeter.propTypes = {}

export default Greeter;
