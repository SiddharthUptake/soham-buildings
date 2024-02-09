import React from "react";
import "./banner.css";
import img1 from "../../assets/drone/b1.jpg";
import img2 from "../../assets/drone/b2.jpg";
import img3 from "../../assets/drone/b3.jpg";
import Slider from "react-slick";
import Card from "./Card";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <section className="bannerSlider">
    <Slider {...settings}>
      <Card
        image={img1}
        title="Welcome to Soham Industrial Park, where innovation and industrial excellence converge amidst lush, green landscapes."
        content="LOCATED ONLY 12 KMS FROM SARDAR PATEL RING ROAD AND 15 KMS FROM NAROL CIRCLE"
      />
      <Card
        image={img2}
        title="An Industrial park that is designed and executed keeping all the basic industrial needs on the mind."
        content="SPECIAL INDUSTRIAL FEEDER FOR UNINTERRUPTED AND STABLE POWER SUPPLY"
      />
      <Card image={img3} 
      title="Park is ready with all the amenities ready and the basic infrastructure in sound condition."
      content="PLOTS VARYING FROM 1000 SQ YARDS TO 50000 SQ YARDS"/>
    </Slider>
    </section>
  );
};

export default Banner;
