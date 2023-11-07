import { Svgfondo } from "../utilidades/svgfondo";
import { Svgtop } from "../utilidades/svgtop";
function Header() {
  return (
    <header>
      <div className="minifoto">
        <Svgtop />
        <div className="botones">
          <a className="docs" href="https://rickandmortyapi.com/documentation">
            Docs
          </a>
          <a className="dous_about" href="https://rickandmortyapi.com/about">
            about
          </a>
          <a
            className="SupportUS"
            href="https://rickandmortyapi.com/support-us/"
          >
            SUPPORT US
          </a>
        </div>
      </div>
      <div className="titulo">
        <h1> The Rick and Morty API</h1>
      </div>
      <div className="Fondo">
        <Svgfondo />
      </div>
    </header>
  );
}

export default Header;
