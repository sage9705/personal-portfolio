import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Twitter, Github } from 'react-bootstrap-icons'; 
import logo from "../assets/img/logo.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="footer-social-icon">
            <a href="https://www.linkedin.com/in/edem-kumahor-1995aa141/" className="social-link"><Linkedin size={24} className="icon" /></a>
                <a href="https://www.x.com/Sushi__boy__" className="social-link"><Twitter size={24} className="icon"/></a>
                <a href="https://www.github.com/Sage9705" className="social-link"><Github size={24} className="icon"/></a>
            </div>
            
          </Col>
          <p className="mt-3 mt-sm-0">Copyright 2024.</p>
        </Row>
        
      </Container>
    </footer>
  )
}
