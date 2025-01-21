import React, { useState } from 'react'
import CreateTodo from './CreateTodo'
import DisplayTodo from './DisplayTodo'

const TodoWrapper = () => {
   let [text, settext] = useState ('')
    let [allTodo, setAllTodo] = useState([{id:1, text:"hello"}])
  return (
    <div>
      <CreateTodo allTodo={allTodo} setAllTodo={setAllTodo} text={text} settext={settext}/>
      <DisplayTodo allTodo={allTodo} setAllTodo={setAllTodo} settext={settext}/>
    </div>
  )
}

export default TodoWrapper
