import React from "react";
import "./Home.scss";
import { Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Background from "../../Images/background.png";
import HomeV from "../../Images/home-v.svg";
import Vector1 from "../../Images/vector1.svg";
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
import google from "../../Images/Company/google.png";
import sap from "../../Images/Company/sap.png";
import ms from "../../Images/Company/ms.svg";
import amazon from "../../Images/Company/amazon.svg";
import ge from "../../Images/Company/ge.png";
import gs from "../../Images/Company/gs.png";
import adobe from "../../Images/Company/adobe.png";
import byjus from "../../Images/Company/byjus.png";
import flipkart from "../../Images/Company/flipkart.svg";
import mw from "../../Images/Company/mw.jpeg";
import ds from "../../Images/Company/ds.png";
import navi from "../../Images/Company/navi.png";
import sf from "../../Images/Company/sf.png";
import synopsys from "../../Images/Company/synopsys.png";
import winzo from "../../Images/Company/winzo.png";
import uc from "../../Images/Company/uc.png";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="home">
      <div className="home-v">
        <img src={Vector1}></img>
        <div className="out-home">
          <div>
            WIT++ <br></br> WOMEN IN TECH
          </div>
          <p>
            WIT++ is a non-profit community to aspire young women enthusiasts to
            grow and learn in a collaborative environment. The main aim of this
            community is to help the members to apprehend the opportunities in
            the field of Computer Science and technology.
          </p>
          <a href="https://forms.gle/pQSr1RkSRTJ9bZdP7" target="_blank">
            <Button className="but-join" variant="outline-dark">
              Join Us
            </Button>
          </a>
        </div>
      </div>
      <hr></hr>
      <div className="company">
        <div className="home-head">Our Success</div>
        <div className="company-images">
          <img src={google}></img>
          <img src={sap}></img>
          <img src={ms}></img>
          <img src={amazon}></img>
          <img src={ge}></img>
          <img src={flipkart}></img>
          <img src={gs}></img>
          <img src={winzo}></img>
          <img src={ds}></img>
          <img src={uc}></img>
          <img src={navi}></img>
          <img src={synopsys}></img>
          <img src={sf}></img>
          <img src={adobe}></img>
          <img src={mw}></img>
          <img src={byjus}></img>
        </div>
      </div>
      <div className="stats">
        <div className="home-head">Numbers Speak Louder</div>
        <span>
          <div className="stat">
            <div>400+</div>
            <div className="stat-about">Community Members</div>
          </div>
          <div className="stat">
            <div>40,00,000+</div>
            <div className="stat-about">Average CTC</div>
          </div>
          <div className="stat">
            <div>50+</div>
            <div className="stat-about">Offers Bagged</div>
          </div>
          <div className="stat">
            <div>100+</div>
            <div className="stat-about">Sessions Taken</div>
          </div>
        </span>
      </div>
      <div className="team">
        <div className="home-head">Co-Founders</div>
        <div className="members">
          <div className="member">
            <div className="member-img">
              <img src="https://i.ibb.co/n72cqCF/IMG-20191109-075146.jpg"></img>
            </div>
            <div className="member-detail">
              <div className="member-name">Sejal Gupta</div>
              <div className="member-pos">
                Analyst at Goldmam Sachs | Researcher | MLSA | Public speaker
              </div>
            </div>
          </div>
          <div className="member">
            <div className="member-img">
              <img src="https://i.ibb.co/FX6qPSG/IMG-20230216-WA0005-01-01.jpg"></img>
            </div>
            <div className="member-detail">
              <div className="member-name">Shivanshi Srivastava</div>
              <div className="member-pos">MTS-2 at Adobe </div>
            </div>
          </div>
          <div className="member">
            <div className="member-img">
              <img src="https://i.ibb.co/5WT4SH1/IMG-20230302-230213.jpg"></img>
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
              <Accordion.Header>
                Will you teach the basics of these topics as well?
              </Accordion.Header>
              <Accordion.Body>
                Yes. The prime aim is to strengthen the basics and build the
                concepts, followed by practice of important interview questions.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Is it free of cost?</Accordion.Header>
              <Accordion.Body>
                Yes. But it will cost your enthusiasm and will to learn every
                day. This initiative is a drive to push more female candidates
                towards the wonders of DSA and coding.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Will you start from the beginning of DSA?{" "}
              </Accordion.Header>
              <Accordion.Body>
                Yes, we will start from the basics.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Are there any great perks or incentives?
              </Accordion.Header>
              <Accordion.Body>
                We conduct fortnightly contests. Being a part of this community,
                you have access to those contests and ppts of the class.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Is this program linked with some company or some other
                initiative?
              </Accordion.Header>
              <Accordion.Body>
                No. This is completely independent of any program named WIT. It
                is not affiliated with any organisation or company.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
