import React from "react";

const Contact = () => {
    return(
        <div className="contact-page-wrapper flex flex-col items-center justify-center bg-gray-100 py-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Have Question In Mind?</h1>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">Let Us Help You!</h1>
            <div className="contact-form-container flex flex-col sm:flex-row items-center gap-4">
                <input 
                    type="text" 
                    placeholder="vvidhya@gmail.com" />
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg transition-all">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Contact;
