import React from "react";
import Logo from "../assets/images/Logo.svg";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200 text-gray-900 py-6 px-2">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-700 pb-6">
          <div className="mb-6 md:mb-0">
            <img src={Logo} alt="Logo" className="h-10" />
          </div>
          <div className="flex space-x-4 text-3xl">
            <a href="#" className="hover:text-blue-400 transition">
              <BsTwitter />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <SiLinkedin />
            </a>
            <a href="#" className="hover:text-red-600 transition">
              <BsYoutube />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-2xl font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-600 transition">Quality</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Help</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Share</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Work</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><a href="tel:244-5333-7783" className="hover:text-blue-600 transition">244-5333-7783</a></li>
              <li><a href="mailto:hello@food.com" className="hover:text-blue-600 transition">hello@food.com</a></li>
              <li><a href="mailto:press@food.com" className="hover:text-blue-600 transition">press@food.com</a></li>
              <li><a href="mailto:contact@food.com" className="hover:text-blue-600 transition">contact@food.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-600 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          © 2025 Food Company. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
