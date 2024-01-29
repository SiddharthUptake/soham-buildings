import { useEffect } from 'react';
// import { ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh(); 
  }, []);

  const features = [
    'NA - NOC - TITLE CLEAR LAND',
    'PLOTS VARYING FROM 1000 SQ YARDS TO 50000 SQ YARDS',
    'LOCATED ONLY 12 KMS FROM SARDAR PATEL RING ROAD AND 15 KMS FROM NAROL CIRCLE',
    'RCC ROADS',
    '18 MTR WIDE MAIN ROAD',
    '15 AND 12 MTRS WIDE BRANCH ROADS',
    'STREET LIGHT',
    'CCTC CAMERA',
    'ADEQUATE WATER SUPPLY',
    'DRAINAGE CONNECTION',
    'SPECIAL INDUSTRIAL FEEDER FOR UNINTERRUPTED AND STABLE POWER SUPPLY',
    '24X7 SECURITY',
    'THE PARK IS WITHIN THE SPECIFIED AREA OF DELHI MUMBAI INDUSTRIAL CORRIDOR AND JUST BESIDES THE UPCOMING DELHI MUMBAI FREIGHT CORRIDOR',
  ];

  return (
    <>
      <section className="about-banner">
        <div className="banner-title">
          <h1>Salient Features</h1>
        </div>
      </section>
      <div className="container" id='abt-id'>
        <div className="banner-content mt-5">
          <ol>
            {features.map((feature, index) => (
              <li
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              data-aos-duration="800"
              data-aos-anchor={`[data-aos-anchor="fade-up-${index - 1}"]`}
            >
              {feature}
            </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default About;
