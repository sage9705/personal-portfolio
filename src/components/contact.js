import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';


export const Contact = () => {
  const email = process.env.CONTACT_EMAIL;
  const subject = "Contact from Website";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn contact-image" : "contact-image"} src={contactImg} alt="Contact"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn contact-content" : "contact-content"}>
                  <h2 className="contact-title">Get In Touch</h2>
                  <p className="contact-description">If you'd like to get in touch, please click the button below to send an email:</p>
                  <a href={mailtoLink} className="email-button">
                    <button className="contact-button">Send Email</button>
                  </a>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}