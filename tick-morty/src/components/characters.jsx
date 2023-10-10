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
          <div class="imgyinfo">
            <div className="img">
              <img src={item.image}></img>
            </div>
            <div className="info">
              <h3>{item.name}</h3>
              <p>
                {item.status} - {item.species}
              </p>
              <h3>Last known location:</h3>
              <h2>{item.location.name}</h2>
              <h3>First seen in:</h3>
              <h2>{item.origin.name}</h2>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}
