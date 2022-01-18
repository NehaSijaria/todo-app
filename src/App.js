import './App.css';
import Navbar from './components/Navbar';
import TodoItems from './components/TodoItem';
import Footer from './components/Footer';

function App() {
  const allTodos =[
    {
      id:1,
      title:'Shopping',
      desc:'Job 1: Shop Groceries'
    },
    {
      id:2,
      title:'Cleaning',
      desc:'Job 2: Clean up the Room'
    }
  ]
  return (
    <div>
      {/* sending boolean to child comp */}
      {/* <Navbar title="TodoApps" searchBar={false}/> */}
      <Navbar title="TodoApps" number={1} />
      {/* passing todos from parent */}
      <TodoItems myTodos={allTodos}/>
      <Footer />
    </div>
  );
}

export default App;
