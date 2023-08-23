import "./index.css";
const ImageContainer = (props) => {
  const { title, subtitle, date, image, openModal } = props;
  return (
    <>
      <div className="image-container" onClick={openModal(id)}>
        <img src={image} alt="Morelos" />
        <div className="overlay">
          <div className="date">{date}</div>
          <div className="overlay-title">{title}</div>
          <div className="overlay-sub">{subtitle}</div>
        </div>
      </div>
    </>
  );
};
export default ImageContainer;
