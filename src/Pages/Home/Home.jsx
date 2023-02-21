import React from "react";
import "./Home.scss";
import { Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Background from "../../Images/background.png";
import HomeV from "../../Images/home-v.svg";
import Vector1 from "../../Images/vector1.svg";
import Wave from "../../Images/wave.png";
import About from "../../Images/about.png";
import Faq from "../../Images/faq.png";
import Footer from "../../Images/footer.svg";
import Logo from "../../Images/logo.png";
import LinkedIn from "../../Images/linkedIn.png";
import Instagram from "../../Images/Instagram.jpg";
import Youtube from "../../Images/youtube.png";
import Left from "../../Images/left.svg";
import Right from "../../Images/right.svg";
import Github from "../../Images/github.png";


export default function Home() {
  return (
    <div className="home">
      <div className="home-v">
        <img src={Vector1}></img>
        <div className="out-home">
          <div>WOMEN IN TECH++</div>
          <p>
          WIT++ is a non-profit community to aspire young women enthusiasts to grow and learn in a collaborative environment. 
          The main aim of this community is to help the members to apprehend the opportunities in the field of Computer 
          Science and technology.
          </p>
          <a href='https://forms.gle/pQSr1RkSRTJ9bZdP7' target="_blank">
            <Button className="but-join" variant="outline-dark">
              Join Us
            </Button>
          </a>
        </div>
      </div>
      <hr></hr>
      <div className="about">
        <div className="about-main">
          <div className="about-main-1">
            <div className="home-head">About Us</div>
            <p>
            WIT++ is a non-profit community to aspire young women enthusiasts to grow and learn in a collaborative environment.
             The main aim of this community is to help the members to apprehend the opportunities in the field of Computer Science 
             and technology. WIT++ gives the budding women computer engineers, the opportunity to grow in a guided environment 
             and help them with the right resources to work in the direction of the upliftment of the society by creating tech 
             solutions and developing impactful products.

            </p>
          </div>
          <div>
            <img src={About}></img>
          </div>
        </div>
      </div>
      <div className="stats">
        <div className="home-head">Numbers Speak louder</div>
        <span>
          <div className="stat">
            <div>400+</div>
            <div className="stat-about">community members</div>
          </div>
          <div className="stat">
            <div>40,00,000+</div>
            <div className="stat-about">Average CTC</div>
          </div>
          <div className="stat">
            <div>50+</div>
            <div className="stat-about">Offers bagged</div>
          </div>
          <div className="stat">
            <div>100+</div>
            <div className="stat-about">Sessions taken</div>
          </div>
        </span>
      </div>
      <div className="team">
        <div className="home-head">Co-founders</div>
        <div className="members">
          <div className="member">
            <div className="member-img">
              <img src={Instagram}></img>
            </div>
            <div className="member-detail">
              <div className="member-name">Sejal Gupta</div>
              <div className="member-pos">Analyst at Goldmam Sachs | Researcher | MLSA | Public speaker</div>
            </div>
          </div>
          <div className="member">
            <div className="member-img">
              <img src={Instagram}></img>
            </div>
            <div className="member-detail">
              <div className="member-name">Shivanshi Srivastava</div>
              <div className="member-pos">MTS-2 at Adobe </div>
            </div>
          </div>
          <div className="member">
            <div className="member-img">
              <img src={Instagram}></img>
            </div>
            <div className="member-detail">
              <div className="member-name">Anisha Jindal</div>
              <div className="member-pos">Analyst at Goldmam Sachs </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="faq" id="faq">
        <div>
          <img src={Faq}></img>
        </div>
        <div className="faq-main">
          <div className="home-head">FAQ</div>
          <Accordion>        
            <Accordion.Item eventKey="0">
              <Accordion.Header>Will you teach the basics of these topics as well?</Accordion.Header>
              <Accordion.Body>
              Yes. The prime aim is to strengthen the basics and build the concepts, followed by practice of important interview questions.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Is it free of cost?</Accordion.Header>
              <Accordion.Body>
              Yes. But it will cost your enthusiasm and will to learn every day. This initiative is a drive to push more female candidates towards the wonders of DSA and coding. 

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Will you start from the beginning of DSA? </Accordion.Header>
              <Accordion.Body>
              Yes, we will start from the basics. 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Are there any great perks or incentives?</Accordion.Header>
              <Accordion.Body>
              We conduct fortnightly contests. Being a part of this community, you have access to those contests and ppts of the class.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Is this program linked with some company or some other initiative?</Accordion.Header>
              <Accordion.Body>
              No. This is completely independent of any program named WIT. It is not affiliated with any organisation or company.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
