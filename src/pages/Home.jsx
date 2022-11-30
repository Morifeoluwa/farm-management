import React from "react";
import { Link } from "react-router-dom";

import { Header, Footer } from "../components/index";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="row">
        <div className="col-12 col-s-8">
          <div className="row">
            <div className="col-6">
              <Link className="plain" to={"/inventory"}>
                <div className="tabs">
                  <h3>Inventory</h3>
                </div>
              </Link>
            </div>
            <div className="col-6">
              <Link className="plain" to={"/calendar"}>
                <div className="tabs">
                  <h3>Calendar</h3>
                </div>
              </Link>
            </div>
            <div className="col-6">
              <Link className="plain" to={"/barn"}>
                <div className="tabs">
                  <h3>Barn Mangement</h3>
                </div>
              </Link>
            </div>
            <div className="col-6">
              <Link className="plain" to={"/connect"}>
                <div className="tabs">
                  <h3>Connect with other farmers</h3>
                </div>
              </Link>
            </div>

            <div className="col-12">
              <p>
                Need more answers? Try speaking with an expert{" "}
                <Link className="links text-orange" to={"/"}>
                  here
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-s-4">
          <div className="">
            <h3 className="mb-0">Upcoming Reminders</h3>
            <div className="tasks">
              <div className="row">
                <div className="col-2">
                  <div className="text-center">
                    <h1>|</h1>
                  </div>
                </div>
                <div className="col-10">
                  <p>22nd November, 2022</p>
                  <small>Task: Burn the farm</small>
                </div>
              </div>
            </div>

            <div className="tasks">
              <div className="row">
                <div className="col-2">
                  <div className="text-center">
                    <h1>|</h1>
                  </div>
                </div>
                <div className="col-10">
                  <p>22nd November, 2022</p>
                  <small>Task: Burn the farm</small>
                </div>
              </div>
            </div>

            <div className="tasks">
              <div className="row">
                <div className="col-2">
                  <div className="text-center">
                    <h1>|</h1>
                  </div>
                </div>
                <div className="col-10">
                  <p>22nd November, 2022</p>
                  <small>Task: Burn the farm</small>
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

export default Home;
