import React, { useEffect } from "react";
import axios from "axios";
import "./Events.scss";
import { Button, Navbar, nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Audio, ThreeDots } from "react-loader-spinner";
import moment from "moment";

export default function Events() {
  const id = "1";
  const [data, setData] = useState([]);
  const [active, setActive] = useState([]);
  const [archive, setArchive] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    axios
      .get("https://witbackend.vercel.app/event/getEvents")
      //.get("https://wit-backend.cyclic.app/event/getEvents")

      //.get("http://localhost:5001/event/getEvents")
      .then((data) => {
        console.log(data.data);
        setData(data.data.active);
        setActive(data.data.active);
        setArchive(data.data.archive);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="events">
      <div className="events-head">
        <div>Events</div>
      </div>
      <div id="navbar-example2" className="navbar ">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#item-1">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#item-2">
              Archived
            </a>
          </li>
        </ul>
      </div>
      {active.length != 0 ? (
        <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
          <div className="events-main">
            <div id="item-1">
              <div className="active">Active Events</div>
              <div className="type">
                {active.map((curr) => {
                  return (
                    <div className="event-card">
                      <div className="event-img">
                        <img
                          src="https://i.ibb.co/fXK1dVD/sarthak-sir-session.png"
                          alt="sarthak-sir-session"
                          border="0"
                        />
                      </div>
                      <div className="event-content">
                        <h2>{curr.topic}</h2>
                        <div className="event-details">
                          <div className="event-time">
                            <div>
                              <span>DATE: </span>
                              {moment(curr.date).format("DD/MM/YYYY")}
                            </div>
                            <div>
                              <span>TIME: </span>
                              {moment(curr.date).format("LT")}
                            </div>
                          </div>
                        </div>
                        <div className="days-left">
                          {moment().diff(moment(curr.date), "seconds") > 0 ? (
                            <>
                              <Link to={"/events/" + curr.topic}>
                                <Button>Learn More</Button>
                              </Link>

                              <Button disabled className="btn btn-secondary">
                                Register
                              </Button>
                            </>
                          ) : (
                            <>
                              <img src="data:image/png;base64,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"></img>
                              {moment(curr.date).fromNow()}

                              <br></br>

                              <Link to={"/events/" + curr.topic}>
                                <Button>Learn More</Button>
                              </Link>
                              <a
                                target="_blank"
                                class="btn btn-primary"
                                href="https://docs.google.com/forms/d/1D-SaYu-1rWGx8OD7sB6ow5KjhR_6L0YrN9vN9cenjPs/edit?ts=61eebcb2#response=ACYDBNgH0HnV8RWttMjLcX5X2w4LmqXvuLfXTzvv-xv-i940MS6Y7HfurM9kYNWHpw">
                                Register
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div id="item-2">
              <div className="active">Archive Events</div>
              <div className="type">
                {archive.map((curr) => {
                  return (
                    <div className="event-card">
                      <div className="event-img">
                        <img
                          src="https://i.ibb.co/fXK1dVD/sarthak-sir-session.png"
                          alt="sarthak-sir-session"
                          border="0"
                        />
                      </div>
                      <div className="event-content">
                        <h2>{curr.topic}</h2>
                        <div className="event-details">
                          <div className="event-time">
                            <div>
                              <span>DATE: </span>
                              {moment(curr.date).format("DD/MM/YYYY")}
                            </div>
                            <div>
                              <span>TIME: </span>
                              {moment(curr.date).format("LT")}
                            </div>
                          </div>
                        </div>
                        <div className="days-left">
                          {moment().diff(moment(curr.date), "seconds") > 0 ? (
                            <>
                              <Link to={"/events/" + curr.topic}>
                                <Button>Learn More</Button>
                              </Link>

                              <Button disabled className="btn btn-secondary">
                                Register
                              </Button>
                            </>
                          ) : (
                            <>
                              <img src="data:image/png;base64,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"></img>
                              {moment(curr.date).fromNow()}

                              <br></br>

                              <Link to={"/events/" + curr.topic}>
                                <Button>Learn More</Button>
                              </Link>
                              <a
                                target="_blank"
                                class="btn btn-primary"
                                href="https://docs.google.com/forms/d/1D-SaYu-1rWGx8OD7sB6ow5KjhR_6L0YrN9vN9cenjPs/edit?ts=61eebcb2#response=ACYDBNgH0HnV8RWttMjLcX5X2w4LmqXvuLfXTzvv-xv-i940MS6Y7HfurM9kYNWHpw">
                                Register
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loader">
          <ThreeDots
            height="50"
            width="50"
            radius="5"
            color="#7f4ca5"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
    </div>
  );
}
