import React from 'react'

export default function Navbar(props) {
  // const { title, status } = props;
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a class="navbar-brand" href="#">{props.title}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>  
    </ul>
    {/* 1st way */}
    {/* js inside {}, if searchBar is true show form else show "No SearchBar" using ternary operator */}
    {/* {
      props.searchBar? 
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> 
      : "No searchBar" 
    } */}
    {/* 2nd way- execute second function only when left side is true */}
    {
      props.searchBar && <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> 
    }
  </div>
</div>
</nav>
      
    
  )
}
