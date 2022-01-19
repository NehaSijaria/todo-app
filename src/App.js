import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Footer from './components/Footer';
// import Example from './components/Example';

function App() {

  const deleteTodo = () => {
    console.log('I am running on Deletion')
  }
  
  const myTodos =[
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
      {/* passing todos from parent to child Todo comp */}
      <Todos allTodos={myTodos} onDelete={deleteTodo}/>
      <Footer />
      {/* <Example title="Mytitleshow" status={true} num={5}/> */}
    </div>
  );
}

export default App;
