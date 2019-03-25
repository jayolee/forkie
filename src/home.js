import React, { Component } from 'react';
import fork from './images/fork.svg'
import publics from './images/everyone.svg'

class Home extends Component {
  render() {
    return (
      <div className = "mainmenu">
        <div className = "topbar">
          <div className = "name">Home</div>
          <div className = "addbtn" onClick = {this.props.openShare.bind(this)}>+</div>
        </div>
        <div className = "cardRow">
       <div className ="feedCard" onClick ={this.props.recipeView.bind(this)}>
        <div className ="profilePic" />
        <div className = "Messages">
          <div className = "sent">
           <span className = "name">June</span> shared <span className = "name">Faye</span> and <span className = "name">Annette</span>
          </div>
          <div className = "recipe">
          Kate's super chilli
          </div>
          <div className = "time">5 minutes</div>
          <div className = "message">
          This is awesome 🍅🌶
          </div>
          
        </div>
       </div>

        <div className ="feedCard" onClick ={this.props.recipeView.bind(this)}>
        <div className ="profilePic" />
        <div className = "Messages">
          <div className = "sent">
          <span className = "name">Jin</span> shared <span className = "name">Jane</span>
          </div>
          <div className = "recipe">
            <img src={fork} className = "fork" />
            <div>
            <span className = "forked">Forked</span> Green smoothies
            </div>
          </div>
          <div className = "time">3 hours</div>
          <div className = "message">
          I lost 3 lbs with this 💣
          </div>

        </div>
       </div>

        <div className ="feedCard" onClick ={this.props.recipeView.bind(this)}>
        <div className ="profilePic" />
        <div className = "Messages">
          <div className = "sent">
          <span className = "name">Jane</span> shared  <span className = "name">Smith</span>
          </div>
          <div className = "recipe" style={{display:"block"}}>
          Grandma's Creme Breele <span class="source">from NYT Cooking</span>
          </div>
          <div className = "time">1 day</div>
          <div className = "message">
          It was super sweet ❤️❤️❤️ 
          </div>
          {/* <div className = "shared_recipe">
            <div className = "preview" />
            <div className = "recipe_content">
            <div className = "title">NYT Cooking</div>
              Grandma's Creme Breele
              </div>
          </div> */}
        </div>
       </div>

          <div className ="feedCard" onClick ={this.props.recipeView.bind(this)}>
        <div className ="profilePic" />
        <div className = "Messages">
          <div className = "sent public">
          <span className = "name">June</span> shared <span className = "name">Neha</span>
          </div>
          <div className = "recipe">
          <img src={fork} className = "fork" />
            <div>
            <span className = "forked">Forked</span> Lin’s coconut curry🥥
          </div>
          </div>
          <div className = "time">1 day</div>
          <div className = "message">
          This is Korean version🥥
          </div>
       
        </div>
       </div>

          <div className ="feedCard" onClick ={this.props.recipeView.bind(this)}>
        <div className ="profilePic" />
        <div className = "Messages">
          <div className = "sent">
          <span className = "name">I</span> shared <img id="publics" src={publics} />Everyone
          </div>
          <div className = "recipe">
          souffle pancake
          </div>
          <div className = "time">2 days</div>
          <div className = "message">
          Try this 🥞
          </div>
         
        </div>
       </div>

        <div className ="feedCard" onClick ={this.props.recipeView.bind(this)}>
        <div className ="profilePic" />
        <div className = "Messages">
          <div className = "sent">
          <span className = "name">June</span> shared <span className = "name">Lin</span>
          </div>
          <div className = "recipe">
          souffle pancake
          </div>
          <div className = "time">3 days</div>
          <div className = "message">
          Try this 🥞
          </div>
      
        </div>
       </div>
       </div>
      </div>
    );
  }
}

export default Home;
