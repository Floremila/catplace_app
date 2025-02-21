import React, { useState } from "react";
import { User } from "../interfaces/User"; // Importamos la interfaz
import "../App.css";

const Home: React.FC = () => {
  // Creamos un estado basado en la interfaz User
  const [user, setUser] = useState<User>({
    name: "Guest",
    catsSeen: 0,
  });

  // Función para actualizar el nombre del usuario
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      name: event.target.value, // Actualizamos el nombre con lo que escribe el usuario
    }));
  };

  // Función para incrementar el contador de gatos vistos
  const handleSeeCat = () => {
    setUser((prevUser) => ({
      ...prevUser,
      catsSeen: prevUser.catsSeen + 1,
    }));
  };

  return (
    <div className="centered">
      <h1>Welcome to CatPlace</h1>
      <p>Click the button for each homeless cat you have seen today.</p>

      {/* Input para que el usuario escriba su nombre */}
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

      <button
        onClick={handleSeeCat}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        I've seen a cat!
      </button>
    </div>
  );
};

export default Home;

