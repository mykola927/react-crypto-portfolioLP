import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/profile.svg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-2">
          <strong>Who We Are</strong>
        </h1>
        <Container>
          <Row className=" pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded tex align-text-left ">
                <br />
                <i>
                  HSS Crypto Investment company AG is a cryptocurrency-focused
                  financial investment company legally incorporated in
                  Switzerland in the year 2021, headquartered in Zugerstrasse
                  32, 6340 Baar, Switzerland. Its mission is to provide
                  investors with simple crypto currency investment products with
                  the maximum level of investors' protection and efficiency.
                </i>
                <br />
                <br />
                <i>
                  Established in 2021, as a cryptocurrency fund management
                  company with various focused establishments in Bitcoin and
                  Ethereum Mining facilities, Forex and Stock trading, NFT
                  trading and FinTech Startups, HSS Crypto Investment AG has
                  become a premier cryptocurrency investment platform trusted by
                  thousands of investors worldwide.
                </i>
                <br />
                <br />
                <i>
                  HSS Crypto Investment AG has developed a managed investment
                  system with individual approach to each customer, from
                  cryptocurrency beginners to institutional and Corporate
                  traders. Worldwide coverage, multiple payment and withdrawal
                  options, and 24/7 support are accompanied by the platform
                  stability that guarantees safety of investors assets and data
                </i>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
