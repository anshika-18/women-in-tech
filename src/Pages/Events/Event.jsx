import React from "react";
import "./Event.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import About from "../../Images/about.png";
import axios from "axios";

export default function Event() {
  // const registerEvent = async () => {
  //   try {
  //     if (localStorage.getItem("emailId")) {
  //       const data = await axios.get(
  //         `http://localhost:5000/getUser/${localStorage.getItem("emailId")}`
  //       );
  //       console.log(data.data[0]);
  //     } else {
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div className="event">
      <div className="event-single-timeRem">1 day 2 hour 20 min 3 seconds</div>
      <Container className="pt-5">
        <Row>
          <Col md={5}>
            <div className="event-banner">
              <img
                src="https://i.ibb.co/fXK1dVD/sarthak-sir-session.png"
                alt="sarthak-sir-session"
                border="0"
              />
            </div>
          </Col>
          <Col className="right-column" md={7}>
            <div className="event-head-1">
              <div className="event-single-head">Web Development</div>
              <div className="event-details">
                <div className="event-time">
                  {/* <div className="register-head">Register Today</div> */}
                  <div>
                    <span>DATE: </span>20 FEB 2022
                  </div>
                  <div>
                    <span>TIME: </span>5:00PM onwards
                  </div>
                </div>
                <div>
                  Calling on students interested in web development and related
                  areas. Kindly fill the google form to confirm your presence
                  and receive the link.
                </div>
                <div className="event-speaker">Speaker : Sarthak Mittal</div>
                <a
                  target="_blank"
                  href="https://docs.google.com/forms/d/1D-SaYu-1rWGx8OD7sB6ow5KjhR_6L0YrN9vN9cenjPs/edit?ts=61eebcb2#response=ACYDBNgH0HnV8RWttMjLcX5X2w4LmqXvuLfXTzvv-xv-i940MS6Y7HfurM9kYNWHpw"
                >
                  <Button className="mt-2 w-100" variant="outline-secondary">
                    Register
                  </Button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ alignItems: "center" }}>
          <Col md={8}>
            <div className="event-description">
              <h2>About</h2>
              Hi everyone!! WIT++ is glad to announce a session on web
              development. An incoming SDE at Amazon, Sarthak Mittal, pursuing
              his graduation from NIT Kurukshetra in Information technology will
              enlighten us on how to start with Web development. We will be
              giving you insight about how to kickstart your journey in
              development. Do you fear participating in a hackathon and have a
              lot of confusion on the same. Worry not, Sarthak Mittal has
              participated in various hackathons and been a finalist of SIH '20
              and he will be there to guide you on what it takes to present
              yourself in a hackathon. WITTY Talks is exclusively for the
              College students. We know you have come this far not just to come
              this far. Kindly fill the google form to confirm your presence and
              receive the link. You may add questions you want the speaker to
              address. <br></br>P.S.- This session is open to all.
            </div>
          </Col>
          <Col md={4}>
            <div className="event-about-image">
              <img src={About}></img>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
