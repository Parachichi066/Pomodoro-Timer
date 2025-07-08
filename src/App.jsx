import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Timer from './pages/timer';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path='/timer' element={<Timer />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;