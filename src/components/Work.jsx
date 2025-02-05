import React from "react";
import PickMeals from "../assets/images/pick-meals-image.png";
import ChooseMeals from "../assets/images/choose-image.png";
import DeliveryMeals from "../assets/images/delivery-image.png";

const Work = () => {
    const WorkInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veritatis similique facere voluptatum ea aliquam ipsum et libero officia distinctio id, culpa odit commodi, atque voluptatem quae! Laudantium, voluptates unde.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veritatis similique facere voluptatum ea aliquam ipsum et libero officia distinctio id, culpa odit commodi, atque voluptatem quae! Laudantium, voluptates unde.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veritatis similique facere voluptatum ea aliquam ipsum et libero officia distinctio id, culpa odit commodi, atque voluptatem quae! Laudantium, voluptates unde.",
        },

    ];
    return (
        <div className="bg-gray-50 py-12 px-6">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-4xl font-bold text-orange-500 mt-2 mb-4">HOW IT WORKS!!</h1>
                <p className="text-gray-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nihil nemo porro pariatur sunt molestias maxime ipsa voluptas facilis temporibus.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {WorkInfoData.map((data, index) => (
                    <div key={index} className="bg-white hover:bg-orange-100 shadow-lg rounded-lg p-6 text-center">
                        <div className="mb-4">
                            <img src={data.image} alt={data.title} className="w-20 h-20 mx-auto" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{data.title}</h2>
                        <p className="text-gray-600">{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
