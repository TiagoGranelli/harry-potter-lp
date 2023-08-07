import React from "react";
import "./CharacterCard.scss";

function CharacterCard({ character }) {
  if (!character.wizard) {
    return null;
  }

  return (
    <div className="character-card">
      <img src={character.image || "/fallback.jpg"} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Date of Birth: {character.dateOfBirth || "Unknown"}</p>
      <p>House: {character.house || "Unknown"}</p>
      <p>Patronus: {character.patronus || "Don't have"}</p>
      <p>Ancestry: {character.ancestry || "Unknown"}</p>
      <p>Actor: {character.actor}</p>
      <p>Character status: {character.alive ? "Alive" : "Deceased"}</p>
    </div>
  );
}

export default CharacterCard;
