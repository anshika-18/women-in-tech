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
      <div className="about-main">
        <div className="about-main-1">
          <div className="home-head">About Us</div>
          <p>
            WIT++ is a non-profit community to aspire young women enthusiasts to
            grow and learn in a collaborative environment. The main aim of this
            community is to help the members to apprehend the opportunities in
            the field of Computer Science and technology. WIT++ gives the
            budding women computer engineers, the opportunity to grow in a
            guided environment and help them with the right resources to work in
            the direction of the upliftment of the society by creating tech
            solutions and developing impactful products.
          </p>
        </div>
        <div>
          <img src={about}></img>
        </div>
      </div>
    </div>
  );
}
