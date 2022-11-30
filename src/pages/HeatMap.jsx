import React from "react";
import { Header, Footer } from "../components/index";

const HeatMap = () => {
  return (
    <div>
      <Header />

      <div className="row">
        <div className="col-12">
          <div className="tabs p-3">
            <div className="row">
              <div className="col-6">
                <div className="heatmap">
                  <div className="heat done">1</div>
                  <div className="heat done">2</div>
                  <div className="heat done">3</div>
                  <div className="heat">4</div>
                </div>
                <br />
                <div className="keys text-left">
                  <div className="legend done mr-1"></div> Done
                  &nbsp;&nbsp;&nbsp;
                  <div className="legend mr-1"></div> Not Done
                </div>
              </div>
              <div className="col-6">
                <div className="p-2">
                  <div>
                    <input type="checkbox" /> Section 1
                  </div>
                  <div>
                    <input type="checkbox" /> Section 2
                  </div>
                  <div>
                    <input type="checkbox" /> Section 3
                  </div>
                  <div>
                    <input type="checkbox" /> Section 4
                  </div>
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

export default HeatMap;
