import { useEffect } from "react";
import { useCharacters } from "../hooks/useCharacters";
import "../App.css";

export function Characters() {
  const { getPersonajes, personajes } = useCharacters();
  useEffect(() => {
    getPersonajes();
  }, []);

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
            <h3>Last known location:</h3>
            <h2>{item.location.name}</h2>
            <h3>First seen in:</h3>
          </div>
        </div>
      ))}
    </ul>
  );
}
