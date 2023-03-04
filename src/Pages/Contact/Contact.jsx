import React, { useEffect, useState } from "react";
import "./Contact.scss";
import { Button, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";

export default function Contact() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    description: "",
    emailId: "",
  });
  const [error, setError] = useState(false);
  const [errValue, setErrorValue] = useState();
  const [variant, setVarient] = useState("danger");
  const clear = () => {
    setUserDetails({
      firstName: "",
      lastName: "",
      emailId: "",
      description: "",
    });
    setErrorValue("Your Message has been recorded !!");
    setVarient("success");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    //localStorage.setItem("User Details", JSON.stringify(userDetails));
    if (
      (userDetails.firstName == "" || userDetails.lastName == "",
      userDetails.description == "" || userDetails.emailId == "")
    ) {
      setErrorValue("Please enter all details");
      setError(true);
    } else {
      setErrorValue("Your Message has been recorded !!");
      setVarient("success");
      setError(true);
      axios

        .post("https://witbackend.vercel.app/query/addQuery", userDetails)
        .then((data) => {
          console.log(data);
          if (data.status == 200) {
          }
        })
        .catch((err) => {
          console.log(err);
        });
      clear();
    }
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
                  value={userDetails.emailId}
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, emailId: e.target.value });
                  }}></input>

                <textarea
                  rows="7"
                  className="contact-input"
                  type="text"
                  placeholder="Message"
                  value={userDetails.description}
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      description: e.target.value,
                    });
                  }}></textarea>
                {error ? (
                  <Alert key={variant} variant={variant}>
                    * {errValue}
                  </Alert>
                ) : (
                  <></>
                )}
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
