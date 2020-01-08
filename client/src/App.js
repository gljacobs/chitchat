import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import io from 'socket.io-client';

import Wrapper from "./components/Wrapper";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';

var socket;
if(window.location.pathname === "/chat") {
  socket = io('http://localhost:3001/chat', { transports: ['websocket'] });
}
else if(window.location.pathname !== "/chat") {
  localStorage.clear();
}

class App extends React.Component {
  state = {
    user: "",
  }

  componentDidMount() {
    this.setState({user: localStorage.getItem("user")});
  }

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} />
        <Router>
          <Wrapper>
            <Route path="/" component={props => <Login {...props} 
              getUser={(user) => { 
                this.setState({user: user}); 
                localStorage.setItem('user', this.state.user);
              }} 
            />} exact={true} />
            <Route path="/signup" component={Signup} exact={true} />
            <Route path="/chat" component={props => <Chat {...props} user={this.state.user} />} exact={true} />
          </Wrapper>
        </Router>
      </div>
    );
  }
}

export default App;
