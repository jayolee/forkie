import React, { Component } from 'react';
import fork from './images/fork.svg'

class Fork extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 0,
          altopcity: 0,
          altdis: 1,
          alert : "",
          openmov: "translateY(30px)",
          stepopc: 0,
          stepdis: 1,
          opacity: 0,

          recommendop : 0,
          recommenddis : 1,
          recommend : "How long?",
          appendrow: 0,

          btmbtn: 0,
          btmbtndis: 1,

          btntxt: "Done"
        }
        this.arrow = [ <path d = "M0 5 L10 10 L20 5" />,  <path d = "M0 10 L10 5 L20 10" />];
        this.display = ["block","none"]
     }

     componentDidMount(){
      setTimeout(function () { this.setState({opacity:1, openmov:"translateY(0)"}) }.bind(this), 2);

      this.startStep();
      let title = document.getElementsByClassName("title")[0];
      title.value = "Suffle Pancake 🥞";
      let estimated = document.getElementById("estimated");
      estimated.value = "30 min";
      let ingre = document.getElementsByClassName("ingre");
      let ingredient = [ "1 stick butter",
      "4 egg whites",
      "2 egg yolks",
      "1/3 cup flour",
     "2 3/4 tablespoon milk",
      "1 cup sugar"]
      for(let i = 0; i<ingre.length; i++){
        ingre[i].value = ingredient[i]
      }
      let step = document.getElementsByClassName("stepinput");
        step[0].value = "Beat egg whites until soft peaks form, then add granulated sugar and continue to beat for 3 mins.";
        step[1].value = "In a large bowl, whisk together the remaining batter ingredients. Fold one-third of the meringue into the batter at a time.";

    }
    
     setInstruction(cont){
      this.setState({altdis: 0, alert: cont});
      setTimeout(function () {this.setState({altopcity: 1})}.bind(this), 10);
      setTimeout(function () {this.setState({altopcity: 0})}.bind(this), 1500);
      setTimeout(function () {this.setState({altdis: 1})}.bind(this), 1800);
  }
  
  startStep() {
    this.setState({stepdis: 0});
      setTimeout(function () {this.setState({stepopc: 1})}.bind(this), 10);

      const step = document.getElementById("step");
      step.innerHTML = "1.";
    
  }

  checksuggestion(e) {
    let curtext = e.target.value;
    curtext = curtext.toLowerCase();
    let length = curtext.length;
    let final = curtext.substring(length-3,length)
    if(final===("min")){
      this.setrecommendation("in HIGH | LOW heat")
    }else if(final === "ast"){
      this.setrecommendation("How long?");
    } else{
      this.setState({recommendop: 0});
    setTimeout(function () {this.setState({recommenddis: 1})}.bind(this), 300);
    }
   
  }
  setrecommendation(cont){
    this.setState({recommenddis: 0, recommend: cont});
    setTimeout(function () {this.setState({recommendop: 1})}.bind(this), 10);
    }
appendRow(){
  if(this.state.appendrow === 1){
  return <div style={{width: "100%", display:"flex",alignItems:"center"}}>
  <div className = "title" id="step">2.</div>
  <textarea rows = "1" onFocus = {(ev) => {
                    this.setState({btmbtndis: 1, btmbtn: 0})}}
                    onKeyUp={this.checksuggestion.bind(this)} placeholder ="..."
                    onKeyPress ={(ev) => {
                    if(ev.key === "Enter"){this.setState({appendrow : 1, btmbtndis: 0, btmbtn: 1})}}}
                     />
  </div>
  }
}
  render() {
    return (
      <div className = "recipeC mainmenu" key ="recipe" style={{transform:this.state.openmov, opacity:this.state.opacity}}>
      <div className = "topSec">
        <div className = "topbar" style={{justifyContent:"space-between"}}>
          <div style ={{display:"flex", alignItems: "center"}}>
            <div className = "addbtn"> 
            <svg width = "18" height ="18">
            <path d = "M0 9 L18 9" />
                  <path d = "M9 0 L9 18" />
                </svg>
            </div>
            <div className = "addRecipe">Add media...</div>
          </div>
          <div className = "closebtn" onClick = {this.props.close.bind(this)}>
            <svg width = "20" height = "20">
              <path d="M0 0 L20 20" />
              <path d = "M20 0 L0 20" />
            </svg>
          </div>
        </div>

        <div className = "titleBox">
        <div style={{display:"flex",alignItems:"center",marginBottom:"4px"}}>
          <img src={fork} style={{width:"24px", display:"block"}} />
          <div style={{fontWeight:"bold"}}>&nbsp;<span style={{color:"#FF7B4A"}}>Forking</span> <span style={{color:"#3C4D64"}}>Young's recipe</span></div>
        </div>
          <input className = "title" placeholder = "Title"/>
          <textarea className = "title" placeholder  = "Description..." />
        </div>
        </div>

      <div className = "mainContent">
        <div className = "card">
          <div className = "title" >Estimated Cooking Time</div>
          <input style={{width:"100px"}} placeholder ="30 min" id="estimated"/>
        </div>

         <div className = "card">
          <div className = "title" >Ingredients</div>
          <input className="ingre"/>
          <input className="ingre"/>
          <input className="ingre"/>
          <input className="ingre"/>
          <input className="ingre"/>
          <input className="ingre"/>
        </div>
        <div className = "title" key="stepTitle" style ={{marginLeft: "16px", marginTop: "16px", display:this.display[this.state.stepdis], opacity: this.state.stepopc}}>
       Step</div>
         <div className = "card">
          <div className = "title" id="step">Step 1.</div>
          <textarea className = "stepinput" onKeyUp={this.checksuggestion.bind(this)} placeholder ="..." onKeyPress = {(ev) => {
                    if(ev.key === "Enter"){this.setState({appendrow : 1, btmbtndis: 0, btmbtn: 1})}}}/>
          <div className = "title" id="step">2.</div>
          <textarea className = "stepinput" />
        
        {this.appendRow()}
        </div>
      </div>
      <div className = "alert" key ="alert" style={{display:this.display[this.state.altdis], opacity: this.state.altopcity}}>
        {this.state.alert}
      </div>
      <div className = "recommend" style={{display:this.display[this.state.recommenddis], opacity: this.state.recommendop}}>
        <span>{this.state.recommend}</span>
      </div>
      <div className = "btmbtn"  style={{display:this.display[this.state.btmbtndis], opacity: this.state.btmbtn}}
      onClick = {(ev) => {this.setState({cookV: 1})}}>{this.state.btntxt}</div>
     
      </div>
    );
  }
}

export default Fork;
