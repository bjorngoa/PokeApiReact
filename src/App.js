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

      /* .then((res) => {
        console.log(res.data)
        setNames(res.data)
      }) */
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
    const hyphen = pokemon.name.lastIndexOf("-") + 1 + pokemon.name;
    const changeCase = () => {
      hyphen.toUpperCase();
    };
    if (pokemon.name.lastIndexOf("-") + 1) {
      /* console.log(pokemon.name.lastIndexOf('-') + pokemon.name.toUpperCase()) */
      changeCase();
    }
    return (
      <option key={idx} value={pokemon.name}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
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
