import './App.css';
import Navbar from './components/Navbar';
import TodoItems from './components/TodoItem';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* sending boolean to child comp */}
      {/* <Navbar title="TodoApps" searchBar={false}/> */}
      <Navbar title="TodoApps" number={1} />
      <TodoItems />
      <Footer />
    </div>
  );
}

export default App;
