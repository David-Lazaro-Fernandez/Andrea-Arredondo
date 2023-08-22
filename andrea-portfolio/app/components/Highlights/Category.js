//create a component called Category and export it
import "./index.css";
const Category = (props) => {
  const { type, title } = props;

  const colors = {
    award: "#FF00C7",
    conference: "#3300FF",
    startup: "#FDFC01",
    other: "black",
  };

  
  return (
    <>
      <div
        className="category-box"
        style={{ backgroundColor: `${colors[type]}`, color: `${type === 'conference' ? 'white': 'black'}` }}
      >
        {title}
      </div>
    </>
  );
};
export default Category;
