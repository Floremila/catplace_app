import React from "react";
import "../App.css"; 

const About: React.FC = () => {
  return (
    <div className="centered">
      <h1>About Us</h1>
      <p>
        This page collaborates with the kittens from the shelter. <br />
        Every 500 clicks, the company <strong>Royal Catit</strong> donates{" "}
        <strong>$100</strong> to the shelter.
      </p>
    </div>
  );
};

export default About;

