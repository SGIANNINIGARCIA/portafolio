import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Social() {
  return (
    <div class="social">
      <a
        href="https://github.com/sgianninigarcia"
        target="_blank"
        rel="noreferrer noopener"
        style={{
          color: "black",
          fontSize: "35px",
          margin: "10px",
        }}
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/sgianninigarcia"
        target="_blank"
        rel="noreferrer noopener"
        style={{
          color: "black",
          fontSize: "35px",
          margin: "10px",
        }}
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

export default Social;
