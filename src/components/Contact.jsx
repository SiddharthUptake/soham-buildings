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
            <p>123 Industry Street</p>
            <p>Cityville, State, 12345</p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d0.000000!3d0.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE4JzEzLjQiTiAwwrAxOCcwMC43Ilc!5e0!3m2!1sen!2sus!4v1605577179174!5m2!1sen!2sus"
              allowFullScreen=""
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
