import React from 'react'
import TodoItem from './TodoItem'

export default function Todo(props) {
  console.log('myTodosProps--', props.allTodos)//getting all todos
  return (
    <div className="container">
      <h3>Todos List</h3>  
      {/* sendng first todo */}
      {/* <TodoItem todo={props.allTodos[1]}/>  */}
      {props.allTodos.map((todo) => {
        console.log('Log todo--', todo);
        // return <h1>{todo.title}</h1> if u wana return something here
        return <TodoItem singleTodo={todo} deleteMe={props.onDelete} />
           //if u have more than 1 element to return
          // return (
          //   <>
          //   <h5>Show List of work</h5>
          //   <TodoItem singleTodo={todo} />
          //   </>
          // )
        }
      )}
    </div>
  )
}
