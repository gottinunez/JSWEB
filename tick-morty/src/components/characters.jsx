import { useEffect, useState } from "react";
import "../App.css";
export function Characters() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setPersonajes(data.results));
  }, []);
  return (
    <ul>
      {personajes.map((item, index) => (
        <li key={index}>
          <h3>{item.name}</h3>
          <p>
            {item.status} - {item.species}
          </p>
          <p>Last known location:</p>
          <h3>Earth (Replacement Dimension)</h3>
          <p>First seen in:</p>
          <h3>A Rickle in Time</h3>
          <img src={item.image}></img>
        </li>
      ))}
      ;
    </ul>
  );
}
