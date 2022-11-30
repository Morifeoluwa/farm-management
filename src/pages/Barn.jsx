import React, { useState, useEffect } from "react";
import { Header, Footer } from "../components/index";
import { useNavigate } from "react-router-dom";

import { API_URL } from "../components/Api";

const Barn = () => {
  let history = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [price, setPrice] = useState(null);

  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getBarn();
  }, []);

  let btn = null;

  {
    !isLoading
      ? (btn = <button onClick={addProduct}>Add Item</button>)
      : (btn = <button className="opaq">Loading.....</button>);
  }

  async function addProduct() {
    setIsLoading(true);

    await fetch(API_URL)
      .then((response) => response.json())
      .then((response) => {
        setIsLoading(false);
        setResponse(response.result);
        console.log(response.result);

        history("/barn");
      })
      .catch((err) => setError(err));
  }

  async function getBarn() {
    await fetch(API_URL)
      .then((response) => response.json())
      .then((response) => {
        setResponse(response.result);
        console.log(response.result);
      })
      .catch((err) => setError(err));

    return response.map((response) => (
      <tr>
        <td>1</td>
        <td>{response.Product}</td>
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
        <div className="col-8">
          <div className="p-2">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price (in #)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {getBarn}
                <tr>
                  <td>1</td>
                  <td>Cow</td>
                  <td>200</td>
                  <td>200,000</td>
                  <td>
                    <button className="btn-sm">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-4">
          <div className="tabs p-3">
            <label className="fw-bold opaq">PRODUCT</label>
            <br />
            <br />
            <input type="text" onChange={(e) => setProduct(e.target.value)} />
            <br />
            <br />
            <br />
            <label className="fw-bold opaq">QUANTITY</label>
            <br />
            <br />
            <input type="text" onChange={(e) => setQuantity(e.target.value)} />
            <br />
            <br />
            <br />
            <label className="fw-bold opaq">PRICE (in #)</label>
            <br />
            <br />
            <input type="text" onChange={(e) => setPrice(e.target.value)} />
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

export default Barn;
