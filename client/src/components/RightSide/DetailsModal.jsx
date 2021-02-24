/*eslint-disable*/
import React from 'react';

const DetailsModal = (props) => {
  const { currShoe, modalStyle, handleDetailsModalView } = props;
  const splitBody = currShoe.details.split('\n');
  const moreBenefits = currShoe.moreBenefits.split('\n');
  console.log(moreBenefits);

  return (
    <div className="detailsModalContainer">
      <div className="preScrim" onClick={handleDetailsModalView}></div>
      <div className="detailsAnimation">
          <button onClick={handleDetailsModalView} className="detailsExit">X</button>
        <div className="detailsModal">
          <div className="modalHeader">
            <div className="detailsModalImage">
              <img className="detailsImage" src={currShoe.media[0]} alt="image here"></img>
            </div>
            <div className="detailsModalTitle">
              <h1 className="detailsShoeName">LeBron 18</h1>
              <div className="detailsShoePrice">$200</div>
            </div>
          </div>
          <div className="detailsModalInfo">
            {splitBody.map((section, i) => {
              if (i % 2 !== 0) {
                return (
                  <div key={i} className="headlineContainer">
                    <p className="regularHeadline">{section}</p>
                    <br></br>
                  </div>
                )
              } else {
                return (
                  <p key={i} className="headline">{section}</p>
                )
              }
            })}
            <ul className="moreBenefits">
            {moreBenefits.map(benefit => {
              return (
                <li>{benefit}</li>
              )
            })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsModal;
