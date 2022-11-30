import React, { useState } from "react";
import { API_URL } from "../components/Api";
import { useNavigate } from "react-router-dom";

import { Header, Footer } from "../components/index";

const EditProfile = () => {
  let history = useNavigate();

  const [name, setName] = useState(null);
  const [length, setLength] = useState(null);
  const [width, setWidth] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [tags, setTags] = useState(null);

  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let btn = null;

  {
    !isLoading
      ? (btn = <button onClick={createProfile}>Create profile</button>)
      : (btn = <button className="opaq">Loading.....</button>);
  }

  async function createProfile() {
    setIsLoading(true);

    await fetch(API_URL)
      .then((response) => response.json())
      .then((response) => {
        setIsLoading(false);
        setResponse(response.result);
        console.log(response.result);

        localStorage.setItem("loggedIn", `${name}`);
        history("/profile");
      })
      .catch((err) => setError(err));
  }

  return (
    <div>
      <Header />

      <div className="row">
        <div className="col-12">
          <div className="tabs p-3">
            <h1>Create Profile</h1>
            <br />
            <label className="fw-bold opaq">FARM NAME</label>
            <br />
            <br />
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <br />
            <div className="row">
              <div className="col-5 mr-1">
                <label className="fw-bold opaq">FARM LENGTH (in meters)</label>
                <br />
                <br />
                <input
                  type="text"
                  onChange={(e) => setLength(e.target.value)}
                />
                <br />
                <br />
                <br />
              </div>
              <div className="col-6">
                <label className="fw-bold opaq">FARM WIDTH (in meters)</label>
                <br />
                <br />
                <input type="text" onChange={(e) => setWidth(e.target.value)} />
                <br />
                <br />
                <br />
              </div>
            </div>
            <label className="fw-bold opaq">EMAIL ADDRESS</label>
            <br />
            <br />
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <br />
            <br />
            <label className="fw-bold opaq">PHONE NUMBER</label>
            <br />
            <br />
            <input type="text" onChange={(e) => setPhone(e.target.value)} />
            <br />
            <br />
            <br />
            <label className="fw-bold opaq">TAGS</label>
            <br />
            <br />
            <input type="text" onChange={(e) => setTags(e.target.value)} />
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

export default EditProfile;
