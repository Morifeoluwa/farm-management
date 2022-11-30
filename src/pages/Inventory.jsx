import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../components/Api";

import { Header, Footer } from "../components/index";

const Inventory = () => {
  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getInventory();
  }, []);

  async function getInventory() {
    setIsLoading(true);

    await fetch(API_URL)
      .then((response) => response.json())
      .then((response) => {
        setIsLoading(false);
        setResponse(response.result);
        console.log(response.result);
      })
      .catch((err) => setError(err));

    return response.map((response) => (
      <tr>
        <td>1</td>
        <td>{response.Items}</td>
        <td>{response.Quantity}</td>
        <td>{response.Price}</td>
        <td>
          <button className="btn-sm">Delete</button>
        </td>
      </tr>
    ));
  }

  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-12 p-2">
          <h1 className="mb-1"># 500,000,000</h1>
          <small className="opaq">INVENTORY BALANCE</small>
          <br />
          <br />
          <br />

          <Link to={"/newinventory"}>
            <button>Add new item</button>
          </Link>
        </div>
      </div>

      <div className="p-3">
        <table className="">
          <thead>
            <tr>
              <th></th>
              <th>Items</th>
              <th>Quantity</th>
              <th>Value(#)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {getInventory}
            {/* <tr>
              <td>1</td>
              <td>Land</td>
              <td>10 Hectares</td>
              <td>7,000,000</td>
              <td>
                <button className="btn-sm">Delete</button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Inventory;
