import "./index.css";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="wrapper">
          <div className="footer-logo">
            <Image
              src="/img/andrea_logo.png"
              width={75}
              height={75}
              alt="Logo"
            />
          </div>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/andrea-monserrat/">LinkedIn</a>
            <a href="https://github.com/Andrea-Monserrat">GitHub</a>
            <a href="https://medium.com/@andrea.monserrat.ar">Medium</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
