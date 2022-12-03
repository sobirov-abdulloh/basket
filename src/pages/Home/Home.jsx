import React, { useContext, useState } from "react";
import { StateContext } from "../../contex2/context2";
import "./Home.css";

function Home() {
  const { state, dispatch } = useContext(StateContext);
  const [name, setName] = useState("");
  const [kilo, setKilo] = useState("");
  const [price, setPrice] = useState("");

  const addBtn = () => {
    const newInfo = {
      name,
      kilo,
      price,
    };
    dispatch({ type: "ADD_Basket", payload: newInfo });
    setName("");
    setKilo("");
    setPrice("");
  };
  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <h2>Add Product</h2>
      <div className="all_product"></div>

      <form action="">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="add product"
        />
        <input
          value={kilo}
          onChange={(e) => setKilo(e.target.value)}
          type="text"
          placeholder="add product"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="add product"
        />
        <button onClick={addBtn} type="button">
          ADD
        </button>
      </form>
    </div>
  );
}

export default Home;
