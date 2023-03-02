import React, { useEffect, useState } from "react";
import "./Contact.scss";
import { Button, Col, Row, Container } from "react-bootstrap";

export default function Contact() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    college: "",
    message: "",
  });
  const clear = () => {
    setUserDetails({
      firstName: "",
      lastName: "",
      email: "",
      college: "",
      message: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    localStorage.setItem("User Details", JSON.stringify(userDetails));
    clear();
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="contact_container">
      <Container fluid>
        <Row className="contact">
          <Col md={7}>
            <div className="contact-main">
              <h1 className="contact-head">Get in Touch</h1>
              <form onSubmit={handleSubmit}>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="First Name"
                  value={userDetails.firstName}
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      firstName: e.target.value,
                    });
                  }}></input>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Last Name"
                  value={userDetails.lastName}
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      lastName: e.target.value,
                    });
                  }}></input>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="E-Mail"
                  value={userDetails.email}
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, email: e.target.value });
                  }}></input>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="College"
                  value={userDetails.college}
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, college: e.target.value });
                  }}></input>
                <textarea
                  rows="7"
                  className="contact-input"
                  type="text"
                  placeholder="Message"
                  value={userDetails.message}
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, message: e.target.value });
                  }}></textarea>
                <Button
                  variant="secondary"
                  className="contact-button"
                  type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
