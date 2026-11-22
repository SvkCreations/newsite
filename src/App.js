import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './components/Search';
import Login from './components/Login';
import { useState } from 'react';
import  Navbar  from './components/Navbar';
import Sidebar from './components/Sidebar';
import News from './components/News';
import "animate.css/animate.compat.css"



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/newsite" element={
            <div>
              <Sidebar />
              <div className="main-content">
                <Navbar/>
                <div className="container-fluid p-4">
                  <News />
                </div>

              </div>
            </div>
          } />
          <Route path="newsite/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
