import React from 'react';
import "./index.css";

type CategoryProps = {
  type: string;
  title: string;
};

const Category: React.FC<CategoryProps> = ({ type, title }) => {
  type ColorMap = { [key: string]: string };

  const color: ColorMap = {
    Award: "#FF00C7",
    Conference: "#3300FF",
    Startup: "#FDFC01",
    Other: "black",
  };

  return (
    <div
      className="category-box"
      style={{ backgroundColor: color[type], color: type === 'Conference' ? 'white' : 'black' }}
    >
      {title}
    </div>
  );
};

export default Category;
