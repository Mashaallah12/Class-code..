import React from 'react'

const Hoc = (WrappedComp) => {
    let data = "hello child2"
  return () =>{
    return <WrappedComp data = {data} />
  }
}

export default Hoc
