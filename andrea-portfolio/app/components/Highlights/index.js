import Category from "./Category";
import "./index.css";
import {getAllFilesMetadata} from '../../services/getMarkdown'

// const files = getAllFilesMetadata();
const Highlights = () => {
  return (
    <>
      {/* {files.map((file) => {
        <div>
          {file}
        </div>
      })} */}
      <section id="Highlights">
        <div className="section-title">Highlights</div>
        <div className="carousel-container">
          <div className="card">
            <div className="card-image">
              <Category type="award" title="Award" />
              <img src="img/highlight 1.png" alt="Imagen 1" />
            </div>
            <div className="card-content">
              <div className="title">Top 100 Technologist To Watch</div>
              <div className="subtitle">Women Who Code</div>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <Category type="conference" title="Conference" />
              <img src="img/highlight 2.png" alt="Imagen 2" />
            </div>
            <div className="card-content">
              <div className="title">
                She++: Empowering Future Role Models in Tech
              </div>
              <div className="subtitle">She++</div>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
                <Category type="startup" title="Startup" />
              <img src="img/highlight 3.png" alt="Imagen 2" />
            </div>
            <div className="card-content">
              <div className="title">
                Be Digital Idea Showcase: Innovating Ideas in IBM
              </div>
              <div className="subtitle">IBM</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Highlights;
