import "./index.css";
const Hero = () => {
  return (
    <section className="column-container">
      <div className="column left-column">
        <p>
          Hi! I&apos;m <span className="bold-text">Andrea Arredondo</span> <br />
          I&apos;m a Mexican Data Scientist & Actuary based in [Mexico City, San
          Jose] passionate about&nbsp;
          <span className="underline-text">science, ai, and cats</span>.
        </p>
      </div>
      <div className="column"></div>
    </section>
  );
};

export default Hero;
