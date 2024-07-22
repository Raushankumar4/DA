import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <section className="Hero_Section-Conatiner">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, illum!
          </p>
        </div>
        <div>
          <img className="image" src={imageUrl} alt="Image_Not_Found" />
          <span>
            <img src="/vectorimage" alt="Image_Not_Found" />
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
