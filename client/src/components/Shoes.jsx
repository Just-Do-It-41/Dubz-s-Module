/* eslint-disable */
import React from 'react';
import ShoeList from './ShoeList';

const Shoes = (props) => {
  const { handleShoeModalView, currShoe } = props;
  if (currShoe) {
    return (
      <div className="shoePics mt11-lg pr12-lg pl11-lg ml1-lg d-lg-ib">
        <div className="highlyRated">
          <div className="star" >
          <svg className="starSVG" height="25px" width="25px" fill="#111" viewBox="0 0 25 32"><path d="M12.48 4l-3.04 8.96-9.44.32 7.6 5.6L4.96 28l7.68-5.44 7.84 5.28-2.8-9.04 7.52-5.76-9.52-.08z"></path></svg>
          </div>
          <span>Highly Rated</span>
        </div>
        {currShoe.map((picture, i) => (
          <ShoeList picture={picture} key={i} index={i} handleShoeModalView={handleShoeModalView} />
        ))}
      </div>
    );
  }
  return null;
};

export default Shoes;
