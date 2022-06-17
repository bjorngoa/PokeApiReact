import React from "react";
import { addBackgroundShadow, removeEffects, underline } from "../Effects";

const Card = ({ pokemonIndex, pokeImg }) => {
  return (
    <>
      <div onMouseEnter={underline}>
        <img
          onMouseEnter={addBackgroundShadow}
          onMouseLeave={removeEffects}
          src={pokeImg.front_default}
          alt=""
        />
        <div>
          {pokemonIndex
            ? pokemonIndex.charAt(0).toUpperCase() + pokemonIndex.slice(1)
            : "Bulbasaur"}
        </div>
      </div>
    </>
  );
};

export default Card;
