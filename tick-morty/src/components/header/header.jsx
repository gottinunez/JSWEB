import { Svgfondo } from "../utilidades/svgfondo";
function Header() {
  return (
    <header>
      <div className="fotoyboton">
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
        <div className="titulo">
          <h1> The Rick and Morty API</h1>
        </div>
        <div className="Fondo">
          <Svgfondo />
        </div>
      </div>
    </header>
  );
}

export default Header;
