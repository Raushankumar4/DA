import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <section className="Biography_Container">
        <div className="banner">
          <img src={imageUrl} alt="Image_Not_Found" />
        </div>
        <div>
          <p>Biography</p>
          <h3>Who We are</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            expedita, quia quam sed tenetur numquam.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nostrum quibusdam modi architecto quod!
          </p>
        </div>
      </section>
    </>
  );
};

export default Biography;
