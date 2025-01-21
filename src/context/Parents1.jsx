import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import Child from './Child'
import Context from './Context'

const Parents1 = () => {
  return (
    <div>
       <Context />
      <Child1 />
      <Child2 />
      {/* <Child /> */}
    </div>
  )
}

export default Parents1
