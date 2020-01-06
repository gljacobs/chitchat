import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";

import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Wrapper>
          <Route path="/" component={Login} exact={true}/>
          <Route path="/signup" component={Signup} exact={true}/>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
