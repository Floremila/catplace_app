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

      <img src="/cat-thumbs-up.png" alt="Cat giving a thumbs up" className="about-image" />
    </div>
  );
};

export default About;

