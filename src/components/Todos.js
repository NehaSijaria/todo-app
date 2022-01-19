import React from 'react'
import TodoItem from './TodoItem'

export default function Todo(props) {
  console.log('myTodosProps--', props.allTodos)//getting all todos
  return (
    <div className="container">
      <h3>Todos List</h3>  
      {/* sendng first todo */}
      {/* <TodoItem todo={props.allTodos[1]}/>  */}
      {/* when u render array in UI using map fn : unique key is reqd: warning: Each child in a list should have a unique "key" prop. */}
      {/* when all todo get deleted what to render */}
      {/* {props.allTodos.length===0? "Np todod left" :  */}
      {props.allTodos.map((todo) => {
        console.log('Log todo--', todo);
        // return <h1>{todo.title}</h1> if u wana return something here
        return <TodoItem key={todo.id} singleTodo={todo} deleteMe={props.onDelete} />
           //if u have more than 1 element to return
          // return (//   <>
          //   <h5>Show List of work</h5>
          //   <TodoItem singleTodo={todo} />
          //   </>
          // )  
        }
      )
      }
      {/* } */}
    </div>
  )
}
