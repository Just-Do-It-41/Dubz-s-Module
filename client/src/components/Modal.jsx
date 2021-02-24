/* eslint-disable */
import React from 'react';

const Modal = (props) => {
  const { currShoe, handleShoeModalView } = props;
  return (
    <div className="modal">
      <button onClick={handleShoeModalView} className="exit">X</button>
      {currShoe.media.map((picture, i) => {
        return (
          <span id={`section-${i}`} className="modalSpan" key={i}>
            <img src={picture} alt="shoe pic" key={currShoe._id} className="shoeModal" />
          </span>
        )
      })}
    </div>
  );
};

export default Modal;
