import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Header = () => {
  return (
    <div className="header row">
      <div className="col-6">
        <Link className="plain" to={"/"}>
          <h2 className="header-title text-left">FARM MANAGEMENT</h2>
        </Link>
      </div>
      <div className="col-6 text-right">
        <Link to={"/profile"}>
          <button className="btn-sm mt-3">My profile </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
