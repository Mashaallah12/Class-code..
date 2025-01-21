import React from 'react'
import Child from './Child';
import { createContext } from 'react';
//!step 1;
export let MyContext = createContext()
const Context = () => {
    // console.log(MyContext);
    
    let users = [
        {
            id: 1,
            username:"jhone"
        },
        {
            id:2,
            username:"bocci"
        },
        {
            id:3,
            username:"xyz"
        }
    ];
  return (
   
      <MyContext.Provider value={users}>
        <Child />
      </MyContext.Provider>
   
  )
}

export default Context
