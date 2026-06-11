import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mb-5">
      <div className="row align-items-center">
        <div className="col-md-6 order-md-2">
          <img src={imageURL} alt={productName} className="img-fluid rounded" />
        </div>
        <div className="col-md-6 order-md-1">
          <h2>{productName}</h2>
          <p>{productDesription}</p>
          {learnMore && <button className="btn btn-primary">Learn More</button>}
        </div>
      </div>
    </div>
  );
}

export default RightSection;
