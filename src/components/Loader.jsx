import React, { useState, useEffect } from "react";

function Loader() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage === 100) {
          clearInterval(interval);
          return prevPercentage;
        }
        return prevPercentage + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="loader">
        <span className="percentage">{percentage}%</span>
      </div>
    </>
  );
}

export default Loader;
