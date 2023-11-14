import { useState } from "react";

export function useEpisode() {
  const [episodios, setEpisodios] = useState([]);

  const getAllEpisodes = (array) => {
    return fetch(`https://rickandmortyapi.com/api/episode/${array}`)
      .then((res) => res.json())
      .then((data) => setEpisodios(data));
  };
  return {
    episodios,
    getAllEpisodios,
  };
}
