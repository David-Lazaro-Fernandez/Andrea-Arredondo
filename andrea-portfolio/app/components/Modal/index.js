import React from 'react';

const Modal = ({ isVisible, closeModal, title, images, description }) => {
  return (
    isVisible && (
      <div className="modal">
        <div className="modal-content">
          <div className="back" onClick={closeModal}>
            Back
          </div>
          <article>
            <h1 className="modal-h1">{title}</h1>
            <div className="modal-gal">
              {images.map((img, index) => (
                <div key={index} className={`modal-gal-${index + 1}`} alt={`Imagen ${index + 1}`}>
                  <img src={img} />
                </div>
              ))}
            </div>
            <div className="description">
              <p>{description}</p>
            </div>
          </article>
        </div>
      </div>
    )
  );
};

export default Modal;
