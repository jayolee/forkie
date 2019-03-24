import React, { Component } from 'react';
import fork from './images/fork.svg'

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 0,
        }
        this.arrow = [ <path d = "M0 5 L10 10 L20 5" />,  <path d = "M0 10 L10 5 L20 10" />];
     }

  render() {
    return (
      <div className = "mainmenu">
        <div className = "topbar">
          <div className = "name">Message</div>
        </div>
        <div className = "msgbtns">
            <div className = "msgbtn on">Recieved</div>
            <div className = "msgbtn">Sent</div>
          </div>
       <div className ="feedCard">
        <div className ="profilePic" style={{alignSelf: "flex-start"}}/>
        <div className = "Messages">
          <div className = "sent recieve">
           Me, Annette
            <svg width = "20" height = "20">
                {this.arrow[0]}
            </svg>
          </div>
          <div className = "message">
          This is awesome 🍅🌶
          </div>
          <div className = "open_recipe">
            <div className = "thumbnail" />
            <div>
              <div className = "title">Kate's super chilli</div>
              <div className = "description">This recipe is...</div>
            </div>
          </div>
          
        </div>
        <div className = "comments">
            <div className = "convo mine">
            Looks good!
            </div>
            <div className = "other">
                <div className = "profile" />
                <div className= "msg">
                Nice!
                </div>
            </div>
            <div className = "other">
                <div className = "profile" />
                <div className= "msg">
                Glad that you like it.
                </div>
            </div>
            <div className = "input">
            <input id="inputbox" type = "text" autoFocus placeholder = "Type message" />
            <div className = "sendbtn">
                    <svg width="20" height="20">
                        <path d="M12 2 L18 10 L12 18" />
                        <path d="M2 10 L18 10" />
                    </svg>
                </div>
            </div>
          </div>
       </div>


        <div className ="feedCard">
        <div className ="profilePic" />
        <div className = "Messages">
          <div className = "sent recieve">
           Me
           <svg width = "20" height = "20">
           {this.arrow[1]}
           </svg>
          </div>
          <div className = "message">
          Try this 🥞
          </div>
          <div className = "recipe">
          souffle pancake
          </div>
        </div>
       </div>
      </div>
    );
  }
}

export default Message;
