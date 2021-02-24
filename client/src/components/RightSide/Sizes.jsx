/* eslint-disable */
import React from 'react';

const Sizes = (props) => {
  const { sizes, stock, selectSize, selectedSize, selectedStock, addButtonClicked, onAddButton, onFavoriteButton, currShoe, favorited} = props;

  let lowStock = null;
  let alertStyles = {
    color: null,
    outline: null,
    span: null
  };
  if (selectedStock < 5 && selectedStock !== '') {
    lowStock =  <div className="lowStockContainer">
                  <svg fill="#BA861E" viewBox="0 0 24 24" className="stopWatch"><path d="M12.2 22.2c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16.4c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.3-7.5-7.5-7.5zm.6 8l-1.1-1.1L16 8.5l1 1-4.2 4.3zm4-11h-9V1.2h9v1.6z"></path></svg>
                  <span className="lowStock">Just a few left. Order soon.</span>
                </div>;
  }
  if (addButtonClicked === true && selectedSize === '') {
    alertStyles = {
      color: { color: 'red' },
      outline: { border: '1px solid red' },
      span: <span className="alert">Please select a size.</span>
    }
  }
  if (sizes) {
    return (
      <form className="sizesForm">
        {lowStock}
        <legend>
          <div>
            <span className="selectSize" style={alertStyles.color}>Select Size</span>
            <a className="sizeGuide">Size Guide</a>
          </div>
        </legend>
        <div className="sizesContainer" style={alertStyles.outline}>
          {sizes.map((size, i) => {
            if (size === selectedSize) {
              return (
                <div key={i}>
                  <label className="sizeLabels selectedSize">{`M ${size} / W ${size + 1.5}`}</label>
                </div>
              )
            } else if (stock[i] === 0) {
              return (
                <div key={i}>
                  <label className="sizeLabels noStock">{`M ${size} / W ${size + 1.5}`}</label>
                </div>
              )
            } else {
              return (
                <div key={i}>
                  <label className="sizeLabels inStock" onClick={() => {selectSize(i)}}>{`M ${size} / W ${size + 1.5}`}</label>
                </div>
              )
            }
          })}
        </div>
        {alertStyles.span}
        <div className="addAndFavorite">
          <button className="addToBag" onClick={onAddButton}>Add to Bag</button>
          <button className="favorite" onClick={onFavoriteButton}>
            <span>Favorite</span>
            <svg className="heart" viewBox="0 0 32 29.6" style={currShoe.favorite ? {'fill': 'black'} : null}>
              <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
              c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
            </svg>
          </button>
        </div>
      </form>
    );
  }
  return null;
};

export default Sizes;