import React, { Component } from 'react';
import food1 from './images/padthai.jpg'
import food2 from './images/carbonara.jpg'
import food3 from './images/pancake.jpg'
import search from './images/search.svg'

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
          <select className = "filter" >
            <option className = "filterType">All </option>
            <option className = "filterType">My Recipe</option>
            <option className = "filterType">Forked Recipe</option>
            <option className = "filterType">Saved Recipe</option>
            <svg width = "16" height ="16">
                    <path d = "M0 8 L8 16 L16 8" />
                </svg>
          </select>
        </div>

            <div className = "input recipe">
            <input id="inputbox" type = "text" placeholder = "Search by name, ingredients" />
            <img src ={search} />
            </div>
        <div className ="feedCard recipe" onClick = {this.props.openRecipe.bind(this)}>
        <div className ="menuPic">
          <img src={food1} />
        </div>
        <div className = "recipeContent">
          <div className = "title">
          Pad Thai <span class="date">5d</span>
          </div>
          <div className = "user">
          June
          </div>
          <div className = "description">
          American ver pad thai.
          </div>
        </div>
        <div className = "status">
            <b>10</b> Shares<br />
            <b>5</b> Forks
        </div>
       </div>

        <div className ="feedCard recipe" onClick = {this.props.openRecipe.bind(this)}>
        <div className ="menuPic">
          <img src={food2} />
        </div>
        <div className = "recipeContent">
          <div className = "title">
          Carbonara <span class="date">2d</span>
          </div>
          <div className = "user">
          Joyce
          </div>
          <div className = "description">
          Heavy, savory carbonara made of egg yolk!
          </div>
        </div>
        <div className = "status">
            <b>50</b> Shares<br />
            <b>2</b> Forks
        </div>
       </div>

        <div className ="feedCard recipe" onClick = {this.props.openRecipe.bind(this)}>
        <div className ="menuPic">
          <img src={food3} style={{transform:"translateX(-40px)"}}/>
        </div>
        <div className = "recipeContent">
          <div className = "title">
          Souffle pancakes <span class="date">2d</span>
          </div>
          <div className = "user">
          Me
          </div>
          <div className = "description">
          It's my original recipe. Enjoy it~~
          </div>
        </div>
        <div className = "status">
            <b>20</b> Shares<br />
        </div>
       </div>
      </div>
    );
  }
}

export default Recipes;
