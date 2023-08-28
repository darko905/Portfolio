import React from "react";
import Html from "../../assets/html.svg";
import Css from "../../assets/css.svg";
import Js from "../../assets/JavaScript.png";
import Reactimg from "../../assets/ReactJS.png";
import TypeScriptImg from "../../assets/TypeScript.png";
import Bootstrap from "../../assets/Bootstrap.png";
import GitHub from "../../assets/Git.png";
import Figma from "../../assets/figma.png";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Tech Stack</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img src={Html} alt="Html logo" />
            <div>
              <h3 className="skills__name">Html5</h3>
            </div>
          </div>
          <div className="skills__data">
            <img src={Css} alt="Css logo" />
            <div>
              <h3 className="skills__name">Css3</h3>
            </div>
          </div>
          <div className="skills__data">
            <img src={Js} alt="Js logo" />
            <div>
              <h3 className="skills__name">JavaScript</h3>
            </div>
          </div>
          <div className="skills__data">
            <img src={Reactimg} alt="React logo" />
            <div>
              <h3 className="skills__name">React JS</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <img src={TypeScriptImg} alt="TypeScript logo" />
            <div>
              <h3 className="skills__name">TypeScript</h3>
            </div>
          </div>
          <div className="skills__data">
            <img src={Bootstrap} alt="Bootstrap logo" />
            <div>
              <h3 className="skills__name">Bootstrap</h3>
            </div>
          </div>
          <div className="skills__data">
            <img src={GitHub} alt="GitHub logo" />
            <div>
              <h3 className="skills__name">Git/Github</h3>
            </div>
          </div>
          <div className="skills__data">
            <img src={Figma} alt="Figma logo" />
            <div>
              <h3 className="skills__name">Figma</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
