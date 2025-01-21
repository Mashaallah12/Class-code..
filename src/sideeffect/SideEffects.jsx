import React, { useEffect, useState } from 'react'

const SideEffects = () => {

    
        let [apiData, setApiData] = useState ([])

        async function callApi() {
            let resp = await fetch ("https://api.github.com/users")
            let data =await resp.json()
            console.log(data)
            setApiData(data)
        }

        useEffect(()=>{
            callApi();
        }, [])
    
  return (
    <div>
      <h1>API CALL USING USEEFFECT</h1>
      {
      apiData.map((ele)=>{
        return(
            <section key={ele.id}>
                <img src={ele.avatar_url} height={100} width={100}  />
                <h3>{ele.login}</h3>
            </section>)
        
      })
      }
    </div>
  )
}

export default SideEffects
