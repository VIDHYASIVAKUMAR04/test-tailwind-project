import React from "react";
import AboutBackgrounds from "../assets/images/about-backgrounds-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    return (
        <div className="relative bg-gray-200 py-12">
            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                    <img src={AboutBackgrounds} alt="" className="w-3/4 lg:w-full max-w-lg" />
                </div>

                <div className="space-y-6">
                    <p className="text-4xl font-semibold text-orange-500">@ABOUT US</p>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-snug">
                        Food Is An Important Part of a Balanced Diet.
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veritatis similique facere voluptatum ea aliquam ipsum et libero officia distinctio id, culpa odit commodi, atque voluptatem quae! Laudantium, voluptates unde.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Amet ex aut quisquam facere quam. Cupiditate adipisci delectus odit dolorum repudiandae voluptas, modi, harum cum, quas voluptatem officia corrupti sit. Harum ratione maiores provident at perferendis aspernatur accusantium vel pariatur omnis!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-purple-500 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all">
                            Learn More!
                        </button>
                        <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-all">
                            <BsFillPlayCircleFill className="text-orange-500 text-2xl" /> Watch Video..
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
