/* eslint-disable */
import React from 'react';

const ColorWays = (props) => {
  const { shoes, changeColorWay, currShoe } = props;
  const hoverStyle = {border: "1px solid black"}
  return (
    <div className="colorways">
      {shoes.map((shoe, i) => {
        if (shoe === currShoe) {
          return (
            <div className="colorwayWrapper" key={shoe._id}>
              <a onClick={() => changeColorWay(i)}>
                <img src={shoe.media[0]} className="colorwayPhotos" style={hoverStyle}/>
              </a>
          </div>
          )
        } else {
          return (
            <div className="colorwayWrapper" key={shoe._id}>
              <a onClick={() => changeColorWay(i)} >
                <img src={shoe.media[0]} className="colorwayPhotos" />
              </a>
            </div>
          )
        }
      })}
    </div>
  );
};

export default ColorWays;
