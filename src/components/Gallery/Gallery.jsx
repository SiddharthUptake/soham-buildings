import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import c1 from "../../assets/drone/c1.jpg";
import c2 from "../../assets/drone/c2.jpg";
import c3 from "../../assets/drone/c3.jpg";
import c4 from "../../assets/drone/c4.jpg";
import c5 from "../../assets/drone/c5.jpg";
import c6 from "../../assets/drone/c6.jpg";
import c7 from "../../assets/drone/c7.jpg";
import c8 from "../../assets/drone/c8.jpg";

const Gallery = () => {
  const images = [c1, c2, c3, c4, c5, c6, c7, c8];

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container className="mt-5 mb-5">
      <h2>- Gallery</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="gallery-img p-3">
            <img src={image} alt={`img${index + 1}`} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Gallery;
