import React, { useState } from 'react'

const CreateTodo = ({setAllTodo, allTodo, text, settext}) => {
   

    let formsubmit = (e)=>{
        e.preventDefault();
        console.log({text})

        if (text.trim() !== "") {


            let newTodo ={
                id:Date.now(),
                text:text.trim(),
            }
            
            setAllTodo([...allTodo, newTodo])
            settext("")
        }else{
            alert("please enter todo")
        }
      
       

        
       
    }
    // console.log(allTodo);
  return (
    <div>
        <form onSubmit={formsubmit}>
            <input type="text" placeholder='enter todo' value={text} onChange={(e)=>settext(e.target.value)}/>
            <button type='Submit'>create</button>
        </form>
    </div>
  )
}

export default CreateTodo
