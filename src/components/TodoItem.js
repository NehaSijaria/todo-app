import React from 'react';


export default function TodoItem({todo}) {
  // console.log(todo); // getting first todo obj from Todo comp
  return (
    <div className='container'>
      
      <h4 className='tex-center my-3'>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-danger'>Click Me</button>
    </div>
  )
}
