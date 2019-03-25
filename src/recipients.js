import React, { Component } from 'react';
import search from './images/search.svg'

import profile from './images/profile1.jpg'
import profile2 from './images/profile2.jpg'
import profile3 from './images/profile3.jpg'
import profile4 from './images/profile4.jpg'
import profile5 from './images/profile5.jpg'

class Recipients extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 0,
          // openmov: "translateY(30px)",
          //  opacity: 0,
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
        <div className = "name">Add Recipients</div>
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
        <div className = "mainContent" style={{background:"#fff"}}>
        <div className = "input recipe">
            <input id="inputbox" type = "text" placeholder = "Search by name, ingredients" onKeyUp={this.searchFunc}/>
            <img src ={search} />
            </div>
        
        <div className = "list">
          <div className = "row everyone" key ="row1" onClick={(ev) => {this.props.closeShare(2); this.props.setName("Everyone")}}>
          <div className = "name" id= "all"> Share to all friends</div>
          </div>

          <div className = "row" key ="row2" onClick={(ev) =>{this.props.closeShare(2); this.props.setName("Jane")}}>
          <div className ="profilePic" >
          <img src= {profile4} />
        </div>
          <div className = "name" id= "jane">Jane</div>
          </div>
           
          <div className = "row" key ="row3" onClick={(ev) => {this.props.closeShare(2); this.props.setName("Jin")}}>
          <div className ="profilePic" >
          <img src= {profile2} />
        </div>
          <div className = "name" id= "jin" >Jin</div>
          </div>
           
           <div className = "row" key ="row4" onClick={(ev) => {this.props.closeShare(2); this.props.setName("June")}}>
          <div className ="profilePic" >
          <img src= {profile3} />
        </div>
          <div className = "name" id= "june">June</div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Recipients;
