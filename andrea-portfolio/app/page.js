import "./index.css";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Tools from "./components/Tools";
import Highlights from "./components/Highlights";
export default function Home() {
  return (
    <div class="background">
      <main>
        <nav className="navbar">
          <div>
            <img className="logo" src="/img/andrea_logo.png" />
          </div>
          <ul className="navbar-links">
            <li>
              <a href="#">
                <img src="/img/github.png" />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/x.png" />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/mail.png" />{" "}
              </a>
            </li>
          </ul>
        </nav>
        <Hero />
        <div className="horizontal-line"></div>
        <Work />
        <div className="horizontal-line"></div>
       <Tools />
        <div className="horizontal-line"></div>
       <Highlights />
        <div className="horizontal-line"></div>
        <section id="Extracurricular">
          <div className="section-title">Extracurricular Activities</div>
          <div className="gallery-container">
            <div className="column" style={{ marginTop: "40px" }}>
              <div className="image-container" onClick="openModal('modal1')">
                <img src="./img/morelos.jpg" alt="Morelos" />
                <div className="overlay">
                  <div className="date">2023</div>
                  <div className="overlay-title">Morelos</div>
                  <div className="overlay-sub">Mentora</div>
                </div>
              </div>

              <div className="image-container" onclick="openModal('modal1')">
                <img src="./img/clubes2.png" alt="Clubes 2" />
                <div className="overlay">
                  <div className="date">2023</div>
                  <div className="overlay-title">Morelos</div>
                  <div className="overlay-sub">Mentora</div>
                </div>
              </div>
            </div>

            <div className="column" style={{ marginTop: "180px" }}>
              <div className="image-container" onclick="openModal('modal1')">
                <img src="./img/Tigre2.png" alt="Tigre" />
                <div className="overlay">
                  <div className="date">2023</div>
                  <div className="overlay-title">Morelos</div>
                  <div className="overlay-sub">Mentora</div>
                </div>
              </div>

              <div className="image-container" onclick="openModal('modal1')">
                <img
                  src="./img/RIIAA.jpg"
                  alt="RIIAA"
                  style={{ objectPosition: "-90px" }}
                />
                <div className="overlay">
                  <div className="date">2023</div>
                  <div className="overlay-title">Morelos</div>
                  <div className="overlay-sub">Mentora</div>
                </div>
              </div>
            </div>

            <div className="column" style={{ marginTop: "0px" }}>
              <div className="image-container" onclick="openModal('modal1')">
                <img src="./img/clubes.jpg" alt="Clubes" />
                <div className="overlay">
                  <div className="date">2023</div>
                  <div className="overlay-title">Morelos</div>
                  <div className="overlay-sub">Mentora</div>
                </div>
              </div>

              <div className="image-container" onclick="openModal('modal1')">
                <img
                  src="./img/she.jpg"
                  alt="She plus plus"
                  style={{ objectPosition: "left" }}
                />
                <div className="overlay">
                  <div className="date">2022</div>
                  <div className="overlay-title">
                    She++ 5th Edition: Empowering Future Role Models in
                    Programming and Technology at Tec de Monterrey, Campus León
                  </div>
                  <div className="overlay-sub">Speaker</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="horizontal-line"></div>
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
        <div className="horizontal-line"></div>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <div className="back" onclick="closeModal('modal1')">
              Back
            </div>
            <article>
              <h1 className="modal-h1">
                She++ 5th Edition: Empowering Future Role Models in Programming
                and Technology at Tec de Monterrey, Campus León
              </h1>
              <div className="modal-gal">
                <div className="modal-gal-1" alt="Imagen 1">
                  <img src="img/she1.png" />
                </div>
                <div className="modal-gal-2" alt="Imagen 2">
                  <img src="img/she2.png" />
                </div>
                <div className="modal-gal-3" alt="Imagen 3">
                  <img src="img/she3.png" />
                </div>
                <div className="modal-gal-4" alt="Imagen 3">
                  <img src="img/she4.png" />
                </div>
              </div>
              <div className="description">
                <p>
                  On October 22nd, at Tecnológico de Monterrey, Campus León, I
                  had the privilege of being a speaker at the much-anticipated
                  5th edition of #She++. This empowering event is dedicated
                  entirely to women in programming, providing them with a
                  platform to excel. Alongside engaging talks, participants
                  immersed themselves in data workshops, web development
                  sessions, and block-coding activities. <br />
                  <br />
                  I am deeply grateful to Estefania Saucedo Tamayo and the
                  entire organizing team for extending their invitation to me.
                  It was truly an honor to be part of an event that nurtures and
                  celebrates women's contributions in the tech world. The
                  enthusiasm and dedication displayed by all the attendees were
                  nothing short of inspiring.
                  <br />
                  <br />
                  #She++ is a significant initiative that paves the way for
                  future role models in the field of programming and technology.
                  It serves as a reminder that we can all be agents of change,
                  breaking barriers and empowering the next generation of young
                  girls and teenagers. Together, we can create a more inclusive
                  and diverse tech community, where every voice is heard, and
                  every idea is valued. I am hopeful that this event will
                  continue to thrive, making a lasting impact on the lives of
                  aspiring women in tech.
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-logo">
          <img src="/img/andrea_logo.png" alt="Logo" />
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/andrea-monserrat/">LinkedIn</a>
          <a href="https://github.com/Andrea-Monserrat">GitHub</a>
          <a href="https://medium.com/@andrea.monserrat.ar">Medium</a>
        </div>
      </footer>
    </div>
  );
}
