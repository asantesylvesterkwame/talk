import { useState } from 'react';
import './App.css';
import SignIn from './pages/SignIn/SignIn';
import { Link, Router } from 'react-router-dom';
import { Auth, Provider } from '../src/firebase-config';


function App() {


  return (
    <>
      <Link to={"/"}><SignIn/></Link>
    </>
    
    
  )
}

export default App
