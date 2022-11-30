import React from "react";

import { Header, Footer } from "../components/index";

const Profile = () => {
  return (
    <div>
      <Header />

      <div className="row">
        <div className="col-12">
          <div className="tabs p-3">
            <h1 className="mb-1">Lawrence Farms</h1>
            <p className="opaq">232x349 sqm</p>
            <p className="fw-bold text-capital opaq">
              Tags: Chicken, Cow, Ram, Maize, Rice
            </p>
            <br />
            <hr />
            <br />
            <p className="fw-bold text-capital opaq">
              Email: lawrencefarms@gmail.com
            </p>
            <p className="fw-bold text-capital opaq">Tel: +2347063785030</p>
            <br />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
