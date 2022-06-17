import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import { addBackgroundShadow } from "./Effects";
const baseURL = "https://pokeapi.co/api/v2/";

export default function App() {
  const [names, setNames] = useState([]);
  const [pokeImg, setPokeImg] = useState([]);
  const [pokemonIndex, setPokemonIndex] = useState("");

  /* const pokemonImageFile = () => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
  } */

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(`${baseURL}pokemon?limit=150&`);
      console.log(res.data);
      setNames(res.data.results);
    };
    getPokemon();
  }, []);

  useEffect(() => {
    const getPokeImg = async () => {
      let id = Math.floor(Math.random() * 150) + 1;
      const res = await axios.get(
        `${baseURL}pokemon/${pokemonIndex ? pokemonIndex : "1"}`
      );
      console.log(pokemonIndex);
      console.log(res.data.sprites + "res2");
      console.log(res.data.sprites);
      setPokeImg(res.data.sprites);
    };
    getPokeImg();
  }, [pokemonIndex]);

  const pokemonNames = names.map((pokemon, idx) => {
    //function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    if (pokemon.name.lastIndexOf("-") + 1) {
      //console.log(pokemon.name.lastIndexOf('-') + pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1))
      console.log(
        pokemon.name.replace(/\b[\w']+\b/g, (mName) => {
          return mName.charAt(0).toUpperCase() + mName.substr(1).toLowerCase();
        })
      );

      //{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} -> was option value
    }
    return (
      <option key={idx} value={pokemon.name}>
        {pokemon.name.replace(/\b[\w']+\b/g, (mName) => {
          return mName.charAt(0).toUpperCase() + mName.substr(1).toLowerCase();
        })}
      </option>
    );
  });

  return (
    <div className="App">
      <select onChange={(e) => setPokemonIndex(e.target.value)}>
        {pokemonNames}
      </select>
      <br />
      {/* <img src={pokeImg.front_default} alt=""/> */}
      {/* <img src={pokeImg.front_default} /> */}
      {console.log(pokemonIndex)}
      <Card pokemonIndex={pokemonIndex} pokeImg={pokeImg} />
    </div>
  );
}
