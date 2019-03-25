import React, { Component } from 'react';
import search from './images/search.svg'

import souffle from './images/pancake.jpg'

class MsgWrite extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 0,
 
        }
         this.display = ["block","none"]
     }

     componentDidMount(){
      setTimeout(function () { this.setState({opacity:1, openmov:"translateY(0)"}) }.bind(this), 2);
    }
    
     setInstruction(cont){
      this.setState({altdis: 0, alert: cont});
      setTimeout(function () {this.setState({altopcity: 1})}.bind(this), 10);
      setTimeout(function () {this.setState({altopcity: 0})}.bind(this), 1500);
      setTimeout(function () {this.setState({altdis: 1})}.bind(this), 1800);
  }
searchFunc(e){
  let val = e.target.value;
  let names = document.getElementsByClassName("row");
  if(!val || val.length === 0){
    for(let i = 0; i<names.length; i++){
        names[i].style.display = "flex";
    }
  }
  for(let i = 0; i<names.length; i++){
    if(names[i].querySelector(".name")){
    if(names[i].querySelector(".name").id){
      if(!names[i].querySelector(".name").id.includes(val)){
      names[i].style.display = "none";
    }
    }
  }
}
  
}
  setrecommendation(cont){
    this.setState({recommenddis: 0, recommend: cont});
    setTimeout(function () {this.setState({recommendop: 1})}.bind(this), 10);
    }

  render() {
    return (
      <div className = "recipeC mainmenu" key ="recipe" style={{transform:this.state.openmov, opacity:this.state.opacity}}>
      <div className = "topSec">
        <div className = "topbar" style={{justifyContent:"space-between"}}>
        <div className = "name">Share a Recipe</div>
          <div style ={{display:"flex", alignItems: "center"}}>
          </div>
          <div className = "closebtn" onClick={(ev) => this.props.closeShare(0)}>
            <svg width = "20" height = "20">
              <path d="M0 0 L20 20" />
              <path d = "M20 0 L0 20" />
            </svg>
          </div>
        </div>
        </div>
        <div className = "mainContent" style={{background:"#fff", padding:"0 16px"}}>
        <div className ="recipient">{this.props.name}&nbsp;</div>
        <textarea class="messageP" placeholder = "Leave a message"/>
        <div className = "open_recipe">
            <div className = "thumbnail">
              <img src={souffle} style ={{transform:"translateX(-40px)"}}/>
            </div>
            <div>
              <div className = "title"> Souffle pancake</div>
              <div className = "description">It's my grandma's recipe.</div>
            </div>
          </div>
          <div className = "btmbtn share" onClick={(ev) => {this.props.closeShare(0); this.props.setNotify("sent")}}>Share</div>
        </div>
      </div>
    );
  }
}

export default MsgWrite;
