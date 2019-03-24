import React, { Component } from 'react';
import fork from './images/fork2.png'
import share from './images/share1.png'
import pancake from './images/pancake.jpg'
import profile from './images/profile1.jpg'

class cookV extends Component {
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

  render() {
    return (
      <div className = "cookV mainmenu" key ="recipe" style={{transform:this.state.openmov, opacity:this.state.opacity, background: pancake, backgroundSize: "100%"}}>
      <div className = "topSec recipe">
        <div className = "topbar">
          <div className = "closebtn" onClick = {this.props.endCook.bind(this)}>
            <svg width = "20" height = "20">
              <path d="M0 0 L20 20" />
              <path d = "M20 0 L0 20" />
            </svg>
          </div>
        </div>
        </div>

      <div className = "mainContent recipe">


         <div className = "mainContent recipe">

          <div className = "stepcard">
          <div className = "description">
            <div className = "desRow">
            <div className = "stepnum">1.</div>
            <div className = "stepDes">Beat egg whites until soft peaks form, then add granulated sugar and continue to beat for 3 mins.</div>
            </div>
          </div>
          </div>


          </div>
      </div>

      </div>
    );
  }
}

export default cookV;
