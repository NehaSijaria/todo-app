import React from 'react';

// destructring props
export default function TodoItem({singleTodo, deleteMe}) {
  // console.log(todo); // getting first todo obj from Todo comp
  return (
    <div className='container'>
      
      <h4 className='tex-center my-3'>{singleTodo.title}</h4>
      <p>{singleTodo.desc}</p>
      {/* <button className='btn btn-danger' onClick={deleteMe(singleTodo)}>Delete Me</button> */}
      {/* when I click button Run a function to delete todo 
      Fn firing automatically without clicking button if we pass argument like this, if no arg passed it will run only on click*/}
      {/* fun() == calling fn; fn == passing fn */}
      {/* so if we wana pass parametr to fn , calling fn() gives you errorwe need to make it arrow fn and call fn as callback, ** fn automatically called on rendering, while making arrow fn calling this Fn by refrence not */}
      {/* on Click is passing while deleteme() is calling */}
      {/* when u pass arrow fn, deleteme called but not directly */}
      <button className='btn btn-danger' onClick={() => deleteMe(singleTodo)}>Delete Me</button>
    </div>
  )
}
