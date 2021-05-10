import React from 'react';
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from  './Components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import {UserStorage} from './UserContext'


const App =() => {
  return (
    <div> 
      <BrowserRouter>
        <UserStorage> 
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login/*' element={<Login/>} />
            </Routes>
          <Footer/> 
        </UserStorage>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
