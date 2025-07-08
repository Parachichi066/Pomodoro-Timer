import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Timer from './pages/timer';
import Navbar from './components/navBar';


function App() {
  return (
    <>
      <Router>
        <div className='min-h-screen'>
          <Navbar />
          <Routes>
            <Route path = "/" element={<Home />}/>
            <Route path='/timer' element={<Timer />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;