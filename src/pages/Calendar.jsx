import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Footer } from "../components/index";
import { API_URL } from "../components/Api";

const Calendar = () => {
  let history = useNavigate();

  const [date, setDate] = useState(null);
  const [task, setTask] = useState(null);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let btn = null;

  {
    !isLoading
      ? (btn = <button onClick={addTask}>Add</button>)
      : (btn = <button className="opaq">Loading.....</button>);
  }

  async function addTask() {
    setIsLoading(true);

    await fetch(API_URL)
      .then((response) => response.json())
      .then((response) => {
        setIsLoading(false);
        setResponse(response.result);
        console.log(response.result);
        history("/calendar");
      })
      .catch((err) => setError(err));
  }

  return (
    <div>
      <Header />

      <div className="row">
        <div className="col-12 col-s-12 p-2">
          <div className="tabs p-3">
            <h1>Add New Task</h1>
            <br />
            <label
              className="fw-bold opaq"
              onChange={(e) => setDate(e.target.value)}
            >
              DATE
            </label>
            <br />
            <br />
            <input type="date" />
            <br />
            <br />
            <br />
            <label className="fw-bold opaq">TASK</label>
            <br />
            <br />
            <textarea
              rows="5"
              onChange={(e) => setTask(e.target.value)}
            ></textarea>
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

export default Calendar;
