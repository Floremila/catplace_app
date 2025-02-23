import React, { useState } from "react";
import { User } from "../interfaces/User"; 
import "../App.css";

const Home: React.FC = () => {

  const [user, setUser] = useState<User>({
    name: "Guest",
    email: "cat@catplace.com",
    catsSeen: 0,
  });


  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      name: event.target.value, // Actualizamos el nombre con lo que escribe el usuario
    }));
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      email: event.target.value,
    }));
  };


  const handleSeeCat = () => {
    setUser((prevUser) => ({
      ...prevUser,
      catsSeen: prevUser.catsSeen + 1,
    }));
  };

  return (
    <div className="centered">
      <h1>Welcome to CatPlace</h1>

      <p className="question">What’s your name?</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={user.name}
        onChange={handleNameChange}
        className="input-field"
      />

      <p className="question">What’s your email?</p>
      <input
        type="text"
        placeholder="Enter your email"
        value={user.email}
        onChange={handleEmailChange} 
        className="input-field"
      />

  
      <p className="instructions">
        Click the button for each homeless cat you have seen today.
      </p>

      <button onClick={handleSeeCat} className="cat-button">
        I've seen a cat!
      </button>

      <p>
        <strong>{user.name}</strong> has seen {user.catsSeen} cats today.
      </p>

      <p className="thanks">
        Thanks for helping us! Meoow :)
      </p>
    </div>  
);
};

export default Home;

