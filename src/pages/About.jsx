import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const About = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Om Mesical Care Institute"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default About;
