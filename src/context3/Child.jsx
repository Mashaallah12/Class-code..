import React, { useContext } from 'react'
import { GlobalData } from './Context'

const Child = () => {
    let val = useContext(GlobalData);
    console.log(val)
  return (
    <div>
      child 1
    </div>
  )
}

export default Child
