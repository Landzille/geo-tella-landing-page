import About from "@/components/about";
import ComingSoon from "@/components/comingSoon";
import Copyright from "@/components/copyright";
import Footer from "@/components/footer";
import ForEveryOne from "@/components/forEveryOne";
// import GeotellaComp from "@/components/geotela";
import GroundTruth from "@/components/growthTruth";
import HeroSection from "@/components/heroSection/page";
import HowitWorks from "@/components/howItWorks";
import OtherStuffs from "@/components/otherstuffs";
import VerificationBand from "@/components/verificationBand";
import WhatWeDo from "@/components/whatWeDo";
// import WorldCupBand from "@/components/worldCupBand";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <WhatWeDo />
      <VerificationBand />
      <HowitWorks />
      <OtherStuffs />
      {/* <GeotellaComp /> */}
      <ForEveryOne />
      {/* <WorldCupBand /> */}
      <GroundTruth />
      <ComingSoon />
      <Footer />
      <Copyright />
    </div>
  );
};

export default LandingPage;
