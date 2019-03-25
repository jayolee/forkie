import React, { Component } from 'react';
import fork from './images/fork2.png'
import share from './images/share1.png'
import pancake from './images/pancake.jpg'
import arrow from './images/arrow.png'
import eggwhite from './images/eggwhite.jpg'

class cookV extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 0,
          altopcity: 0,
          altdis: 1,
          alert : "",
          openmov: "translateY(30px) rotate(90deg)",
          stepopc: 0,
          stepdis: 1,
          opacity: 0,
        }
        this.arrow = [ <path d = "M0 5 L10 10 L20 5" />,  <path d = "M0 10 L10 5 L20 10" />];
        this.display = ["block","none"]
     }

     componentDidMount(){
      setTimeout(function () { this.setState({opacity:1, openmov:"rotate(90deg) translateY(0)"}) }.bind(this), 2);
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
      {/* <img src={pancake} id="pancake" /> */}
      {/* <svg className = "arrows" width = "20" height = "40">
            <path d = "M20 0 L0 20 L20 40" />
          </svg> */}
          <img src={arrow} className = "arrows"/>
         <div className = "mainContent recipe">
         <div className = "imgwrapper">
          <img src={eggwhite} id="egg" />
          </div>
         
          <div className = "stepcard">
          
            <div className = "topbar">
            <div className = "closebtn" onClick = {this.props.endCook.bind(this)}>
                <svg width = "20" height = "20">
                <path d="M0 0 L20 20" />
                <path d = "M20 0 L0 20" />
                </svg>
            </div>
            </div>
            <div className = "description" style={{position:"relative"}}>
            
                <div className = "desRow">
                <div className = "stepnum">1.</div>
                <div className = "stepDes">Beat egg whites until soft peaks form, then add granulated sugar and continue to beat for 3 mins.</div>
                </div>
            </div>
          </div>
         

          </div>
          {/* <svg className = "arrows" width = "20" height = "40">
            <path d = "M0 0 L20 20 L0 40" />
          </svg> */}
           <img src={arrow} className = "arrows" style={{transform:"rotate(180deg)"}}/>
      </div>
    );
  }
}

export default cookV;
