import React from "react";
import IMGF1 from "../assets/features/f1.png";
import IMGF2 from "../assets/features/f2.png";
import IMGF3 from "../assets/features/f3.png";
import IMGF4 from "../assets/features/f4.png";
import IMGF5 from "../assets/features/f5.png";
import IMGF6 from "../assets/features/f6.png";

export function Feature() {
  return (
    <div className="section-p1 feature_style">
      <div className="fe-box">
        <img src={IMGF1} alt="feature-image" />
        <h6>Free Shipping</h6>
      </div>
      <div className="fe-box">
        <img src={IMGF2} alt="feature-image" />
        <h6>Online Order</h6>
      </div>
      <div className="fe-box">
        <img src={IMGF3} alt="feature-image" />
        <h6>Save Money</h6>
      </div>
      <div className="fe-box">
        <img src={IMGF4} alt="feature-image" />
        <h6>Promotions</h6>
      </div>
      <div className="fe-box">
        <img src={IMGF5} alt="feature-image" />
        <h6>Happy Customer</h6>
      </div>
      <div className="fe-box">
        <img src={IMGF6} alt="feature-image" />
        <h6>F24/7 support</h6>
      </div>
    </div>
  );
}
