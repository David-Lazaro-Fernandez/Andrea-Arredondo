import './index.css'
import { AndreaPost } from '.contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image'
interface ModalProps {
  post: AndreaPost;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ post, isVisible, setIsVisible }) => {
  // Función para cerrar el modal
  const MDXContent = useMDXComponent(post.body.code)

  const closeModal = () => {
    setIsVisible(false);
  };

  // Función para detener la propagación del evento
  const stopPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };

  type imageSizes = { [key: number]: { height: number, width: number } };
  const indexImageSizes: imageSizes = {
    0: {
      height: 300,
      width: 300
    },
    1: {
      height: 150,
      width: 500
    },
    2: {
      width: 235,
      height: 132
    },
    3: {
      width: 240,
      height: 132
    },

  }

  return (
    isVisible ?
      <div className="modal" onClick={closeModal}>
        <div className="modal-content" onClick={stopPropagation}>
          <button className="back" onClick={() => setIsVisible(false)}>
            Back
          </button>
          <article>
            <h1 className="modal-h1">{post.title}</h1>
            <div className="modal-gal">
              {post.images.map((img, index) => (
                <div key={index} className={`modal-gal-${index + 1}`} >
                 
                  <Image src={`/${img}`} alt={`Imagen ${index + 1}`} width={indexImageSizes[index].width} height={indexImageSizes[index].height} />
                </div>
              ))}
            </div>
            <div className="description">
              <MDXContent />

            </div>
          </article>
        </div>
      </div>
      : null
  )
};
export default Modal;