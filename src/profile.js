import React, { Component } from 'react';
import fork from './images/fork.svg'
import profile from './images/profile1.jpg'

class Profile extends Component {
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
      <div className ="profileCard">
        <div className ="profile">
          <img src={profile} />
        </div>
        <div className = "profileInfo">
          <div className = "name">
          Young</div>
          <div className = "level">Baby Fork</div>
        </div>
      </div>
      <div className = "follow">
        <div className = "followNum">
          <div className = "numbers">59</div>
          <div className = "type">Followers</div>
        </div>
        <div className = "followNum">
          <div className = "numbers">36</div>
          <div className = "type">Following</div>
        </div>
      </div>

        <div className ="feedCard taste">
          <div className = "title">Taste</div>
          <div className = "tags">
            <div className = "tastes">Spicy</div>
            <div className = "tastes">Korean</div>
            <div className = "tastes">Greek</div>
            <div className = "tastes">Tangy</div>
            <div className = "tastes">Heavy</div>
          </div>
       </div>
      </div>
    );
  }
}

export default Profile;
