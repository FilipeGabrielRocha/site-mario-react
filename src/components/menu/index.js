import { Link } from "react-router-dom";
import logoMario from "../../assets/img/logo-chapeu-mario.png";
import "./menu.css";

const Menu = () => {
  return (
    <header className="cabecalho">
      <Link>
        <img className="logo" src={logoMario} alt="Logo chapéu mario" />
      </Link>
      <nav>
        <ul className="menu">
          <li className="li">
            <Link className="a" to={"/"}>
              Home
            </Link>
          </li>
          <li className="li">
            <Link className="a" to={"/"}>
              Detalhes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Menu };
