import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from './utils/API';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';


class App extends React.Component {
    state = {
        user: "",
        email: "",
    }

    componentDidMount() {
        this.setState({
            user: sessionStorage.getItem("user"),
            email: sessionStorage.getItem("email")
        });
    }

    logout = () => {
        if (sessionStorage.getItem("email")) {
            API.logUser(sessionStorage.getItem("email"), false)
                .catch(err => {
                    console.log(err)
                })
            sessionStorage.clear();

            this.setState({
                user: "",
                email: "",
            });
        }
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar user={this.state.user} logout={this.logout}/>
                    <Route path="/" render={props => <Login {...props}
                        getUser={(user, email) => {
                            sessionStorage.setItem('user', user);
                            sessionStorage.setItem('email', email);
                            this.setState({
                                user: user,
                                email: email,
                            });
                        }}
                    />} exact={true} />
                    <Route path="/signup" component={Signup} exact={true} />
                    <Route path="/chat" render={props => <Chat {...props} user={this.state.user} email={this.state.email} />} exact={true} />
                </Router>
            </div>
        );
    }
}

export default App;
