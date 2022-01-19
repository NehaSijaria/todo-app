import React, { useState } from "react";

export default function AddTodo(props) {
  // empty title and desc
  const [title, settitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = () => {

  }
  return (
    <div className="container my-3">
      <h3> Add Todo</h3>
      {/* call this button - onSubmit */}
      <form>
        <div className="mb-3">
          <label for="title">Todo Title</label>
          <input
            type="text"
            value={title}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Todo Title"
          />
          
        </div>
        <div className="mb-3">
          <label for="desc">Todo Description</label>
          <input
            type="text"
            value={desc}
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
