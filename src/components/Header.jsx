import "../assets/styles/header.css";
import logoApp from "../assets/img/logo.png";


function Header() {
  return (
    <header>
      <div className="divIcono">
      <img className="icono" src={logoApp} alt="" />
      <h1 className="oeh">OEH</h1>
      </div>
    </header>
  );
}

export default Header;
