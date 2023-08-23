//create a component called Extracurricular and export it
import ImageContainer from "./ImageContainer";
import "./index.css";
const Extracurricular = (props) => {
  const { openModal } = props;
  return (
    <>
      <section id="Extracurricular">
        <div className="section-title">Extracurricular Activities</div>
        <div className="gallery-container">
          <div className="column" style={{ marginTop: "40px" }}>
            <ImageContainer
              date="2023"
              title="Morelos"
              subtitle="Mentora"
              image="./img/morelos.jpg"
              openModal={openModal}
            />
            <ImageContainer
              date="2023"
              title="Morelos"
              subtitle="Mentora"
              image="./img/clubes2.png"
              openModal={openModal}
            />
          </div>

          <div className="column" style={{ marginTop: "180px" }}>
            <ImageContainer
              date="2023"
              title="Morelos"
              subtitle="Mentora"
              image="./img/Tigre2.png"
              openModal={openModal}
            />
            <ImageContainer
              date="2023"
              title="Morelos"
              subtitle="Mentora"
              image="./img/RIIAA.jpg"
              openModal={openModal}
            />
          </div>

          <div className="column" style={{ marginTop: "0px" }}>
            <ImageContainer
              date="2023"
              title="Morelos"
              subtitle="Mentora"
              image="./img/clubes.jpg"
              openModal={openModal}
            />
            <ImageContainer
              date="2023"
              title="Morelos"
              subtitle="Mentora"
              image="./img/clubes3.png"
              openModal={openModal}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Extracurricular;
