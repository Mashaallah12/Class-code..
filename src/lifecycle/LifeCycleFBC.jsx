import React, { useEffect, useState } from 'react'

const LifeCycleFBC = () => {

    let [count, setCount] = useState({value:0})
    useEffect(()=>{
        console.log("Mounting phase");
        return () =>{ //cleaning - function 
            console.log("unmounting phase");
            
        }
        
    }, [])
    useEffect(()=>{
        console.log("updateing phase");
        
    }, [count])
    // useEffect(()=>{
    //     return () =>{ //cleaning - function 
    //         console.log("unmounting phase");
            
    //     }
    // }, [])

  return (
    <div>
      <h1>LIFE-CYCLE IN FBC</h1>
      <h2>Counter{count.value}</h2>
      <button onClick={()=> setCount({value:count.value +1})}>increment</button>
    </div>
  )
}

export default LifeCycleFBC
