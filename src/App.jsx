import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Timer from './pages/timer';
import Navbar from './components/navBar';


function App() {
  return (
    <>
      <Router>
        <div className='min-h-screen'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Timer />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;