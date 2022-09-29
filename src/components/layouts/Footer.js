import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer w-[90%] md:w-[100%] mx-auto p-4 rounded-xl bg-black text-primary-content footer-center">
      <div className="flex justify-between w-[80%] md:w-[50%] ">
        <a href="https://github.com/jayantwaldia/Git-Stalk">
          <FaGithub size={25} />
        </a>
        <a href="https://www.linkedin.com/in/jayantwaldia/">
          <FaLinkedin size={25} />
        </a>
        <a href="https://twitter.com/jayantwaldia">
          <FaTwitter size={25} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
