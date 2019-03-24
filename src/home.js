import React, { Component } from 'react';
import fork from './images/fork.svg'

class Home extends Component {
  render() {
    return (
      <div className = "mainmenu">
        <div className = "topbar">
          <div className = "name">Home</div>
          <div className = "addbtn">+</div>
        </div>
       <div className ="feedCard">
        <div className ="profilePic" />
        <div className = "Messages">
          <div className = "sent">
           June shared Young, Annette
          </div>
          <div className = "message">
          This is awesome 🍅🌶
          </div>
          <div className = "recipe">
          Kate's super chilli
          </div>
        </div>
       </div>

        <div className ="feedCard">
        <div className ="profilePic" />
        <div className = "Messages">
          <div className = "sent">
           Jin shared Jane
          </div>
          <div className = "message">
          I lost 3 lbs with this 💣
          </div>
          <div className = "recipe">
            <img src={fork} className = "fork" />
            <div>
            Green smoothies
            </div>
          </div>
        </div>
       </div>

        <div className ="feedCard">
        <div className ="profilePic" />
        <div className = "Messages">
          <div className = "sent">
          Jane shared Smith
          </div>
          <div className = "message">
          It was super sweet ❤️❤️❤️ 
          </div>
          <div className = "shared_recipe">
            <div className = "preview" />
            <div className = "recipe_content">
            <div className = "title">NYT Cooking</div>
              Grandma's Creme Breele
              </div>
          </div>
        </div>
       </div>

          <div className ="feedCard">
        <div className ="profilePic" />
        <div className = "Messages">
          <div className = "sent public">
           June shared Young, Annette
          </div>
          <div className = "message">
          For today’s dinner 🥥
          </div>
          <div className = "recipe">
          Lin’s coconut curry🥥
          </div>
        </div>
       </div>

          <div className ="feedCard">
        <div className ="profilePic" />
        <div className = "Messages">
          <div className = "sent">
           June shared Lin
          </div>
          <div className = "message">
          Try this 🥞
          </div>
          <div className = "recipe">
          souffle pancake
          </div>
        </div>
       </div>

        <div className ="feedCard">
        <div className ="profilePic" />
        <div className = "Messages">
          <div className = "sent">
           June shared Lin
          </div>
          <div className = "message">
          Try this 🥞
          </div>
          <div className = "recipe">
          souffle pancake
          </div>
        </div>
       </div>
      </div>
    );
  }
}

export default Home;
