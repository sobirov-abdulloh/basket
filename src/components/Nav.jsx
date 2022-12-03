import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../contex2/context2";
import { BsBasket3Fill } from "react-icons/bs";
import "./Nav.css";

function Nav() {
  const { state } = useContext(StateContext);
  return (
    <nav>
      <Link className="link" to={"/"}>
        Home
      </Link>
      <Link className="link" to={"basket"}>
        {" "}
        <BsBasket3Fill className="basket" /> <sup>{state.product.length}</sup>
      </Link>
    </nav>
  );
}

export default Nav;
