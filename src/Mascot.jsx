import React, { useState } from "react";
import "/styles/Mascot.css";

const Mascot = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="cartoon" onClick={toggleAnimation}>
      <div
        className="face"
        style={{
          animation: isAnimating ? "bounce 1s infinite" : "orbit 2s ease-in-out",
        }}
      >
        <div className="eyes">
          <div className="eye" />
          <div className="eye" />
        </div>
        <div className="mouth" />
      </div>
    </div>
  );
};

export default Mascot;