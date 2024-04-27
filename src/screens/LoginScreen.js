import React from 'react';
import './LoginScreen.css';
import { useState } from 'react';
import SignUpScreeen from './SignUpScreeen';

function LoginScreen() {
  const[signIn, setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
      <div className='loginScreen_background'>
      <img
        className="loginScreen_logo"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt=""
        />
        <button  onClick={()=> setSignIn(true)}
        className='loginScreen_button'
        > Sign in </button>  

        <div className='loginScreen_gradient'> </div>

        <div className='loginScreen_body'>
        {signIn ?(
          <SignUpScreeen/>)
          :(
            <div>
             <h1>Unlimited movies, TV shows, and more</h1>

         <h2>Watch anywhere. Cancel anytime.</h2>

         <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

         <div className='loginScreen_input'>
          <form>
            <input type='email' placeholder='Email Address'></input>
            <button className='loginScreen_getStarted'>GET STARTED</button>
          </form> 
          </div>       


            </div>
           

          )}
         
         

         </div>

     </div>

     

    </div>
  )
}

export default LoginScreen