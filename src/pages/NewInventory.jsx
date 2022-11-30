import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header, Footer } from "../components/index";
import { API_URL } from "../components/Api";

const NewInventory = () => {
  let history = useNavigate();

  const [items, setItems] = useState(null);
  const [Quantity, setQuantity] = useState(null);
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let btn = null;

  {
    !isLoading
      ? (btn = <button onClick={addInventory}>Add Item</button>)
      : (btn = <button className="opaq">Loading.....</button>);
  }

  async function addInventory() {
    setIsLoading(true);

    await fetch(API_URL)
      .then((response) => response.json())
      .then((response) => {
        setIsLoading(false);
        setResponse(response.result);
        console.log(response.result);

        history("/newinventory");
      })
      .catch((err) => setError(err));
  }

  return (
    <div>
      <Header />

      <div className="row">
        <div className="col-12 col-s-12 p-2">
          <div className="tabs p-3">
            <h1>Add New Item to Inventory</h1>
            <br />
            <label className="fw-bold opaq">ITEMS</label>
            <br />
            <br />
            <input
              type="text"
              onChange={(e) => {
                setItems(e.target.value);
              }}
            />
            <br />
            <br />
            <br />
            <label className="fw-bold opaq">QUANTITY</label>
            <br />
            <br />
            <input
              type="text"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <br />
            <br />
            <br />
            <label className="fw-bold opaq">PRICE (in #)</label>
            <br />
            <br />
            <input
              type="text"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <br />
            <br />
            <br />

            {btn}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewInventory;
