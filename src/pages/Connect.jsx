import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { API_URL } from "../components/Api";
import { Header, Footer } from "../components/index";

const Connect = () => {
  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getFarmers();
  }, []);

  async function getFarmers() {
    await fetch(API_URL)
      .then((response) => response.json())
      .then((response) => {
        setResponse(response.result);
        console.log(response.result);
      })
      .catch((err) => setError(err));

    return response.map((response) => (
      <div className="col-6 col-s-6">
        <div className="farmer-list">
          <h3 className="mb-1">{response.name}</h3>
          <small className="opaq">
            {response.length} by {response.width} sqm
          </small>
          <br />
          <br />
          <Link to={`tel:${response.number}`}>
            <button className="mr-1 btn-sm">Call</button>
          </Link>
          <Link to={`mailto:${response.email}`}>
            <button className="mr-1 btn-sm">Send Mail</button>
          </Link>
          <br />
          <br />
        </div>
      </div>
    ));
  }

  return (
    <div>
      <Header />

      <div className="row">
        <div className="col-12">
          <div className="tabs p-3">
            <h1>Connect Farmers</h1>
            <div className="row">
              {getFarmers}

              <div className="col-6 col-ls-6">
                <div className="farmer-list">
                  <h3 className="mb-1">Obasanjo Farms</h3>
                  <small className="opaq">5362 by 7373 sqm</small>
                  <br />
                  <br />
                  <button className="mr-1 btn-sm">Call</button>
                  <button className="mr-1 btn-sm">Send Mail</button>
                  <br />
                  <br />
                </div>
              </div>

              <div className="col-6 col-ls-6">
                <div className="farmer-list">
                  <h3 className="mb-1">Obasanjo Farms</h3>
                  <small className="opaq">5362 by 7373 sqm</small>
                  <br />
                  <br />
                  <button className="mr-1 btn-sm">Call</button>
                  <button className="mr-1 btn-sm">Send Mail</button>
                  <br />
                  <br />
                </div>
              </div>

              <div className="col-6 col-ls-6">
                <div className="farmer-list">
                  <h3 className="mb-1">Obasanjo Farms</h3>
                  <small className="opaq">5362 by 7373 sqm</small>
                  <br />
                  <br />
                  <button className="mr-1 btn-sm">Call</button>
                  <button className="mr-1 btn-sm">Send Mail</button>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Connect;
