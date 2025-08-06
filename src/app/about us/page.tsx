import React from 'react';
import AboutUs from '../components/about/AboutUs';
import WhyThisAPI from '../components/about/WhyThisApi';
import SupportedSystems from '../components/about/SupportedSystems';
import Resources from '../components/about/Resources';
const AboutPage = () => {
  return (
    <>
      <AboutUs />
      <WhyThisAPI />
      <SupportedSystems/>
      <Resources />
    </>
  );
};

export default AboutPage;

