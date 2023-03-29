import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Tilt from "react-parallax-tilt";
import "./BlogSection.css";
import first from "./1.jpg";
import second from "./2.jpg";
import third from "./3.jpg";

const BlogSection = () => {
  return (
    <div id="blogs">
      <Container>
        <CardDeck>
          <Tilt>
            <Card className="card-resize">
              <Card.Img
                className="image-resize"
                variant="top"
                src={first}
                alt="Blog 1"
              />
              <Card.Body>
                <a
                  className="text-dark text-decoration-none"
                  href="https://medium.com/javascript-in-plain-english/what-are-the-differences-between-state-and-props-in-react-74f21e39b172"
                  target="_blank"
                >
                  <Card.Title>Your Interest First!</Card.Title>
                  <Card.Text>
                    As an independent, fiduciary advisors we have the freedom to
                    develop your financial plan and investment strategy without
                    conflicts of interest. We are not here to sell you products.
                  </Card.Text>
                </a>
              </Card.Body>
            </Card>
          </Tilt>
          <Tilt>
            <Card className="card-resize">
              <Card.Img
                className="image-resize"
                variant="top"
                src={second}
                alt="Blog 3"
              />
              <Card.Body>
                <a
                  className="text-dark text-decoration-none"
                  href="https://medium.com/javascript-in-plain-english/why-i-love-the-spread-operator-58f396dbbb78"
                  target="_blank"
                >
                  <Card.Title>Finantial Mgt</Card.Title>
                  <Card.Text>
                    By integrating comprehensive financial planning and
                    investment management, we’ll help you grow, manage, and
                    protect your wealth, so you can pursue your dreams.
                  </Card.Text>
                </a>
              </Card.Body>
            </Card>
          </Tilt>
          <Tilt>
            <Card className="card-resize">
              <Card.Img
                className="image-resize"
                variant="top"
                src={third}
                alt="Blog 4"
              />
              <Card.Body>
                <a
                  className="text-dark text-decoration-none"
                  href="https://medium.com/javascript-in-plain-english/make-eye-catching-javascript-popups-with-sweet-alert-470e05ed026d"
                  target="_blank"
                >
                  <Card.Title>Finantial Security</Card.Title>
                  <Card.Text>
                    For more than thirty years we’ve been serving the financial
                    needs of individuals, families, and businesses. Our primary
                    goal is to simplify your financial life.
                  </Card.Text>
                </a>
              </Card.Body>
            </Card>
          </Tilt>
        </CardDeck>
      </Container>
    </div>
  );
};
export default BlogSection;
