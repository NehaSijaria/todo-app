// import './App.css';
import Navbar from './components/Navbar';
import TodoItems from './components/TodoItems';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar title="MyTodoApp" status="In-progress"/>
      <TodoItems />
      <Footer />
    </div>
  );
}

export default App;
