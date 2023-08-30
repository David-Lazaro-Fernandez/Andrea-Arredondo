"use client";

import "./index.css";
import { useState } from "react";
import Skills from "./skills";
import ToolsGrid from "./toolsGrid";
const Tools = () => {
  const [active, setActive] = useState(1);

  return (
    <>
      <section id="Tools">
        <div className="title-wrapper">
          <div className="section-title">
            {active === 1 ? "Tools I Use Day By Day" : "My Skills"}
          </div>
          <div className="section-buttons">
            <button
              className={`button-1 ${active === 1 ? "active" : ""}`}
              onClick={() => setActive(1)}
              aria-label="See the tools I use"
            >
              <div className="circle"></div>
            </button>
            <button
              className={`button-2 ${active === 2 ? "active" : ""}`}
              onClick={() => setActive(2)}
              aria-label="See my skills"
            >
              <div className="circle"></div>
            </button>
          </div>
        </div>
        <div className={`content ${active === 1 ? "active" : "unactive"}`}>
          <ToolsGrid />
        </div>
        <div className={`content ${active === 2 ? "active" : "unactive"}`}>
          <Skills />
        </div>
      </section>
    </>
  );
};
export default Tools;
