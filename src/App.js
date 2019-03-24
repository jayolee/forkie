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
import Message from './msg.js'
import Recipes from './recipe.js'
import Profile from './profile.js'

import RecipeC from './recipeC.js'
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      opcity: 0,
      dis: 1,
      recipe : 0,
    }
    this.home = [home, homeOn];
    this.msg = [mail, mailOn];
    this.recipe = [recipe, recipeOn];
    this.profile = [profile, profileOn];
    this.menu = [this.home[1], this.msg[0], this.recipe[0], this.profile[0]]; 
    
    this.display = ["block","none"];
  }

  openshare(){
    this.setState({dis: 0});
    setTimeout(function () {this.setState({opcity: 1})}.bind(this), 10);
}
closeRecipe(){
  this.setState({recipe: 0, opcity : 0});
  setTimeout(function () {this.setState({dis: 1})}.bind(this), 10);
}

  pageRender(){
    switch(this.state.page){
      case 0: 
        this.menu = [this.home[1], this.msg[0], this.recipe[0], this.profile[0]];
        return <Home openShare = {this.openshare.bind(this)} />;
      case 1: 
        this.menu = [this.home[0], this.msg[1], this.recipe[0], this.profile[0]];
        return <Message />;
      case 2: 
        this.menu = [this.home[0], this.msg[0], this.recipe[1], this.profile[0]];
        return <Recipes />;
      case 3: 
        this.menu = [this.home[0], this.msg[0], this.recipe[0], this.profile[1]];
        return <Profile />;
    }
  }
  recipeRender(){
    if(this.state.recipe == 1){
      return <RecipeC closeRecipe = {this.closeRecipe.bind(this)} />
    }
  }
  render() {
    return (
      <div className="App">
        <div className = "screen">
          {this.pageRender()}
          <div className = "footbar" >
            <img src = {this.menu[0]} onClick ={(ev) => this.setState({page: 0})}/>
            <img src = {this.menu[1]}  onClick ={(ev) => this.setState({page: 1})}/>
            <img src = {this.menu[2]}  onClick ={(ev) => this.setState({page: 2})}/>
            <img src= {this.menu[3]}  onClick ={(ev) => this.setState({page: 3})}/>
          </div>
          <div className = "greybox" key = "greybox" style={{display:this.display[this.state.dis], opacity: this.state.opcity}}> 
            <div className = "rcpButtons">
            <div className = "addbtn">+</div>
              <div className = "btn">Share Link</div>
              <div className = "btn" onClick = {(ev) => {this.setState({recipe: 1})}}>Share Recipe</div>
            </div>
         </div>
        {this.recipeRender()}
        {/* <RecipeC /> */}

        </div>
      </div>
    );
  }
}

export default App;
