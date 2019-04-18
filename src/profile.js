import React, { Component } from 'react';
import fork from './images/fork.svg'
import profile from './images/profile1.jpg'
import pencil from './images/pencil.svg'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 0,
          tags: ["Spicy", "Korean", "Greek", "Tangy", "Heavy"],
          btnclass:["tastes", "tastes opposite"],
          edit: false,
          editbtn: [<img src={pencil} style={{width:"24px"}} />, <input onKeyDown={(ev) => {if(ev.key === "Enter"){this.addTag(ev); this.setState({edit: false})}}} id ="addTaste" placeholder="Add taste" style={{width: "100%", border:0,borderBottom:"2px solid #ccc", padding: "6px"}}/>
        ]
        }
        this.arrow = [ <path d = "M0 5 L10 10 L20 5" />,  <path d = "M0 10 L10 5 L20 10" />];
     }

  enterEdit(){
      this.setState({edit: true})
  }
  deleteTag(e){
    if(this.state.edit === true){
    let value = e.target.innerHTML;
    let indexNum = this.state.tags.indexOf(value);
    let tags = this.state.tags;
    tags = tags.slice(0, indexNum).concat(tags.slice(indexNum + 1, tags.length));

    this.setState({tags: tags});
  }
  }
  addTag(e){
    let newtag = e.target.value;
    let tags = this.state.tags;
    // if(tags.includes(newtag)){
    //   alert("The taste is already existing");
    // }
    tags.push(newtag);
    this.setState({tags: tags});

  }
  generateTags(){
    let element = [];
    for(let i = 0; i < this.state.tags.length; i++) {
      element.push(<div key={this.state.tags[i]} className = {this.state.btnclass[this.state.edit * 1]} onClick={this.deleteTag.bind(this)}>{this.state.tags[i]}</div>)
    }
    return element;
  }
  render() {
    return (
      <div className = "mainmenu">
      <div className ="profileCard">
        <div className ="profile">
          <img src={profile} />
        </div>
        <div className = "profileInfo">
          <div className = "name">
          Young</div>
          <div className = "level">Baby Fork</div>
        </div>
      </div>
      <div className = "follow">
        <div className = "followNum">
          <div className = "numbers">59</div>
          <div className = "type">Followers</div>
        </div>
        <div className = "followNum">
          <div className = "numbers">36</div>
          <div className = "type">Following</div>
        </div>
      </div>

        <div className ="feedCard taste">
          <div className = "title" style={{width:"100%",display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <div>Taste</div>
            <div style={{width: "120px", height:"30px", display:"flex", justifyContent:"flex-end"}} onClick={this.enterEdit.bind(this)}>
            {this.state.editbtn[this.state.edit * 1]}
            <svg width = "18" height ="18" style={{stroke:"#fff"}}>
            <path d = "M0 9 L18 9" />
                  <path d = "M9 0 L9 18" />
                </svg>
            </div>
          </div>
          <div className = "tags" >
            {this.generateTags()}
          </div>
       </div>
      </div>
    );
  }
}

export default Profile;
