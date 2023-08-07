import React, { useEffect, useState } from "react";
import "./App.scss";
import CharacterCard from "./components/CharacterCard/CharacterCard";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }, []);

  return (
    <div className="App">
      <h1>Harry Potter Characters</h1>
      <div className="characters-container">
        {characters.map((character, index) => (
          <CharacterCard
            key={`${character.name}-${index}`}
            character={character}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
