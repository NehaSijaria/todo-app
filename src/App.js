import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Footer from './components/Footer';
import { useState } from 'react';
import AddTodo from './components/AddTodo';

// import Example from './components/Example';

function App() {

  // setTodos is to update todo 
//passing todo argument(Actual val)to deleteMe Fn in TodoItem
const deleteTodo = (ekTodo) => {
  console.log('I am running on Deletion of todo', ekTodo)
  setmyTodos(myTodos.filter((eachTodo)=>{
    console.log('eachTodo=',eachTodo);
    return eachTodo!==ekTodo;
  }))
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
}

  const [myTodos, setmyTodos] = useState([
    {
      id:1,
      title:'Shopping',
      desc:'Job 1: Shop Groceries'
    },
    {
      id:2,
      title:'Cleaning',
      desc:'Job 2: Clean up the Room'
    },
    {
      id:3,
      title:'Tracking',
      desc:'Job 3: Rracking up the parcels'
    }
  ])



  
  return (
    <div>
      {/* sending boolean to child comp */}
      {/* <Navbar title="TodoApps" searchBar={false}/> */}
      <Navbar title="TodoApps" number={1} />
      {/* passing todos from parent to child Todo comp */}
      {/* addTodo function is sending to AddTodo Comp */}
      <AddTodo addTodo={addTodo}/>
      <Todos allTodos={myTodos} onDelete={deleteTodo}/>
      <Footer />
      {/* <Example title="Mytitleshow" status={true} num={5}/> */}
    </div>
  );
}

export default App;
