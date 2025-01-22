import React from 'react'
import Context from './Context'
import Child from './Child'

const Parents = () => {
  return (
    <div>
        parents
      <Context>
        <Child />
      </Context>
    </div>
  )
}

export default Parents
