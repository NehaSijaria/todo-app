import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Footer from './components/Footer';
import { useState } from 'react';
import AddTodo from './components/AddTodo';

// import Example from './components/Example';

function App() {
  let initTodo;
  if(localStorage.getItem("myTodos") === null){
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem(myTodos))
  }
  // setTodos is to update todo 
//passing todo argument(Actual val)to deleteMe Fn in TodoItem
const deleteTodo = (ekTodo) => {
  console.log('I am running on Deletion of todo', ekTodo)
  setmyTodos(myTodos.filter((eachTodo)=>{
    console.log('eachTodo=',eachTodo);
    return eachTodo!==ekTodo;
  }))
  localStorage.getItem("myTodos",JSON.stringify(myTodos))
}

//Adding Todo :
const addTodo = (title, desc) => {
  console.log('adding task list', title,desc);
  // let sno = myTodos[myTodos.length-1].sno +1;
  const nowAddTodo = {
    // sno: sno,
    title: title,
    desc: desc
  }
  // add my new todo to the list
  setmyTodos([...myTodos, nowAddTodo])
  console.log(nowAddTodo)

  //if no items in local storage, then set them
  if(localStorage.getItem("myTodos")){
    localStorage.setItem("myTodos", JSON.stringify(myTodos))
  }

}

//1.delete all prev todos, so we can store all them in local storage
  const [myTodos, setmyTodos] = useState(initTodo)

  return (
    <div>
      {/* sending boolean to child comp */}
      {/* <Navbar title="TodoApps" searchBar={false}/> */}
      <Navbar title="TodoApps" number={1} />
      {/* passing todos from parent to child Todo comp */}
      {/* addTodo function is sending to AddTodo Comp */}
      <AddTodo addTodo={addTodo}/>
      <Todos allTodos={myTodos} onDelete={deleteTodo}/>
      {/* <Footer /> */}
      {/* <Example title="Mytitleshow" status={true} num={5}/> */}
    </div>
  );
}

export default App;
