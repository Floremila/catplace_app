import React, { useState } from "react";
import { User } from "../interfaces/User"; 
import "../App.css";

const Home: React.FC = () => {

  const [user, setUser] = useState<User>({
    name: "Guest",
    catsSeen: 0,
  });


  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      name: event.target.value, // Actualizamos el nombre con lo que escribe el usuario
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

      <p>
        <strong>{user.name}</strong> has seen {user.catsSeen} cats today.
      </p>

      <button onClick={handleSeeCat} className="cat-button">
        I've seen a cat!
      </button>
    </div>
);

};

export default Home;

