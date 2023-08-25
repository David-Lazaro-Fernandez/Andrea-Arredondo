"use client"
import ImageContainer from "./ImageContainer";
import "./index.css";
import {allAndreaPosts, AndreaPost} from '.contentlayer/generated'
import { useState } from "react";
const Extracurricular = () => {
  
  const posts = allAndreaPosts.filter(post => post.postType === 'Extracurricular')
  return (
    <>
      <section id="Extracurricular">
        <div className="section-title">Extracurricular Activities</div>
        <div className="gallery-container">
          <div className="column" style={{ marginTop: "40px" }}>
            {posts.map((post,idx)=>
            <ImageContainer key={idx} post={post}  />
          )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Extracurricular;



// <ImageContainer
// date="2023"
// title="Morelos"
// subtitle="Mentora"
// image="./img/clubes2.png"
// openModal={openModal}
// />
// </div>

// <div className="column" style={{ marginTop: "180px" }}>
// <ImageContainer
// date="2023"
// title="Morelos"
// subtitle="Mentora"
// image="./img/Tigre2.png"
// openModal={openModal}
// />
// <ImageContainer
// date="2023"
// title="Morelos"
// subtitle="Mentora"
// image="./img/RIIAA.jpg"
// openModal={openModal}
// />
// </div>

// <div className="column" style={{ marginTop: "0px" }}>
// <ImageContainer
// date="2023"
// title="Morelos"
// subtitle="Mentora"
// image="./img/clubes.jpg"
// openModal={openModal}
// />
// <ImageContainer
// date="2023"
// title="Morelos"
// subtitle="Mentora"
// image="./img/clubes3.png"
// openModal={openModal}
// />