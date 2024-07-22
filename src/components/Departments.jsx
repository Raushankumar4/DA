import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departments = [
    {
      name: "Pediatrics",
      imageUrl: "https://",
    },
    {
      name: "OrthoPedics",
      imageUrl: "https://",
    },
    {
      name: "Cardiology",
      imageUrl: "https://",
    },
    {
      name: "Neurology",
      imageUrl: "https://",
    },
    {
      name: "Oncology",
      imageUrl: "https://",
    },
    {
      name: "Radiology",
      imageUrl: "https://",
    },
    {
      name: "Physical Therapy",
      imageUrl: "https://",
    },
    {
      name: "Dermatology",
      imageUrl: "https://",
    },
    {
      name: "ENT",
      imageUrl: "https://",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="DepartMent">
      <div>
        <h2>Departments</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {departments.map((department, index) => (
            <div className="card" key={index}>
              <div className="departmentName">
                {department.name}
                <img src={department.imageUrl} alt="imageNotFound" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Departments;
