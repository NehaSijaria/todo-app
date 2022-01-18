import React from 'react'
// import TodoItem from './TodoItem'

export default function Todo(props) {
  console.log('props--', props.myTodos)
  return (
    <div className='container'>
      <h3>Todos List</h3>  
      {/* {props.myTodos} */}
      {/* <TodoItem singleTodo={props.myTodos}/> */}
    </div>
  )
}
