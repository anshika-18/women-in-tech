import React from "react";
import "./Event.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import About from "../../Images/about.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

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
  const event = useParams().topic;

  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log(event);
    axios
      //.get("https://wit-backend.cyclic.app/event/getEvent/" + event)
      .get("https://wit-backend.onrender.com/event/getEvent/" + event)
      .then((data) => {
        if (data.data.length >= 1) {
          console.log(data.data);
          setData(data.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [currentDays, changeDays] = useState();
  const [currentHours, changeHours] = useState();
  const [currentMinutes, changeMinutes] = useState();
  const [currentSeconds, changeSeconds] = useState();

  function checkTime() {
    const difference = moment(data.date).diff(moment(), "second");
    const days = Math.floor(difference / (60 * 60 * 24));
    const hours = Math.floor((difference / (60 * 60)) % 24);
    const minutes = Math.floor((difference / 60) % 60);
    const seconds = Math.floor(difference % 60);
    changeSeconds(seconds);
    changeMinutes(minutes);
    changeHours(hours);
    changeDays(days);
    console.log("hi");
  }

  setInterval(checkTime, 1000);

  return (
    <div className="event">
      <div className="event-single-timeRem">
        {moment().diff(moment(data.date), "seconds") > 0 ? (
          <>EVENT COMPLETED</>
        ) : (
          <>
            {currentDays} days {currentHours} hours {currentMinutes} minutes{" "}
            {currentSeconds} seconds
          </>
        )}
      </div>

      <br></br>
      {}
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
              <div className="event-single-head">{data.topic}</div>
              <div className="event-details">
                <div className="event-time">
                  {/* <div className="register-head">Register Today</div> */}
                  <div>
                    <span>DATE: </span>
                    {moment(data.date).format("DD/MM/YYYY")}
                  </div>
                  <div>
                    <span>TIME: </span> {moment(data.date).format("LT")}
                  </div>
                </div>
                <div>
                  Calling on students interested in {data.topic} and related
                  areas. Kindly fill the google form to confirm your presence
                  and receive the link.
                </div>
                <div className="event-speaker">Speaker : {data.speaker}</div>
                {moment().diff(moment(data.date), "seconds") > 0 ? (
                  <>
                    <Button className="mt-2 w-100" variant="secondary" disabled>
                      Registration Closed
                    </Button>
                  </>
                ) : (
                  <>
                    <a
                      target="_blank"
                      href="https://docs.google.com/forms/d/1D-SaYu-1rWGx8OD7sB6ow5KjhR_6L0YrN9vN9cenjPs/edit?ts=61eebcb2#response=ACYDBNgH0HnV8RWttMjLcX5X2w4LmqXvuLfXTzvv-xv-i940MS6Y7HfurM9kYNWHpw">
                      <Button
                        className="mt-2 w-100"
                        variant="outline-secondary">
                        Register
                      </Button>
                    </a>
                  </>
                )}
              </div>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            alignItems: "center",
            padding: "30px",
            paddingBottom: "60px",
          }}>
          <Col md={12}>
            <div className="event-description">
              <h2>Description </h2>
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
        </Row>
      </Container>
    </div>
  );
}
