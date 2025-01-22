import React, { createContext } from 'react'
export let GlobalData = createContext();
const Context = ({children}) => { //!destructure
    // console.log(x); //{childern:{$$typeof:.....}}

    let str = "hello world"
  return (
    <div>
      <GlobalData.Provider value={str}>
        {/* <child /> */}
        {children} 
      </GlobalData.Provider>
    </div>
  )
}

export default Context
