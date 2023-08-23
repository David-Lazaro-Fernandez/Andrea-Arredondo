import "./inde.css";
const Contact = () => {
  return (
    <>
      <section id="Contact">
        <div className="contact-wrapper">
          <h1>SAY HOLA</h1>
          <h2>Do you want to build awesome things?</h2>
          <div className="free">
            <p>
              Feel free to send me an email to{" "}
              <a href="mailto:hiandrea@gmail.com">hiandrea@gmail.com</a>{" "}
            </p>
            <p>or</p>
            <p>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D">
                (click here)
              </a>{" "}
              to send me a DM with your idea
            </p>
            <p>or</p>
            <p>
              if you just want to talk use my{" "}
              <a href="https://calendly.com">calendly</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
