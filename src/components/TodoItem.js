import React from 'react';

// destructring props
export default function TodoItem({singleTodo, deleteMe}) {
  // console.log(todo); // getting first todo obj from Todo comp
  return (
    <div className='container'>
      
      <h4 className='tex-center my-3'>{singleTodo.title}</h4>
      <p>{singleTodo.desc}</p>
      <button className='btn btn-danger' onClick={deleteMe(singleTodo)}>Delete Me</button>
      {/* when I click button Run a function to delete todo 
      Fn hiring automatically without clicking button if we pass argument like this, if no arg passed it will run onlly on click*/}
    </div>
  )
}
