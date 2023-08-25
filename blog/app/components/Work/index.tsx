import Image from 'next/image';
import './index.css'
const Work = () => {
  return (
    <>
      <section id="Work-Experience">
        <div className="section-title">Work</div>
        <div className="container">
          <div className="company-container-blue">
            <Image className="company" width={100} height={100} src="/img/BBVA.png" alt="Logo" />
          </div>
          <div className="info-column">
            <div className="title">BBVA</div>
            <div className="subtitle-container">
              <div className="position">Data Scientist</div>
              <div className="duration">2023 - Present</div>
            </div>
            <div className="horizontal-line-gray"></div>
          </div>
        </div>
        <div className="container">
          <div className="company-container">
            <Image className="company" width={100} height={100} src="/img/IBM.svg" alt="Logo" />
          </div>
          <div className="info-column">
            <div className="title">IBM</div>
            <div className="subtitle-container">
              <div className="position">Data Scientist & Business Analyst</div>
              <div className="duration">2021 - 2023</div>
            </div>
            <div className="horizontal-line-gray"></div>
          </div>
        </div>
        <div className="container">
          <div className="company-container">
            <Image className="company" width={100} height={100} src="/img/DATALOOP.png" alt="Logo" />
          </div>
          <div className="info-column">
            <div className="title">Data Loop</div>
            <div className="subtitle-container">
              <div className="position">Data Scientist</div>
              <div className="duration">2019 - 2021</div>
            </div>
            <div className="horizontal-line-gray"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
