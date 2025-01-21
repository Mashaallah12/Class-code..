import React from 'react'
import { createContext } from 'react'
import Child1 from './Child1';

export let GlobalContext = createContext();
const Parents2 = () => {
    let data = 'hello universe'
  return (
    <div>
      <GlobalContext.Provider value={data}>
        <Child1 />
      </GlobalContext.Provider>
    </div>
  )
}

export default Parents2
