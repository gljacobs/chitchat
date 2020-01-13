import React from 'react';
import io from 'socket.io-client';
import './style.css';
import API from '../../utils/API';

var socket;

class Chat extends React.Component {

    state = {
        user: "",
        msg: "",
        chat: [],
        users: [],
        email: "",
        logged: false,
    }

    componentDidMount() {
        var userArr = [];
        API.getUsers().then((users) => {
            users.map((user) => {
                userArr.push(user.name)
            })
        })

        var chatArr = [];
        API.getChat().then((users) => {
            users.map((user) => {
                chatArr.unshift({ 
                    user: user.name, 
                    msg: user.message,
                })
            })
        })        
        
        this.setState({ users: userArr, chat: chatArr });

        socket = io('http://localhost:3001');

        socket.on("chat", (data) => {
            this.setState({ chat: [{ user: data.user, msg: data.msg }, ...this.state.chat], msg: "" });
            //feedback.html("");
        });
        socket.on("logout", (data) => {
            this.setState({
                users: this.state.users.filter(user => {
                    return user !== data.user
                })
            })
        })
        socket.on("login", (data) => {
            this.setState({
                user: data.user,
                users: [data.user, ...this.state.users.filter(user => {
                    return user !== data.user
                })],
                logged: true,
                email: data.email
            });
            API.logUser(data.email, true)
                .catch(err => {
                    console.log(err)
                })
        })
    }

    componentDidUpdate() {
        if (!this.state.logged) {
            socket.emit("login", {
                user: this.props.user,
                email: this.props.email,
            });
        }
    }

    handleLogout = () => {
        socket.emit("logout", {
            user: this.state.user,
        });
    }

    handleChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }

    handleChat = (event) => {
        event.preventDefault();
        if (this.state.msg) {
            API.createChat(this.state.user, this.state.msg)
                .catch(err => {
                    console.log(err)
                })
                .then(() => {
                    socket.emit("chat", {
                        msg: this.state.msg,
                        user: this.state.user,
                    });
                });

        }
    }

    render() {
        return (
            <div id="chat-page">
                <ul id="nav-mobile" className="sidenav sidenav-fixed">
                    <li><div className="user-view">
                        <div className="background">
                        </div>
                        <a href="#"></a>
                        <a href="#"><span className="white-text name">John Doe</span></a>
                    </div></li>
                    Who's Online..
                    <li><div className="divider"></div></li>
                    {
                        this.state.users.map((user) => {
                            return (
                                <div>
                                    <li><a href="#"><i className="material-icons">person</i>{user}</a></li>
                                    <li><div className="divider"></div></li>
                                </div>
                            )
                        })
                    }
                </ul>
                <div id="chat" className="row container">
                    <div id="chatbox" className="col s12 m8">
                        <div id="chat-content">
                            <h4>ChatRoom</h4>
                            <div id="chatout">
                                <div id="output">
                                    <ul className="collection">
                                        {
                                            this.state.chat.map((chatIn) => {
                                                return (<li className="collection-item transparent"><h6>{chatIn.user}</h6>{chatIn.msg}</li>)
                                            })
                                        }
                                    </ul>
                                </div>
                                <div id="feedback"></div>
                            </div>
                            <form id="chatin" autoComplete="off">
                                <div className="input-field col m10 s8">
                                    <i className="material-icons prefix">chat_bubble_outline</i>
                                    <input id="chatarea" type="text" className="validate" name="msg" value={this.state.msg} onChange={this.handleChange}></input>
                                    <label htmlFor="chatarea">Enter message to chat..</label>
                                </div>
                                <button id="chatbtn" className="btn waves-effect waves-light col m2" type="submit" name="action" onClick={this.handleChat}>Send
                                        <i className="material-icons right">send</i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat;
