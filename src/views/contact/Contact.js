import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import "./contact.css";
import contactImg from "./contact.jpg";
const Contact = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col>
            <img src={contactImg} alt="contact" />
          </Col>
          <Col className="mt-5">
            <h1>Evidence-Based Investing</h1>
            <p style={{ fontSize: "20px" }}>
              <i>
                We build investment portfolios based on the science of the
                financial markets. Decades of research guide our strategy.
              </i>
            </p>
            <Row className="mt-2">
              <Form style={{ width: "100%" }}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="Your Phone Number" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="" />
                </Form.Group>{" "}
                <Button style={{ width: "100%" }}>SEND A MESSAGE</Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Contact;
