import React from "react";

const Social = () => {
  return (
    <div>
      <div className="home__social">
        <a
          href="https://www.instagram.com"
          className="home__social-icon"
          target="_blank"
        >
          <i class="uil uil-instagram"></i>
        </a>
        <a
          href="https://dribble.com/"
          className="home__social-icon"
          target="_blank"
        >
          <i class="uil uil-dribbble"></i>
        </a>
        <a
          href="https://github.com/"
          className="home__social-icon"
          target="_blank"
        >
          <i class="uil uil-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Social;
