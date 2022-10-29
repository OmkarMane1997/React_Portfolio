import React from "react";
import Html from "../images/html.png";
import Css from "../images/css-3.png";
import Javascript from "../images/js.png";
import Bootstrap from "../images/bootstrap.png";
import ReactJs from "../images/react.png";
import NodeJs from "../images/nodejs.png";
import Mongodb from "../images/database.png";
// import Mysql from "../images/mysql.png";
import GitHub from "../images/github-logo.png";
const Skills = () => {
  return (
    <div className="container">
      <h1 className="text-center my-5"> My Top Skills</h1>
      <div className="row my-2">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 my-2">
          <div className="card">
            <div className="card-header text-center">
              <strong>HTML / HTML5</strong>
            </div>
            <div className="card-body text-center">
              <img src={Html} alt="Html" className="img-fluid w-50 h-50 " />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 my-2">
            <div className="card">
            <div className="card-header text-center">
              <strong>CSS / CSS3</strong>
            </div>
            <div className="card-body text-center">
              <img src={Css} alt="Css" className="img-fluid w-50 h-50" />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 my-2">
            <div className="card">
            <div className="card-header text-center">
              <strong>Javascript / Es6</strong>
            </div>
            <div className="card-body text-center">
              <img src={Javascript} alt="Javascript" className="img-fluid w-50 h-50" />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 my-2">
            <div className="card">
            <div className="card-header text-center">
              <strong>Bootstrap</strong>
            </div>
            <div className="card-body text-center">
              <img src={Bootstrap} alt="Bootstrap" className="img-fluid w-50 h-50" />
            </div>
          </div>
        </div>
      </div>
      <div className="row my-2">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 my-2">
          <div className="card">
            <div className="card-header text-center">
              <strong>ReactJs</strong>
            </div>
            <div className="card-body text-center">
              <img src={ReactJs} alt="ReactJs" className="img-fluid w-50 h-50 " />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 my-2">
            <div className="card">
            <div className="card-header text-center">
              <strong>NodeJs</strong>
            </div>
            <div className="card-body text-center">
              <img src={NodeJs} alt="NodeJs" className="img-fluid w-50 h-50" />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 my-2">
            <div className="card">
            <div className="card-header text-center">
              <strong> MySql / Mongodb</strong>
            </div>
            <div className="card-body text-center">
              <img src={Mongodb} alt="Javascript" className="img-fluid w-50 h-50" />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 my-2">
            <div className="card">
            <div className="card-header text-center">
              <strong>GitHub</strong>
            </div>
            <div className="card-body text-center">
              <img src={GitHub} alt="Mysql" className="img-fluid w-50 h-50" />
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Skills;
