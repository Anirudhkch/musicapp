import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[30rem] pt-[15rem] mt-[-10rem] relative z-[-1]">
      <div className="flex justify-center items-center">
        <button className="text-white hover:text-gray-300 mx-2" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={24} />
        </button>
        <button className="text-white hover:text-gray-300 mx-2" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </button>
        <button className="text-white hover:text-gray-300 mx-2" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </button>
        <button className="text-white hover:text-gray-300 mx-2" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={24} />
        </button>
      </div>
      <p className="text-center mt-4">© 2023 My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;