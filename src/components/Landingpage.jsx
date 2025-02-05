import React from 'react';

const Landingpage = () => {
return (
    <div className="bg-gray-50">
      
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">THINK STRIVE SOLUTIONS!!</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#features" className="text-indigo-800 hover:text-pink-800 bg-white-500 px-2 py-1 rounded-full border-4 border-indigo-400">  
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="text-indigo-800 hover:text-pink-800 bg-white-500 px-2 py-1 rounded-full border border-indigo-600  border-4 border-indigo-400">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-indigo-800 hover:text-pink-800 bg-white-500 px-2 py-1 rounded-full border border-indigo-600  border-4 border-indigo-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <section className="bg-indigo-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Think Strive Solutions!!</h2>
        <p className="text-lg mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-400 border-4 border-gray-500">
          Get Started
        </button>
      </div>
    </section>

    <section id="features" className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-indigo-600">FEATURES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 bg-blue-200 border-4 border-blue-300 hover:bg-blue-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">FAST</h3>
            <p className="text-gray-900">
              Built with the latest technologies for unmatched speed.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 bg-gray-300 border-4 border-gray-400 hover:bg-gray-400">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">RESPONSIVE</h3>
            <p className="text-gray-900">
              Works seamlessly on all devices and screen sizes.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 bg-pink-200 border-4 border-pink-300 hover:bg-pink-300">
            <h3 className="text-xl font-semibold mb-2 text-pink-800">CUSTOMIZABLE</h3>
            <p className="text-gray-900">
              Easily adapt to fit your branding and style.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-indigo-600">ABOUT US</h2>
        <p className="text-gray-800 max-w-3xl mx-auto font-semibold"> 
          Our mission is to provide the best solutions for your business with
          clean, modern, and user-friendly designs.
        </p><br/>
        <p className="text-gray-700 max-w-3xl mx-auto">
        <ul>
        Landing Page Structure:!!
        <li>Hero Section: Catchy headline and CTA.</li>
        <li>Services Section: Highlight business offerings.</li>
        <li> Why Choose Us Section: Explain what sets your business apart.</li>
        <li> Testimonials Section: Social proof from happy customers.</li>
        <li> Contact Section: Business contact info or a form.</li>
        <li> Footer: Business branding and links.</li>
        </ul>
        </p>
      </div>
    </section>

    <section id="contact" className="bg-indigo-600 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">CONTACT US</h2>
        <p className="mb-4">
          Got questions? We did love to hear from you. Contact us today!
        </p>
        <p className="mb-4">
           Email Id: <a href="mailto:vvidhya@gmail.com" className="underline hover:text-indigo-800">vvidhya@gmail.com</a>
            <br />
           Contact Number: <a href="tel:8734567890" className="underline hover:text-indigo-800">8734567890</a>
        </p>

        <button className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-400  border-4 border-gray-500">
          Get in Touch
        </button>
      </div>
    </section>

    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2025 Think Strive Solutions. All rights reserved.</p>
      </div>
    </footer>
 </div>   

);

};

export default Landingpage;



