import './index.css'
import Highlights from './components/Highlights'
import Extracurricular from './components/Extracurricular'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Tools from './components/Tools'
import Work from './components/Work'
import Contact from './components/Contact'
import Image from 'next/image'
export default function Home() {

  return (
    <div className="background">
      <main>
        <div className="wrapper">
          <nav className="navbar">
            <div>
              <Image width={100} height={100} alt="mail icon" className="logo" src="/img/andrea_logo.png" />
            </div>
            <ul className="navbar-links">
              <li>
                <a href="#">
                  <Image width={50} height={50} alt="mail icon" src="/img/github.png" />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <Image width={50} height={50} alt="mail icon" src="/img/x.png" />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <Image width={50} height={50} alt="mail icon" src="/img/mail.png" />{" "}
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
          <Extracurricular />
          <div className="horizontal-line"></div>
          <Contact />
          <div className="horizontal-line"></div>
        </div>
      </main>
      <Footer />
    </div>
  )
}