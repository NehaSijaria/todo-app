import React from 'react'
import TodoItem from './TodoItem'

export default function Todo(props) {
  console.log('myTodosProps--', props.myTodos)//getting all todos
  return (
    <div className="container">
      <h3>Todos List</h3>  
      {/* sendng first todo */}
      <TodoItem todo={props.myTodos[1]}/>
    </div>
  )
}
