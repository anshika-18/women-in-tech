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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
            deleniti excepturi dolorum tempora qui molestiae velit beatae
            incidunt, quos, odio earum pariatur necessitatibus blanditiis
            officia adipisci corporis dolor quis explicabo.
          </p>
          <Link to="/register">
            <Button className="but-join" variant="outline-dark">
              Join Us
            </Button>
          </Link>
        </div>
      </div>
      <div className="about">
        <img src={Wave}></img>
        <div className="about-main">
          <div className="about-main-1">
            <h2>About Us</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium minus nisi temporibus eaque dolorum ipsum magni
              voluptate quod, inventore dignissimos! Minima amet nulla in est
              velit placeat fugit exercitationem quae!
            </p>
          </div>
          <div>
            <img src={About}></img>
          </div>
        </div>
      </div>
      <div className="stats">
        <div className="stats-head">Numbers Speak louder</div>
        <span>
          <div className="stat">
            <div>200+</div>
            <div className="stat-about">community members</div>
          </div>

          <div className="stat">
            <div>200+</div>
            <div className="stat-about">companies</div>
          </div>
          <div className="stat">
            <div>200+</div>
            <div className="stat-about">offers and scholarship bagged</div>
          </div>
          <div className="stat">
            <div>22,00,000+</div>
            <div className="stat-about">Average CTC</div>
          </div>
        </span>
      </div>
      <div className="team">
        <div className="team-head">Meet our team</div>
        <div className="members">
          <div className="member">
            <div className="member-img">
              <img src={Instagram}></img>
            </div>
            <div className="member-detail">
              <div className="member-name">Anshika Jain</div>
              <div className="member-pos">Intern at SAP</div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="faq">
        <div>
          <img src={Faq}></img>
        </div>
        <div className="faq-main">
          <h1>FAQ</h1>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div className="footer">
        <div className="footer-div">
          <div>
            <img src={Logo}></img>
          </div>
          <div className="contact-footer">
            <div className="link-1">Contact Us</div>
            <div className="link-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              eveniet, fugit non incidunt ad dolorem quaerat
            </div>
          </div>
          <div className="link-footer">
            <div className="link-1">Follow Us</div>
            <div className="link-3">
              <div>ifgiuevw cavuivciovcoewvi jvcifqvewa</div>
              <br></br>
              <a>
                <img src={LinkedIn}></img>
              </a>
              <a>
                <img src={Instagram}></img>
              </a>
              <a>
                <img src={Youtube}></img>
              </a>
              <a>
                <img src={Github}></img>
              </a>
            </div>
          </div>
        </div>
        <div className="rights">@2022 WIT++ All rights reserved</div>
      </div>
    </div>
  );
}
