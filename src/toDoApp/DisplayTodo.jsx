import React from 'react'
import './display.css'
const DisplayTodo = ({allTodo, setAllTodo, settext}) => {
  function deleteTodo(id ) {
    console.log(id);
    let filterdtodo = allTodo.filter((ele)=>{
      return ele.id != id;
    })
    setAllTodo(filterdtodo)

    
  }
  function editTodo(id) {
    console.log(id, "edit it")
    
    let filterdtodo = allTodo.filter((ele)=>{
      return ele.id != id;
    })
    setAllTodo(filterdtodo)

    let val = allTodo.find((ele)=>{
      return ele.id == id;
    })
    console.log(val)
    settext(val.text)
    
  }
  return (
    <div>
      <section>
        {
            allTodo.map((ele)=>{
                return <div key={ele.id}>
                    {ele.text}
                    <button className='btn' onClick={()=>editTodo(ele.id)}>edit</button>
                    <button className='btn' onClick={()=>deleteTodo(ele.id)}>delete</button>
                </div>
            })
        }
      </section>
    </div>
  )
}

export default DisplayTodo
