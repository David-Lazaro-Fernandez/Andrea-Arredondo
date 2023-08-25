import "./index.css";
import { useState } from "react";
import { AndreaPost } from "contentlayer/generated"
import Modal from '../Modal'

interface ImageContainerProps{
  post: AndreaPost
}
const ImageContainer: React.FC<ImageContainerProps> = ({post}) =>{
   
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
    <>
      <div className="image-container" onClick={()=>openModal(currentPost)}>
        <img src={post.title_image} alt="Morelos" />
        <div className="overlay">
          <div className="date">{post.date}</div>
          <div className="overlay-title">{post.title}</div>
          <div className="overlay-sub">{post.subtitle}</div>
        </div>
      </div>
      {isVisible ? <Modal post={currentPost} isVisible={isVisible} setIsVisible={setIsVisible} /> : null}
    </>
  );
};
export default ImageContainer;
