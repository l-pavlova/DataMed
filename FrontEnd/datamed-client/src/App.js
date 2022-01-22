import logo from './logo.svg';
import Register from './views/signin/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import NavBar from './views/navigation/NavBar';
import Layout from './views/layout/layout';
import PatientProfile from './views/patientProfile/PatientProfile';
import DocViewer from './views/fileUpload/DocViewer';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route path="/patient" element={<PatientProfile/>}/>
        <Route path="/document" element={<DocViewer/>}/>
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
