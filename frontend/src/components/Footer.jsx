import React from "react";
import { Link } from "react-router-dom"; 
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-16">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap justify-between items-center gap-8">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <img
              src="/logo.png"
              alt="Logo"
              width={160}
              height={120}
              className="mx-auto md:mx-0 rounded-lg border-4 border-white shadow-lg"
            />
            <p className="mt-4 text-lg font-medium opacity-80">
              For the future, together
            </p>
          </div>
          <div className="w-full md:w-1/3 mt-8 md:mt-0 text-center">
            <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-6 text-4xl">
              <a
                href="https://github.com/HashimAyamon"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-300 transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/hashim-a-139a00269/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-300 transition duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center border-t border-white pt-6">
          <p className="text-sm font-light opacity-80">
            ©{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            BeezBabes. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
