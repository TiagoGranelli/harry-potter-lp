import React from "react";
import "./CharacterCard.scss";

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Date of Birth: {character.dateOfBirth}</p>
      <p>House: {character.house}</p>
      <p>Patronus: {character.patronus}</p>
      <p>Actor: {character.actor}</p>
      <p>Status: {character.alive ? "Alive" : "Deceased"}</p>
    </div>
  );
}

export default CharacterCard;
