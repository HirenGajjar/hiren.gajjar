import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

function SocialMedia() {
  return (
    <>
      <div className="social-media">
        <div className="social-media__wrapper">
          <a
            href="https://www.linkedin.com/in/thehirengajjar/"
            target="_blank"
            className="social-media__icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/HirenGajjar/"
            target="_blank"
            className="social-media__icon"
          >
            <FaSquareGithub />
          </a>
        </div>
      </div>
    </>
  );
}

export default SocialMedia;
