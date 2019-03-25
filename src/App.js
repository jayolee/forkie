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
import RecipeV from './recipeView.js'
import Recipients from './recipients.js'
import MsgWrite from './msgwrite.js'
import Fork from './fork.js'
import OProfile from './other_profile.js'
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      opcity: 0,
      dis: 1,
      recipe : 0,
      recipeV : 0,
      curshare: 0,
      fork: 0,

      notifyop: 0,
      notifydis: 1,
      notify : "",

      name: "",
    }
    this.home = [home, homeOn];
    this.msg = [mail, mailOn];
    this.recipe = [recipe, recipeOn];
    this.profile = [profile, profileOn];
    this.menu = [this.home[1], this.msg[0], this.recipe[0], this.profile[0]]; 
    
    this.display = ["block","none"];
  }
  setNotify(cont){
    this.setState({notifydis: 0, notify: cont});
    setTimeout(function () {this.setState({notifyop: 1})}.bind(this), 10);
    setTimeout(function () {this.setState({notifyop: 0})}.bind(this), 1500);
    setTimeout(function () {this.setState({notifydis: 1})}.bind(this), 1800);
  }
  openshare(){
    this.setState({dis: 0});
    setTimeout(function () {this.setState({opcity: 1})}.bind(this), 10);
}
closeshare(){
  this.setState({opcity: 0});
  setTimeout(function () {this.setState({dis: 1})}.bind(this), 300);
}
closeRecipe(){
  this.setState({recipe: 0, recipeV:0, opcity : 0});
  setTimeout(function () {this.setState({dis: 1})}.bind(this), 10);
}
openRecipe(){
  this.setState({recipeV: 1});
}

  pageRender(){
    switch(this.state.page){
      case 0: 
        this.menu = [this.home[1], this.msg[0], this.recipe[0], this.profile[0]];
        return <Home openShare = {this.openshare.bind(this)} recipeView = {this.openRecipe.bind(this)} />;
      case 1: 
        this.menu = [this.home[0], this.msg[1], this.recipe[0], this.profile[0]];
        return <Message />;
      case 2: 
        this.menu = [this.home[0], this.msg[0], this.recipe[1], this.profile[0]];
        return <Recipes openRecipe = {this.openRecipe.bind(this)}/>;
      case 3: 
        this.menu = [this.home[0], this.msg[0], this.recipe[0], this.profile[1]];
        return <Profile />;
    }
  }
  closeShare(i){
    this.setState({curshare: i});
  }
  shareRender(){
    switch(this.state.curshare){
      case 0:
      return;
      case 1:
        return <Recipients closeShare = {this.closeShare.bind(this)} setName = {this.setName.bind(this)}/>
      case 2:
        return <MsgWrite name = {this.state.name} closeShare = {this.closeShare.bind(this)} setNotify = {this.setNotify.bind(this)}/>
    }
  }
  recipeRender(){
    if(this.state.recipe === 1){
      return <RecipeC closeRecipe = {this.closeRecipe.bind(this)} />
    }
  }
  recipeViewer(){
    if(this.state.recipeV === 1){
      return <RecipeV share={this.closeShare.bind(this)} forkset = {this.forkset.bind(this)} closeShare ={this.closeShare.bind(this)} closeRecipe = {this.closeRecipe.bind(this)} />
    }
  }
  forkRender(){
    if(this.state.fork === 1){
      return <Fork close ={this.closefork.bind(this)} />
    }
  }
  forkset(){
    this.setState({fork: 1})
  }
  closefork(){
    this.setState({fork: 0})
  }
  setName(i){
    this.setState({name: i})
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
            <div className = "addbtn" onClick={this.closeshare.bind(this)}> <svg width = "18" height ="18" style={{stroke:"#fff"}}>
            <path d = "M0 9 L18 9" />
                  <path d = "M9 0 L9 18" />
                </svg></div>
              <div className = "btn">Share Link</div>
              <div className = "btn" onClick = {(ev) => {this.setState({recipe: 1})}}>Share Recipe</div>
            </div>
         </div>
        
        {this.recipeRender()}
        {this.recipeViewer()}
        {this.shareRender()}
        {this.forkRender()}
        {/* <OProfile /> */}
        </div>
        <div className = "alert notify main" style={{display:this.display[this.state.notifydis], opacity: this.state.notifyop}}>
        <span>{this.state.notify}</span>
      </div>
      </div>
    );
  }
}

export default App;
