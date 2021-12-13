import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollReveal from "../../utils/ScrollReveal";
import ReactGA from "react-ga";

import Hero from "../../Components/sections/Hero";
import FeaturesTiles from "../../Components/sections/FeaturesTiles";

import Cta from "../../Components/sections/Cta";
import Header from "../../Components/layout/Header";
import Footer from "../../Components/layout/Footer";
// Initialize Google Analytics
ReactGA.initialize("UA-000000-01");

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const LandPage = () => {
  const childRef = useRef();
  let location = useLocation();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <>
          {!token && (
            <Header navPosition="right" className="reveal-from-bottom" />
          )}
          <Hero className="illustration-section-01" />
          <FeaturesTiles />
          <Cta split />
          {!token && <Footer />}
        </>
      )}
    />
  );
};

export default LandPage;
