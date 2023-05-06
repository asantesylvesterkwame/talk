import { useState } from 'react';
import './App.css';
import SignIn from './pages/SignIn/SignIn';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import { Auth, Provider } from '../src/firebase-config';
import Chatpage from './pages/chat/Chatpage';


function App() {


  return (
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/chat' element={<Chatpage/>}/>

        
      </Routes>
      

    
    
  )
}

export default App
