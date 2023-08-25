"use client"
import ImageContainer from "./ImageContainer";
import "./index.css";
import {allAndreaPosts, AndreaPost} from '.contentlayer/generated'
import { useState } from "react";

const Extracurricular = () => {
  
  const posts = allAndreaPosts.filter(post => post.postType === 'Extracurricular');

  // Función para dividir un array en subgrupos
  const chunkArray = (array:AndreaPost[], size: number) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  };

  const getMarginTop = (idx:number) => {
    switch(idx) {
      case 0:
        return '40px';
      case 1:
        return '180px';
      case 2:
        return '0px'; 
      default:
        return '0px';
    }
  }
  // Dividir los posts en subgrupos de 3
  const postChunks = chunkArray(posts, 3);

  return (
    <>
      <section id="Extracurricular">
        <div className="section-title">Extracurricular Activities</div>
        <div className="gallery-container">
          {postChunks.map((chunk, index) => (
            <div key={index} className="column" style={{ marginTop: getMarginTop(index)}}>
              {chunk.map((post, idx) => (
                <ImageContainer key={idx} post={post} />
              ))}
            </div>
          ))}
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