import './App.css';
import Navbar from './components/Navbar';
import TodoItems from './components/TodoItems';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* sending boolean to child comp */}
      <Navbar title={true} searchBar={false}/>
      <TodoItems />
      <Footer />
    </div>
  );
}

export default App;
