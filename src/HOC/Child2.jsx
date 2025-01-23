import React from 'react'
import Hoc from './Hoc';
const Child2 = (x) => {
    console.log(x);
    
  return (
    <div>
      <h1>child2</h1>
    </div>
  )
}

export default Hoc(Child2)
