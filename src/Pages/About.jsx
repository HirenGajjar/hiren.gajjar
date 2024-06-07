import React, { useEffect } from "react";

function About({ children }) {
  useEffect(() => {
    document.title = "Hiren Gajjar | About";
  }, []);
  return (
    <>
      <div className="about">
        <div className="about-main-header">
          <p className="about-name">Hiren Gajjar</p>
          <h1 className="about-h1">
            Aiming for <span> Simple, Clear, Fast.</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default About;
