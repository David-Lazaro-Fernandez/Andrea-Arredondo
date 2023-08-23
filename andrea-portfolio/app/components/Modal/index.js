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



{/* <div id="modal1" className="modal">
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
</div> */}