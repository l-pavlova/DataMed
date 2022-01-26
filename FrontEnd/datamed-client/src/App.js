import Register from './views/signin/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';


import PatientProfile from './views/patientProfile/PatientProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<Home />}></Route>
        <Route exact path="/register" element={<Register />} />
        <Route path="/patient" element={<PatientProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
