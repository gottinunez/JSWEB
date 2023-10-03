import { useEffect } from "react";
import { useCharacters } from "../hooks/useCharacters";
import "../App.css";

export function Characters() {
  const { getPersonajes, personajes } = useCharacters();
  useEffect(() => {
    getPersonajes();
  }, []);
  return (
    <ul className="todo">
      {personajes.map((item, index) => (
        <div className="personajes" key={index}>
          <div className="img">
            <img src={item.image}></img>
          </div>
          <div className="info">
            <h3>{item.name}</h3>
            <p>
              {item.status} - {item.species}
            </p>
            <p>Last known location:</p>
            <h3>{item.location.name}</h3>
            <p>First seen in:</p>
            <h3>{}</h3>
          </div>
        </div>
      ))}
    </ul>
  );
}
