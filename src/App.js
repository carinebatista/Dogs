import React from 'react';
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from  './Components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login';


const App =() => {
  return (
    <div> 
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
        <Footer/> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
