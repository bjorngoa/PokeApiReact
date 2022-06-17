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
      </div>
    </>
  );
};

export default Card;
