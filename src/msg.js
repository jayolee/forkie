import React, { Component } from 'react';
import fork from './images/fork.svg'
import publics from './images/everyone.svg'
import profile from './images/profile1.jpg'
import profile2 from './images/profile2.jpg'
import profile3 from './images/profile3.jpg'
import profile4 from './images/profile4.jpg'
import profile5 from './images/profile5.jpg'

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 0,
          comment: 1,
          arrow: 1,
          openRecipe :0,
          openRecipeOp: 1,
          msglist: [],
          msgrnum : 0,
        }
        this.display = ["flex", "none"]
        this.arrow = [ <path d = "M0 5 L10 10 L20 5" />,  <path d = "M0 10 L10 5 L20 10" />];
     }
     appendMsg() {
      let inputbox = document.getElementById("inputbox");
      if(inputbox.value){
      let msglist = this.state.msglist;
      msglist.push( <span key={"msgr" + this.state.msgrnum}>
      {inputbox.value}
  </span>);
        this.setState({msglist: msglist, msgrnum: this.state.msgrnum + 1});
        inputbox.value = '';
    }
  }
  openRecipe(){
      this.setState({openRecipe: 0});
      setTimeout(function () {this.setState({ openRecipeOp: 1})}.bind(this), 10);
    }
    getmsglist(){
      let returnmsg = [];
      for(let i = 0; i<this.state.msgrnum; i++){
        returnmsg.push(<div className = "convo mine">{this.state.msglist[i]}</div>);
      }
      return returnmsg;
    }
  generatingComment(){

    if(this.state.comment === 1){
      return <div className = "comments">
      <div id = "msglist" style={{display:"flex", flexDirection:"column"}} key ="msglist">
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
      {this.getmsglist()}
      </div>
      <div className = "input">
      <input id="inputbox" type = "text" autoFocus placeholder = "Type message"  onKeyPress={(ev) => {
                    if(ev.key === "Enter"){this.appendMsg()}}}/>
      <div className = "sendbtn">
              <svg width="20" height="20">
                  <path d="M12 2 L18 10 L12 18" />
                  <path d="M2 10 L18 10" />
              </svg>
          </div>
      </div>
    </div>
    }
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
        <div className ="profilePic" style={{alignSelf: "flex-start"}}>
          <img src= {profile3} />
        </div>
        <div className = "Messages">
          <div className = "sent recieve">
           Me, Neha
           <div className = "time">4d</div>
          </div>
          <div className = "message">
          This is Korean version 🍅🌶
          </div>
          <div className = "open_recipe">
            <div className = "thumbnail" />
            <div>
              <div className = "title"> June's special chicken curry</div>
              <div className = "description">This recipe is...</div>
            </div>
          </div>
        </div>
        <div className = "commentNum">
            Comments (3)
          
            <svg width = "20" height = "20" onClick={(ev) => this.setState({comment: Math.abs(this.state.comment -1), arrow: Math.abs(this.state.arrow -1), openRecipeOp: Math.abs(this.state.openRecipeOp -1), openRecipe: Math.abs(this.state.openRecipe -1)})}>
                {this.arrow[this.state.arrow]}
            </svg>
          </div>
        {this.generatingComment()}
       </div>


        <div className ="feedCard">
        <div className ="profilePic" >
          <img src= {profile4} />
        </div>
        <div className = "Messages">
          <div className = "sent recieve">
           Jane's friends (33 people)
           <div className = "time">10m</div>
          </div>
          <div className = "message">
          Try this 🥞
          </div>
          <div className = "open_recipe">
            <div className = "thumbnail" />
            <div>
              <div className = "title"> Souffle pancake</div>
              <div className = "description">It's my grandma's recipe.</div>
            </div>
          </div>
        </div>
        <div className = "commentNum">
            Comments (2)
          
            <svg width = "20" height = "20">
                {this.arrow[0]}
            </svg>
          </div>
       </div>

          <div className ="feedCard">
        <div className ="profilePic" >
          <img src= {profile2} />
        </div>
        <div className = "Messages">
          <div className = "sent recieve">
          Me, Faye and 33 other people
          <div className = "time">3d</div>
          </div>
          <div className = "message">
          Lin's Coconut Curry!!!
          </div>
          <div className = "recipe">
          <img src={fork} className = "fork" />
            <div>
            <span className = "forked">Forked</span> Lin’s coconut curry🥥
          </div>
          </div>
        </div>
        <div className = "commentNum">
            Comments (3)
          
            <svg width = "20" height = "20">
                {this.arrow[0]}
            </svg>
          </div>
       </div>
      </div>
    );
  }
}

export default Message;
