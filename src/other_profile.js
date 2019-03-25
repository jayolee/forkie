import React, { Component } from 'react';
import fork from './images/fork.svg'
import profile from './images/profile3.jpg'

class OProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 0,
        }
        this.arrow = [ <path d = "M0 5 L10 10 L20 5" />,  <path d = "M0 10 L10 5 L20 10" />];
     }

  render() {
    return (
      <div className = "mainmenu profile">
      <div className ="profileCard">
      <div>
        <div className ="profile">
          <img src={profile} />
        </div>
        <div className = "profileInfo">
          <div className = "name">
          June</div>
          <div className = "level">Super Fork</div>
        </div>
        </div>
      <div className = "follow">
        <div className = "followNum">
          <div className = "numbers">259</div>
          <div className = "type">Followers</div>
        </div>
        <div className = "followNum">
          <div className = "numbers">60</div>
          <div className = "type">Following</div>
        </div>
      </div>
      </div>
        <div className ="feedCard taste">
          <div className = "title">Taste</div>
          <div className = "tags">
            <div className = "tastes">Savory</div>
            <div className = "tastes">Italian</div>
            <div className = "tastes">Healthy</div>
            <div className = "tastes">Instant-pot</div>
            <div className = "tastes">Simple</div>
          </div>
       </div>
      </div>
    );
  }
}

export default OProfile;
