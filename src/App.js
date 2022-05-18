
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import {BrowserRouter as Router} from 'react-router-dom'
import NavUpButton from './components/NavUpButton';

function App() {
  return (
    <>
    <Router>
    <div className="font-poppins bg-black text-white">
      <Header/>
      <Search/>
      <NavUpButton/>

    </div>
    </Router>
    </>
  );
}

export default App;
