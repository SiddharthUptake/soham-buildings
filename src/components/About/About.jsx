import React from "react";
import { Col, Container, Row } from "reactstrap";
import img1 from "../../assets/drone/one.jpg";
import img2 from "../../assets/drone/two.jpg";
import img3 from "../../assets/drone/three.jpg";
import img4 from "../../assets/drone/four.jpg";

const About = () => {
  return (
    <Container id="about" className="">
     
      <Row className="pt-5  flex-column-reverse flex-lg-row ">
        <Col
          lg={6}
          className="d-flex jusify-content-center align-items-center abt-col "
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <Row>
            <Col lg={6}>
              <div className="abt abt-image ">
                <img src={img1} alt="img1" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="abt abt-image">
                <img src={img2} alt="img2" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="abt abt-image">
                <img src={img3} alt="img3" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="abt abt-image ">
                <img src={img4} alt="img4" />
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          lg={6}
          className="d-flex jusify-content-center align-items-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="abt-desc">
            <h2>About Us</h2>
            <h4>- SOHAM INDUSTRIAL PARK</h4>
            <p>
              Welcome to Soham Industrial Park, where innovation and industrial
              excellence converge amidst lush, green landscapes. Our expansive
              complex spans acres of carefully designed infrastructure, boasting
              an array of cutting-edge facilities meticulously crafted to propel
              businesses towards unparalleled success. Strategically positioned
              for seamless connectivity and accessibility, our park fosters a
              vibrant ecosystem that encourages collaboration and fuels growth.
              Whether you're a fledgling startup or a seasoned industry titan,
              Soham Industrial Park invites you to become part of our community
              and seize boundless opportunities for advancement and prosperity.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
