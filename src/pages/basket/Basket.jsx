import React, { useContext } from "react";
import { StateContext } from "../../contex2/context2";
import "./Basket.css";
function Basket() {
  const { state } = useContext(StateContext);
  const { product } = state;

  return (
    <div class="basket_page">
      <h1>Mahsulot</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Name</th>
            <th scope="col">KG</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr>
              <td scope="row">{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.kilo}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Basket;
