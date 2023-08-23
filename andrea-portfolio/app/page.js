"use client"
import { useEffect, useState } from "react";
import "./index.css";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Tools from "./components/Tools";
import Highlights from "./components/Highlights";
import Extracurricular from "./components/Extracurricular";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { getAllFilesMetadata } from "./services/getMarkdown";
export default function Home() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentNews, setCurrentNews] = useState(null);

  const openModal = (newsId) => {
    const selectedNews = newsData.find((news) => news.id === newsId);
    setCurrentNews(selectedNews);
    setModalVisible(true);
  };

  useEffect(()=>{
    const getStaticProps = async () => {
      const posts = await getAllFilesMetadata()
      console.log(posts)
      return { props: {posts} };
    };
  },[])

  const closeModal = () => setModalVisible(false);

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
        <Extracurricular openModal={openModal}/>
        <div className="horizontal-line"></div>
        <Contact />
        <div className="horizontal-line"></div>
      </main>
      <Footer />
    </div>
  );
}

