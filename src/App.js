  
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Chat from "./Chat"
import Sidebar from "./Sidebar"

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (    
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ) : (
          <>
        
     <Header/>
     <div className="app__body">
      <Sidebar/>
      <Switch>
        <Route path="/room/:roomId">
          <Chat/>
         
        </Route>
        <Route path="/">
         
        </Route>
          
      </Switch>   
     {/* react-router -> chat screen*/}
     </div>
     </>
     )}
     </Router>     
    </div>
  );
}

export default App;