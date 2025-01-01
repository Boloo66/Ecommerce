import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSellers from "../components/BestSellers";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
        <LatestCollection />
        <BestSellers />
        <OurPolicy />
        <NewsletterBox />
      </section>
    </div>
  );
};

export default Home;