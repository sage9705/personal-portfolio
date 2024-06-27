import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Twitter, Github } from 'react-bootstrap-icons'; 
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col xs={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="footer-social-icon social-icon">
              <a href="#" className="social-link"><Linkedin size={32} /></a>
              <a href="#" className="social-link"><Twitter size={32} /></a>
              <a href="#" className="social-link"><Github size={32} /></a>
            </div>
            <p className="mt-3 mt-sm-0">Copyright 2024.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
