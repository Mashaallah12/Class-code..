import React, { useContext } from 'react'
import { MyContext } from './Context'

const Child = () => {
  let val =  useContext(MyContext)
  console.log(val)
  return (
    <div>
      <h3>child</h3>
    </div>
  )
}

export default Child
