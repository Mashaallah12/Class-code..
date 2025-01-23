import React from 'react'
import Child2 from './Child2'
import Hoc from './Hoc';
const Child1 = (x) => {
    console.log(x);
    
  return (
    <div>
        <h1>child1</h1>
      <Child2 />
    </div>
  )
}

export default Hoc(Child1)
