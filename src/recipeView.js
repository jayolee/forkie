import React, { Component } from 'react';
import fork from './images/fork2.png'
import share from './images/share1.png'
import pancake from './images/pancake.jpg'
import profile from './images/profile1.jpg'
import CookV from './cookView.js'
import dots from './images/dot.svg'
import thumb from './images/thumb.svg'
import profile2 from './images/profile5.jpg'
import profile3 from './images/profile6.jpg'

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
          servesize: 2,
          cookV : 0,
          opencomment: 0,
          commentdis: 1,
          commentheight: 2,
          ingre: [[0, 1, 2], 57, 2, 1, [0, 1, 3], 41, [1, 3, 4], [0, 1, 2], 100],
        }
        this.arrow = [ <path d = "M0 5 L10 10 L20 5" />,  <path d = "M0 10 L10 5 L20 10" />];
        this.display = ["block","none"];
        this.heights = ["150px", "100%", "0px"]
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
  getamount(n){
    let amount = this.state.servesize;
    let ingre = this.state.ingre[n];
    let result = "";
    if(Array.isArray(ingre)){
      if(ingre[1] * amount >= ingre[2]){
        result += Math.floor(ingre[1] * amount / ingre[2]) + (ingre[0] * amount) + " "
      } 
      if(ingre[1] * amount % ingre[2] !== 0){
        result += (ingre[1] * amount % ingre[2])+"/" + ingre[2];
      }
      return result;
    } else{
      return ingre * amount;
    }
  }
  startStep() {
    this.setState({stepdis: 0});
      setTimeout(function () {this.setState({stepopc: 1})}.bind(this), 10);

      const step = document.getElementById("step");
      step.innerHTML = "1.";
    
  }
  opencomment(){
    this.setState({commentdis: 0, });
    setTimeout(function () {this.setState({commentheight: 0,opencomment: 1})}.bind(this), 10);
  }
  closecomment(){
      this.setState({opencomment: 0 });
      setTimeout(function () {this.setState({commentheight: 2})}.bind(this), 10);
      setTimeout(function () {this.setState({commentdis: 1})}.bind(this), 200);

  }
  startCook(){
    if(this.state.cookV === 1){
      return <CookV endCook = {this.endCook.bind(this)}/>
    }
  }
  endCook(){
    this.setState({cookV : 0});
  }


  render() {
    return (
      <div className = "recipeC mainmenu" key ="recipe" style={{transform:this.state.openmov,  paddingBottom:"0", opacity:this.state.opacity}}>
     {this.startCook()}
     <div className = "mainmenu" style={{ overflow: "scroll", margin:"0", background:"none"}}>
      <div className = "topSec   recipe">
        <div className = "topbar">
          <div className = "closebtn" onClick = {this.props.closeRecipe.bind(this)}>
            <svg width = "20" height = "20">
              <path d="M0 0 L20 20" />
              <path d = "M20 0 L0 20" />
            </svg>
          </div>
        </div>
        </div>

      <div className = "mainContent recipe">
        <div className = "topbar" style={{transform:"translateY(-30px)", height: "40px"}}>
          <div className = "profile">
            <img src= {profile} />
          </div>
          {/* <div className = "dots">
          <img src={dots} />
          </div> */}
        
          <div className = "sharebtn" style ={{display:"flex", alignItems: "center"}}>
              <img src ={fork} onClick = {this.props.forkset.bind(this)}/>
               <img src= {share}  onClick = {(ev)=>{this.props.share(1)}} style={{marginRight: "16px"}} />
          </div>
        </div>

         <div className = "mainContent recipe" style={{paddingTop: "4px"}}>
         <div className = "titlebar">
             <div className = "dishtitle">
              <div>Souffle Pancake 🥞</div>
              <div className="name">by <span className = "bold">Young</span></div>
              </div>
            <div className = "info">
            <div className = "sharenum" style={{marginRight: "12px"}}>
                <div className = "number">5</div>
                <span className = "type">Forks</span>
              </div>
              <div className = "sharenum">
                <div className = "number">80</div>
                <span className = "type">Shares</span>
              </div>
            </div>
          </div>
          <div className = "discription">My original recipe. Enjoy it!</div>

          <div className = "row">
          <div className = "title">Estimated Cooking Time</div>
          <div className = "description">30 min</div>
          </div>

          <div className = "row">
          <div className = "title">Serving Size</div>
          <div className = "serving">
              <div className = "servBtn" style ={{marginRight: "16px"}}>
                <svg width = "12" height ="12" onClick = {(ev) => {if(this.state.servesize > 1){this.setState({servesize:this.state.servesize - 1})}}}>
                  <path d = "M0 6 L12 6" />
                </svg>
              </div>
              <div className = "description" key="size">{this.state.servesize}</div>
              <div className = "servBtn"  style ={{marginLeft: "16px"}}>
                <svg width = "12" height ="12" onClick = {(ev) => {this.setState({servesize:this.state.servesize + 1})}}>
                  <path d = "M0 6 L12 6" />
                  <path d = "M6 0 L6 12" />
                </svg>
              </div>
          </div>
          </div>

          <div className = "row">
          <div className = "title" >Ingredients</div>
          <div className = "description">
          <div className= "steps">
          {this.getamount(0)} stick / {this.getamount(1)}g butter <br />
          {this.getamount(2)} egg whites<br />
          {this.getamount(3)} egg yolks<br />
              <span class="highlight" onClick={this.opencomment.bind(this)}>{this.getamount(4)} cup / {this.getamount(5)}g flour</span> <br />
              {this.getamount(6)} tablespoon milk<br />
              {this.getamount(7)} cup / {this.getamount(8)}g sugar<br />
            </div>
          </div>
          </div>


          <div className = "row">
          <div className = "title" >Steps</div>
          <div className = "description">
            <div className = "desRow">
            <div className = "stepnum">1.</div>
            <div className = "stepDes">Beat egg whites until soft peaks form, then add granulated sugar and continue to beat for 3 mins.</div>
            </div>
            <div className = "desRow">
              <div className = "stepnum">2.</div>
              <div className = "stepDes">In a large bowl, whisk together the remaining batter ingredients. Fold one-third of the meringue into the batter at a time.
              </div>
          </div>
          <div className = "desRow">
              <div className = "stepnum">3.</div>
              <div className = "stepDes">Oil a frying pan over low heat, then cook about 1 cup of the batter at a time. Cook for 6 minutes, then flip it over when slightly browned.
              </div>
          </div>
          <div className = "desRow">
              <div className = "stepnum">4.</div>
              <div className = "stepDes">Continue cooking for about 15 minutes until cooked through.
              </div>
          </div>
          </div>
          </div>


          </div>
      </div>
      </div>
      <div className = "alert" key ="alert" style={{display:this.display[this.state.altdis], opacity: this.state.altopcity}}>
        {this.state.alert}
      </div>

      <div className = "btmbtn startCook" onClick = {(ev) => {this.setState({cookV: 1})}}>Start Cooking</div>
      
      <div className = "comment" key ="comment" style={{height:this.heights[this.state.commentheight], opacity: this.state.opencomment, display:this.display[this.state.commentdis]}} onClick={(ev) => 
      {this.setState({commentheight:Math.abs(this.state.commentheight - 1)})}}>
      
      <div className = "row">
     
        <div className = "commentrow">
        <div className="control" onClick ={this.closecomment.bind(this)}>(drag down)</div>
        <div className = "writer">
          <div className = "profile">
            <img src={profile2} style={{width:"100%"}} />
          </div> Kate <span className = "time">5d</span>
        </div>
        <div className ="OX">40 <img src={thumb} style={{width: "20px"}} /></div>
          </div>

      You can use coconut flour for crispy texture
      </div>
      <div className = "row">
      <div className = "commentrow">
        <div className = "writer">
          <div className = "profile">
            <img src={profile3} style={{width:"100%"}} />
          </div> Smith <span className = "time">2w</span>
        </div>
        <div className ="OX">20 <img src={thumb} style={{width: "20px"}} /></div>
          </div>
      Make sure that you use the right amount of flour. It can be very thick otherwise.
        </div>

         <div className = "input">
      <input id="inputbox" type = "text" placeholder = "Type message" />
      <div className = "sendbtn">
              <svg width="20" height="20">
                  <path d="M12 2 L18 10 L12 18" />
                  <path d="M2 10 L18 10" />
              </svg>
          </div>
      </div>
      </div>

      </div>
    );
  }
}

export default RecipeV;
