/*eslint-disable*/
import React from 'react';
import DetailsModal from './DetailsModal.jsx';

const ProductDetails = (props) => {
  const { currShoe, handleDetailsModalView } = props;
  let splitBody = '';
  if (currShoe.details) {
    splitBody = currShoe.details.split('\n');
  }
  return (
    <div>
      <div className="productDetails">
        <p className="detailPreview">{splitBody[1]}</p>
        <ul className="detailPreviewFeatures">
          <li>Shown: {currShoe.colorway}</li>
          <li>Style: {currShoe.style}</li>
        </ul>
      </div>
      <button className="viewProductDetails" onClick={handleDetailsModalView}>
        <span>View Product Details</span>
      </button>
    </div>
  );
}

export default ProductDetails;
