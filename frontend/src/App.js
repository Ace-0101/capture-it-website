// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Photo from './components/photoStyle'
import HomePage from './components/HomePage'
import Nature from "./components/Nature";
import Animals from "./components/Animals";
import AnimalPage from "./components/AnimalPage";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

 
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/'>
          < Photo />
          </Route>
          <Route path='/home'>
            <HomePage />
          </Route>


          <Route path='/animals'>
         <AnimalPage />
         </Route>
        </Switch>
      )}
    </>
  );
}

export default App;