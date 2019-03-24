import React, { Component } from 'react';
import fork from './images/fork2.png'
import share from './images/share1.png'
import pancake from './images/pancake.jpg'
import profile from './images/profile1.jpg'

class RecipeV extends Component {
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
      <div className = "topSec   recipe">
        <div className = "topbar">
          <div className = "sharebtn" style ={{display:"flex", alignItems: "center"}}>
              <img src ={fork} />
              <img src= {share} />
          </div>
          <div className = "closebtn" onClick = {this.props.closeRecipe.bind(this)}>
            <svg width = "20" height = "20">
              <path d="M0 0 L20 20" />
              <path d = "M20 0 L0 20" />
            </svg>
          </div>
        </div>
        </div>

      <div className = "mainContent recipe">
        <div className = "topbar">
          <div className = "profile">
            <img src= {profile} />
            <div className = "name">Young</div>
          </div>
          
          <div className = "info">
          <div className = "sharenum">
              <div className = "number">5</div>
              <span className = "type">Forks</span>
            </div>
            <div className = "sharenum">
              <div className = "number">80</div>
              <span className = "type">Shares</span>
            </div>
          
          </div>
        </div>

         <div className = "mainContent recipe">
          <div className = "dishtitle">Suffle Pancake 🥞</div>
          <div className = "discription">My original Recipe. Enjoy it!</div>

          <div className = "row">
          <div className = "title">Estimated Cooking Time</div>
          <div className = "description">30 min</div>
          </div>

          <div className = "row">
          <div className = "title" >Ingredients</div>
          <div className = "description">
            <div className = "serving">
            <span class="calculate">-</span> 2 people <span class="calculate">+</span>
            </div>
          <div className= "steps">
            1 stick butter <br />
              4 egg whites<br />
              2 egg yolks<br />
              1/3 cup flour <br />
              1 3/4 teaspoons baking powder< br />
              2 3/4 tablespoon milk<br />
              1 cup sugar<br />
            </div>
          </div>
          </div>


          <div className = "row">
          <div className = "title" >Steps</div>
          <div className = "description"><span className = "stepnum">1. </span>Beat egg whites until soft peaks form, then add granulated sugar and continue to beat until combined.<br />
          <span className = "stepnum">2. </span>In a large bowl, whisk together the remaining batter ingredients. Fold one-third of the meringue into the batter at a time.

          </div>
          </div>


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

      <div className = "btmbtn">Start Cooking</div>
      </div>
    );
  }
}

export default RecipeV;
