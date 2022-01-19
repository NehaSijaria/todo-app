import React from 'react';


export default function TodoItem({singleTodo}) {
  // console.log(todo); // getting first todo obj from Todo comp
  return (
    <div className='container'>
      
      <h4 className='tex-center my-3'>{singleTodo.title}</h4>
      <p>{singleTodo.desc}</p>
      <button className='btn btn-danger'>Click Me</button>
    </div>
  )
}
