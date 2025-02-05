import React from "react";
import ProfilePic from "../assets/images/coffee.jpg"

const Testimonial = () => {
    return (
        <div className="bg-gray-200 py-12 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-orange-500 text-4xl uppercase font-semibold">#Testimonial</p>
                <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mt-2 mb-4">What They Are Saying?</h1>
                <p className="text-gray-600 mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error voluptatum molestias, cum nobis perspiciatis excepturi quos quam iure. Quos accusantium laboriosam veritatis amet totam!
                </p>
            </div>
            <div className="max-w-2xl mx-auto text-center bg-white shadow-lg rounded-lg p-8">
                <img src={ProfilePic} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
                <p className="text-gray-600 mb-6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quod dolores saepe consequatur modi labore hic obcaecati nam in quidem, tenetur esse fugit tempora quis.
                </p>
                <div className="flex justify-center items-center gap-1 text-orange-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.848 1.437 8.276L12 18.897l-7.373 4.533 1.437-8.276-6.064-5.848 8.332-1.151z" />
                        </svg>
                    ))}
                </div>
                <h2 className="text-lg font-semibold text-gray-800">Vidhya S</h2>
            </div>
        </div>
    );
};

export default Testimonial;
