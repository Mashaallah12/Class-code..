import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from './Parents2'

const Child2 = () => {
    let val = useContext(GlobalContext);
    console.log(val)
  return (
    <div>
     
    </div>
  )
}

export default Child2
