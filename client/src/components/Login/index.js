import React from 'react';
import './style.css';
// import testdata from '../../testdata.json'
import API from '../../utils/API';

class Login extends React.Component {
    state = {
        user: "",
        userIn: "",
        password: "",
    }
    componentDidMount() {
        // API.createUser("Gabe Jaco", "gj@gmail.com", "password");
        // API.createUser("Mariah Jaco", "mj@gmail.com", "password");
    }

    handleChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }

    handleLogin = (event) => {
        event.preventDefault();
        API.getUsers()
            .then(testdata =>
                testdata.map((user) => {
                    console.log(user);
                    
                    if (user.email === this.state.userIn && user.password === this.state.password) {
                        alert("Hello " + user.name + "!")
                    }
                })
            ).catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div id="logcard" className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Login Here</span>
                            <div className="row">
                                <form id="login" className="col s12 ">
                                    <div className="row">
                                        <div className="input-field col s8 offset-s2">
                                            <input id="namein" type="text" className="validate" name="userIn" value={this.state.userIn} onChange={this.handleChange} />
                                            <label htmlFor="namein">Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s8 offset-s2">
                                            <input id="password" type="password" className="validate" name="password" value={this.state.password} onChange={this.handleChange} />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className="btn waves-effect waves-light col s4 offset-s4" type="submit" name="action" onClick={this.handleLogin}>Login
                                        <i className="material-icons right">send</i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-action">
                                <a href="#">Don't have an account? Sign up here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Login;