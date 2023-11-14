import { useEffect } from "react";
import { useCharacters } from "../hooks/useCharacters";
import "../App.css";
import { useEpisode } from "../hooks/episodes";
export function Characters() {
  const { getPersonajes, personajes } = useCharacters();
  useEffect(() => {
    getPersonajes();
  }, []);

  export function Character(props) {
    const { character } = props;
    const { image, name, status, species, origin, location, id, episode } =
      character;

      
  const getStatusColor = (status) => {
    if (status === "Alive") {
      return "vivo";
    }
    if (status === "Dead") {
      return "muerto";
    } else {
      return "desaparecido";
    }
  };

  
    const { getAllEpisodes } = useEpisode();
  
    const episodes = () => {
      const episodes = episode;
      const casiDigitos = episodes.map((str) => str.slice(-2));
      const digitosEpisode = casiDigitos.map((str) => {
        const partes = str.split("/");
        return partes.length > 1 ? partes[1] : str;
      });
      console.log(digitosEpisode);
      return digitosEpisode;
    };

  return (
    <ul className="todo">
      {personajes.map((item, index) => (
        <div className="caja" key={index}>
          <img src={item.image}></img>
          <div className="info">
            <h3>{item.name}</h3>
            <h4>
              <span
                className={`status_icon ${getStatusColor(item.status)}`}
              ></span>
              {item.status} - {item.species}
            </h4>
            <p>Last known location:</p>
            <div className="texto">
              <h2>{item.location.name}</h2>
            </div>
            <p onClick={() => getEpisodes(item.episode)}>Episodes:</p>
            <div className="texto">
              <h3>{item.origin.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}
