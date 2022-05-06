import React from "react";
import "./nav.css";
import Cart from "./Cart";

const NavBar = () => {
  return (
    <nav>
      <div className="lista">
        <a href="#">Inicio</a>
        <a href="#">Pokemones</a>
        <a href="https://las.op.gg/summoners/las/blond%C4%B1e">Lolcito</a>
      </div>
      <Cart />
    </nav>
  );
};

export default NavBar;
