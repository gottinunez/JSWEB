import { useState } from "react";
export function useCharacters() {
  const [personajes, setPersonajes] = useState([]);
  const getPersonajes = () => {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));
  };

  return {
    personajes,
    getPersonajes,
  };
}
