import logo from './logo.svg';
import './App.css';
import Mainpage from './pages/Main/mainpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './pages/Header/header';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>  
        <Routes>
          <Route path="/" Component={Mainpage}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
