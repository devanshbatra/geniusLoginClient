import React, {useState} from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";


const App = () => {
  const [token, setToken] = useState("");
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path= "/" exact> <Dashboard token = {token} /> </Route>
          <Route path= "/login" component={Login}/>
          <Route path= "/register" component={Register}/>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;