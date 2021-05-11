import React from 'react';
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from  './Components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import {UserStorage} from './UserContext'
import User from './Components/User/User'


const App =() => {
  return (
    <div> 
      <BrowserRouter>
        <UserStorage> 
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='login/*' element={<Login/>} />
              <Route path='conta/*' element={<User/>} />
            </Routes>
          <Footer/> 
        </UserStorage>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
