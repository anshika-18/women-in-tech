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
      .get("https://witbackend.vercel.app/event/getEvent/" + event)
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
              <img src={data.posterUrl} alt="sarthak-sir-session" border="0" />
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
                    <a target="_blank" href={data.registerUrl}>
                      <Button className="mt-2 w-100">Register</Button>
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
              {data.description}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
