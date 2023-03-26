import React from 'react';
import "./SignInStyle.scss";
import chatIcon from "./chat.png";
import { Auth, Provider } from '../../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

const SignIn = () => {

    const signIn = () =>{
        signInWithPopup(Auth, Provider)
        .then(res => Navigate("/chat"))
        .catch(err=>console.log(err))
    }

  return (
    <div className="signInCard">
        <div >
            <img className="messageIcon" src={chatIcon} alt="" />
        </div>
        <div className="welcomeMessage">
            <h1>Welcome To Job Chat</h1>
        </div>
        <div className="googleSignInButton">
            <button type="submit" className='googleSignIn' onClick={signIn()}>
                SIGN IN WITH GOOGLE
            </button>
        </div>
    </div>
  )
}

export default SignIn