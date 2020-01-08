import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import io from 'socket.io-client';

import Wrapper from "./components/Wrapper";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';

var socket;
if (window.location.pathname === "/chat") {
  socket = io('http://localhost:3001/chat', { transports: ['websocket'] });
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Wrapper>
          <Route path="/" component={Login} exact={true}/>
          <Route path="/signup" component={Signup} exact={true}/>
          <Route path="/chat" component={Chat} exact={true}/>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
