import React from 'react';
import io from 'socket.io-client';
import './style.css';

var socket;
if(window.location.pathname === "/chat") {
  socket = io('http://localhost:3001/chat', { transports: ['websocket'] });
}


class Chat extends React.Component {
    state = {
        msg: "",
        chat: []
    }

    handleChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }

    handleChat = (event) => {
        event.preventDefault();
        if (this.state.msg) {
            // socket.emit("chat", {
            //     msg: this.state.msg,
            //     user: this.props.user,
            // });
            this.setState({
                chat: [this.state.msg, ...this.state.chat],
                msg: ""
            })
        }
    }

    render() {
        return (
            <div id="chat-page">
                <ul id="nav-mobile" className="sidenav sidenav-fixed">
                    <li><div className="user-view">
                        <div className="background">
                        </div>
                        <a href="#user"></a>
                        <a href="#name"><span className="white-text name">John Doe</span></a>
                        <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
                <div id="chat" className="row container">
                    <div id="chatbox" className="col s12 m8">
                        <div id="chat-content">
                            <h4>ChatRoom</h4>
                            <div id="chatout">
                                <div id="output">
                                    <ul class="collection">
                                        {
                                            this.state.chat.map((msg) => {
                                                return(<li class="collection-item transparent"><h6>{this.props.user}</h6>{msg}</li>)
                                            })
                                        }
                                    </ul>
                                </div>
                                <div id="feedback"></div>
                            </div>
                            <form id="chatin">
                                <div className="input-field col m10">
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
