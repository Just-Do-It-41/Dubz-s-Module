/* eslint-disable */
import React from 'react';

const ShoeList = (props) => {
  const { picture, handleShoeModalView, index } = props;
  return (
    <a href={`#section-${index}`} onClick={handleShoeModalView} className="shoeView">
      <img src={picture} alt="shoepic" className="pic"/>
    </a>
  );
};

export default ShoeList;
