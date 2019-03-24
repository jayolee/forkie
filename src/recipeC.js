import React, { Component } from 'react';

class RecipeC extends Component {
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
        }
        this.arrow = [ <path d = "M0 5 L10 10 L20 5" />,  <path d = "M0 10 L10 5 L20 10" />];
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
  startStep() {
    this.setState({stepdis: 0});
      setTimeout(function () {this.setState({stepopc: 1})}.bind(this), 10);

      const step = document.getElementById("step");
      step.innerHTML = "1.";
    
  }
  render() {
    return (
      <div className = "recipeC mainmenu" key ="recipe" style={{transform:this.state.openmov, opacity:this.state.opacity}}>
      <div className = "topSec">
        <div className = "topbar">
          <div style ={{display:"flex", alignItems: "center"}}>
            <div className = "addbtn">+</div>
            <div className = "addRecipe">Add media...</div>
          </div>
          <div className = "closebtn" onClick = {this.props.closeRecipe.bind(this)}>
            <svg width = "20" height = "20">
              <path d="M0 0 L20 20" />
              <path d = "M20 0 L0 20" />
            </svg>
          </div>
        </div>

        <div className = "titleBox">
          <input className = "title" placeholder = "Title"/>
          <textarea className = "title" placeholder  = "Description..." />
        </div>
        </div>

      <div className = "mainContent">
        <div className = "card">
          <div className = "title">Estimated Cooking Time</div>
          <input style={{width:"100px"}} placeholder ="30 min" />
        </div>

         <div className = "card">
          <div className = "title" >Ingredients</div>
          <input onFocus={(ev) => this.setInstruction("We also automatically get ingredients from the steps")} placeholder ="1 onion" />
        </div>
        <div className = "title" key="stepTitle" style ={{marginLeft: "16px", marginTop: "16px", display:this.display[this.state.stepdis], opacity: this.state.stepopc}}>
       Step</div>
         <div className = "card">
          <div className = "title" id="step">Step 1.</div>
          <input onFocus={(ev) => {this.startStep(); this.setInstruction("Type 'Boil chicken breasts'")}} placeholder ="..." />
        </div>
      </div>
      <div className = "alert" key ="alert" style={{display:this.display[this.state.altdis], opacity: this.state.altopcity}}>
        {this.state.alert}
      </div>
      <div className = "recommend">How long?</div>
      </div>
    );
  }
}

export default RecipeC;
