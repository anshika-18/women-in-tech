import React, { Component } from "react";
import "./userCard.scss";
import Instagram from "../Images/Instagram.jpg";
import Github from "../Images/github.png";
import LinkedIn from "../Images/linkedIn.png";

export default class UserCard extends Component {
  render() {
    let userData = this.props.userData;
    // name,imageUrl,githubUrl,linkedInUrl,college,status
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={userData.imageUrl}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title"> {userData.name} </h5>
          <p className="card-text"> {userData.status} </p>
          <div>
            <a href={userData.linkedInUrl} className="link-person">
              <img src={Instagram}></img>
            </a>
            <a href={userData.linkedInUrl} className="link-person">
              <img src={Github}></img>
            </a>
            <a href={userData.linkedInUrl} className="link-person">
              <img src={LinkedIn}></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
