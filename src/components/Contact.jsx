import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const Contact = () => {
  return (
    <Container className="mt-5 contact-container">
      <h2 className="mb-4 contact-heading ">Contact Us</h2>
      <Row>
        <Col md={6} className="mb-4">
          <div className="contact-info">
            <h4 className="mb-3">Location</h4>
            <p>SOHAM INDUSTRIAL PARK BAREJA-MAHIJADA-DHOLKA ROAD VILLAGE- MAHIJADA</p>
            <p> TAL, Gujarat 382425</p>
          </div>
        </Col>
        <Col md={6} className="mb-4">
          <div className="contact-info">
            <h4 className="mb-3">Contact Information</h4>
            <p>Email: info@sohamindustry.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </Col>
      </Row>

      {/* Map Section */}
      <Row>
        <Col>
          <div className="map-container">
            <h4 className="m-2">Our Location on Map</h4>
            <iframe
              title="industry-location-map"
              width="100%"
              height="300"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117675.01958001863!2d72.4448737889519!3d22.82674571290576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8d78a5d9d423%3A0x51c991cad85d2c20!2sSoham%20Industrial%20Park!5e0!3m2!1sen!2sin!4v1704711163168!5m2!1sen!2sin"
              allowFullScreen=""
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
