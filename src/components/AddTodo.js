import React from "react";

export default function AddTodo() {
  return (
    <div className="container my-3">
      <h3> Add Todo</h3>
      <form>
        <div className="mb-3">
          <label for="title">Todo Title</label>
          <input
            type="text"
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
