import React from 'react'

export default function Todo(props) {
  
  return (
    <div className='container'>
      <h3>Todos List</h3>       
      {props.myTodos}
    </div>
  )
}
