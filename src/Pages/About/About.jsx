import React from "react";
import "./About.css";
import about from "../../Images/about.png";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="about">
      <div className="home-head">About Us</div>
      <div className="about-main">
        <div className="about-main-1">
          <p>
            WIT++:Women in Technology is a non profit community to inspire young
            women to learn DSA and coding skills in a collaborative environment.
            It encourages women not only from CS, IT but from all other branches
            to achieve their career goals in the software industry
          </p>
          <div className="home-head about-head">What does WIT++ do? </div>
          <ul>
            <li>Conduct regular DSA session </li>
            <li>Conduct workshops for web development, app development </li>
            <li>Conduct contest and mock interviews.</li>
            <li> Provide some tips and tricks to crack interview</li>
            <li>Resolve your doubts and shape your ideas.</li>
            <li> Improve logical and analytical skills</li>
          </ul>
        </div>
        <div>
          <img src={about}></img>
        </div>
      </div>
    </div>
  );
}
