import React from "react";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer w-[60%] md:w-[40%] mx-auto p-4 rounded-xl bg-black bg-opacity-50 text-primary-content footer-center">
      <div className="flex justify-between w-[80%] md:w-[50%]">
        <FaGithub size={25} />
        <FaLinkedin size={25} />
        <FaTwitter size={25} />
      </div>
    </footer>
  );
}

export default Footer;
