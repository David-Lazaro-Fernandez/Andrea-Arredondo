import './index.css'
import Highlights from './components/Highlights'
import Extracurricular from './components/Extracurricular'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Tools from './components/Tools'
import Work from './components/Work'
import Contact from './components/Contact'

export default function Home() {

  return (
    <div className="background">
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
        <Extracurricular/>
        <div className="horizontal-line"></div>
        <Contact />
        <div className="horizontal-line"></div>
      </main>
      <Footer />
    </div>
  )
}