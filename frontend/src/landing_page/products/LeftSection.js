import React from "react";

function LeftSection({ imageURL, productName, productDesription, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <div className="container mb-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={imageURL} alt={productName} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2>{productName}</h2>
          <p>{productDesription}</p>
          <div className="mt-3">
            {learnMore && <button className="btn btn-outline-primary me-2">Learn More</button>}
            {tryDemo && <button className="btn btn-primary">Try Demo</button>}
          </div>
          <div className="mt-3 text-muted">
            {googlePlay && <span className="me-3">Google Play</span>}
            {appStore && <span>App Store</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
