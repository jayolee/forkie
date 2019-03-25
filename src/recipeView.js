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
      <div className = "recipeC mainmenu" key ="recipe" style={{transform:this.state.openmov, opacity:this.state.opacity}}>
     {this.startCook()}
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
        <div className = "topbar" style={{transform:"translateY(-32px)", height: "40px"}}>
          <div className = "profile">
            <img src= {profile} />
          </div>
          {/* <div className = "dots">
          <img src={dots} />
          </div> */}
        
          <div className = "sharebtn" style ={{display:"flex", alignItems: "center"}}>
              <img src ={fork} onClick = {this.props.forkset.bind(this)}/>
               <img src= {share}  onClick = {(ev)=>{this.props.share(1)}} style={{marginRight: "21px"}} />
          </div>
        </div>

         <div className = "mainContent recipe" style={{paddingTop: "4px"}}>
         <div className = "titlebar">
             <div className = "dishtitle">
              <div>Suffle Pancake 🥞</div>
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
          <div className = "discription">My original Recipe. Enjoy it!</div>

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
            1 stick butter <br />
              4 egg whites<br />
              2 egg yolks<br />
              <span class="highlight" onClick={this.opencomment.bind(this)}>1/3 cup flour</span> <br />
              2 3/4 tablespoon milk<br />
              1 cup sugar<br />
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

      <div className = "btmbtn" onClick = {(ev) => {this.setState({cookV: 1})}}>Start Cooking</div>
      
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
