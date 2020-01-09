import React from 'react';
import './style.css';

class Chat extends React.Component {
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
                                        <li class="collection-item transparent"><h6>Ed</h6> hehehe</li>
                                        <li class="collection-item transparent"><h6>Bob</h6> okay then</li>
                                        <li class="collection-item transparent"><h6>Ed</h6> I am good yayayayaaayayayaaya</li>
                                        <li class="collection-item transparent"><h6>Bob</h6> Hello how are you?</li>
                                    </ul>
                                </div>
                                <div id="feedback"></div>
                            </div>
                            <form id="chatin">
                                <div className="input-field col m10">
                                    <i className="material-icons prefix">chat_bubble_outline</i>
                                    <textarea id="chatarea" className="materialize-textarea"></textarea>
                                    <label for="chatarea">Enter message to chat..</label>
                                </div>
                                <button id="chatbtn" className="btn waves-effect waves-light col m2" type="submit" name="action">Send
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
