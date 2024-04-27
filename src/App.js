import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Homescreen from './screens/Homescreen.js'
import LoginScreen from './screens/LoginScreen';
import {auth} from './firebase'
import { useDispatch, useSelector } from "react-redux";
import {login, logout, selectUser} from './features/userSlice'  ;
import ProfileScreen from "./screens/ProfileScreen";

// import Header from './Header';

function App() {

  
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged (userAuth => {
    if (userAuth) {
    // Logged in 
    dispatch(
      login({
        uid: userAuth.uid,
        email: userAuth.email,
      })
    );
     
    } else {
    // Logged out
    dispatch(logout());
    }
    });

    return unsubscribe;     
    }, [dispatch]); 




  return (
 

    
<div className="app"> 
     

     <Router>
      {!user ? (

      <LoginScreen/>
      ): (
      <Routes> 
      <Route path='/profile' element={<ProfileScreen/>}></Route>
       <Route exact path="/" element={<Homescreen/>}>
         
        </Route>
      </Routes>
      )}
     

</Router> 
   </div>
 
  );
}

export default App;
