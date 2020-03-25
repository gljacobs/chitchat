import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import API from '../../utils/API';

class Login extends React.Component {

    state = {
        email: "",
        password: "",
    }

    componentDidMount() {
        sessionStorage.clear();
    }

    handleChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }

    handleLogin = (event) => {
        event.preventDefault();
        API.getUser(this.state.email, this.state.password)
            .then((user) => {
                this.props.getUser(user[0].name, user[0].email)
            })
            .then(() => {
                this.props.history.push("/chat");
            })
            .catch(err => {
                console.log(err)
                alert("Invalid email or password...");
                this.setState({ password: "" })
            })
            
    }

    render() {
        return (
            <div id="logcard" className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Login Here</span>
                            <div className="row">
                                <form id="login" className="col s12 ">
                                    <div className="row">
                                        <div className="input-field col s8 offset-s2">
                                            <input id="namein" type="email" className="validate" name="email" value={this.state.email} onChange={this.handleChange} />
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
                                <Link to="/signup">Don't have an account? Sign up here</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Login;