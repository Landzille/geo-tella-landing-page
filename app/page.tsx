import About from "@/components/about";
import ComingSoon from "@/components/comingSoon";
import Copyright from "@/components/copyright";
import Footer from "@/components/footer";
import GeotellaComp from "@/components/geotela";
import HeroSection from "@/components/heroSection/page";
import HowitWorks from "@/components/howItWorks";
import OtherStuffs from "@/components/otherstuffs";
import WhatWeDo from "@/components/whatWeDo";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <WhatWeDo />
      <HowitWorks />
      <OtherStuffs />
      <GeotellaComp />
      <ComingSoon />
      <Footer />
      <Copyright />
    </div>
  );
};

export default LandingPage;
