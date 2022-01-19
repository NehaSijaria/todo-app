import React, { useState } from "react";

export default function AddTodo(props) {
  // empty title and desc
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = () => {

  }
  return (
    <div className="container my-3">
      <h3> Add Todo</h3>
      {/* call this button - onSubmit */}
      <form onSubmit={submit}> 
        <div className="mb-3">
          <label htmlFor="title">Todo Title</label>
          <input
            type="text"
            value={title}
            onChange={e=> setTitle(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Todo Title"
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="desc">Todo Description</label>
          <input
            type="text"
            value={desc} onChange={e=> setDesc(e.target.value)}
            className="form-control"
            id="desc"
            placeholder="description"
          />
        </div>
        
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
}
