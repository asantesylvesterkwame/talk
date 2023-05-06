import { useState } from 'react';
import './App.css';
import SignIn from './pages/SignIn/SignIn';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import { Auth, Provider } from '../src/firebase-config';


function App() {


  return (
      <Routes>
        <Route path='/' element={<SignIn/>}/>
      </Routes>
      

    
    
  )
}

export default App
