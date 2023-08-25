"use client"
import Modal from "../Modal"
import Category from "./Category"
import "./index.css"
import { allAndreaPosts, AndreaPost} from 'contentlayer/generated'
import { useState } from "react"

const HighlightCard = (post: AndreaPost) => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentPost, setCurrentPost] = useState<AndreaPost>(post)

  const openModal = (selectedPost: AndreaPost) => {
    console.log(isVisible)
    setIsVisible(true)
    setCurrentPost(selectedPost)
    console.log(selectedPost)
  }

  const closeModal = () => {
    setIsVisible(false)
  }
  return (
    <div className="card" onClick={() => openModal(post)}>
      <div className="card-image">
        <Category type={post.category} title={post.category} />
        <img src={post.title_image} alt={post.title} />
      </div>
      <div className="card-content">
        <div className="highlight_title">
          {post.title.length > 35 ? `${post.title.slice(0, 40)}...` : post.title}
        </div>
        <div className="subtitle">{post.subtitle}</div>
      </div>
      {isVisible ? <Modal post={currentPost} isVisible={isVisible} setIsVisible={setIsVisible} /> : null}
    </div>
  )
}

const Highlights = () => {
  const posts = allAndreaPosts.filter(post => post.postType === 'Highlight')
  return (
    <>
      {console.log(posts)}
      <section id="Highlights">
        <div className="section-title">Highlights</div>
        <div className="carousel-container">
          {posts.map((post, idx) => {
            return (
              <HighlightCard key={idx} {...post} />
            )
          })}
        </div>
      </section>
    </>
  );
};

export default Highlights;
