import React, { Component } from 'react';
import fork from './images/fork.svg'

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 0,
        }
        this.arrow = [ <path d = "M0 5 L10 10 L20 5" />,  <path d = "M0 10 L10 5 L20 10" />];
     }

  render() {
    return (
      <div className = "mainmenu">
        <div className = "topbar recipeTop">
          <div className = "name">Recipe</div>
          <div className = "filter" >
            <div className = "filterType">All </div>
            <div className = "filterType">My Recipe</div>
            <div className = "filterType">Forked Recipe</div>
            <div className = "filterType">Saved Recipe</div>
            <svg width = "16" height ="16">
                    <path d = "M0 8 L8 16 L16 8" />
                </svg>
          </div>
        </div>

            <div className = "input recipe">
            <input id="inputbox" type = "text" autoFocus placeholder = "Search by name, ingredients" />
            </div>
        <div className ="feedCard recipe">
        <div className ="menuPic" />
        <div className = "recipeContent">
          <div className = "title">
          Pad Thai
          </div>
          <div className = "description">
          The original recipe
          </div>
        </div>
        <div className = "status">
            <b>80</b> Shares<br />
            <b>5</b> Forks
        </div>
       </div>

        <div className ="feedCard recipe">
        <div className ="menuPic" />
        <div className = "recipeContent">
          <div className = "title">
          Pad Thai
          </div>
          <div className = "description">
          The original recipe
          </div>
        </div>
        <div className = "status">
            <b>80</b> Shares<br />
            <b>5</b> Forks
        </div>
       </div>

        <div className ="feedCard recipe">
        <div className ="menuPic" />
        <div className = "recipeContent">
          <div className = "title">
          Pad Thai
          </div>
          <div className = "description">
          The original recipe
          </div>
        </div>
        <div className = "status">
            <b>80</b> Shares<br />
            <b>5</b> Forks
        </div>
       </div>
      </div>
    );
  }
}

export default Recipes;
