import React from 'react';
import BannerImage from "../assets/images/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container bg-gray-100">
      <div className="home-banner-container relative flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto p-6 lg:p-12">

        <div className="home-text-section flex-1 text-center lg:text-left space-y-6">
        <p className="text-4xl font-semibold text-orange-500">WELCOME TO OUR FOODIE!!!</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-snug">
            Your Favourite Food Were Delivered Hot & Fresh.
          </h1>
          <p className="text-lg lg:text-2xl text-gray-700 leading-relaxed">
            Healthy Switcher Chefs do all the preparation work, like peeling, chopping, & marinating, so you can cook fresh food.
          </p>
          <button className="secondary-button inline-flex items-center bg-orange-600 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-lg transition-all">
            Order Now! <FiArrowRight className="ml-2" />
          </button>
        </div>

        <div className="home-image-container flex-1 flex justify-center items-center mt-8 lg:mt-0">
          <img src={BannerImage} alt="" className="w-3/4 lg:w-full max-w-lg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
