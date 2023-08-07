import React from "react";
import "./CharacterCard.scss";

function CharacterCard({ character }) {
  const getCharacterDetail = (property, fallback) =>
    character[property] || fallback;

  const imageSrc = getCharacterDetail("image", "/fallback.jpg");
  const dateOfBirth = getCharacterDetail("dateOfBirth", "Unknown");
  const house = getCharacterDetail("house", "Unknown");
  const patronus = getCharacterDetail("patronus", "Don't have");
  const ancestry = getCharacterDetail("ancestry", "Unknown");
  const actor = character.actor;
  const characterStatus = character.alive ? "Alive" : "Deceased";

  return (
    <div className="character-card">
      <img src={imageSrc} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Date of Birth: {dateOfBirth}</p>
      <p>House: {house}</p>
      <p>Patronus: {patronus}</p>
      <p>Ancestry: {ancestry}</p>
      <p>Actor: {actor}</p>
      <p>Character status: {characterStatus}</p>
    </div>
  );
}

export default CharacterCard;
