import React, { Component } from 'react';
import home from './images/home.svg';
import mail from './images/messages.svg';
import recipe from './images/recipe.svg';
import profile from './images/profile.svg';
import homeOn from './images/home_on.svg';
import mailOn from './images/messages_on.svg';
import recipeOn from './images/recipe_on.svg';
import profileOn from './images/profile_on.svg';
import fork from './images/fork.svg'
import Home from './home.js'
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    }
    this.home = [home, homeOn];
    this.msg = [mail, mailOn];
    this.recipe = [recipe, recipeOn];
    this.profile = [profile, profileOn];

    this.menu = [this.home[1], this.msg[0], this.recipe[0], this.profile[0]];
    
  }


  render() {
    return (
      <div className="App">
        <div className = "screen">
          <Home />
          <div className = "footbar" >
            <img src = {this.menu[0]} />
            <img src = {this.menu[1]} />
            <img src = {this.menu[2]} />
            <img src= {this.menu[3]} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
