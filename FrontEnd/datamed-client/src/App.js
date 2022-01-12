import logo from './logo.svg';
import Register from './views/signin/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/signin/Home';

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/reg" element={<Register/>}/>
      </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;