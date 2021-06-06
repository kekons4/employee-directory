import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/pages/Search/Search';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Search/>
      {/* <Route exact path='/search' component={Search}/> */}
    </Router>
  );
}

export default App;
