import React from "react";
import Logo from "../assets/images/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const menuOptions = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Services", href: "#services" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg w-[100%]">
      <nav className="container flex items-center justify-between py-4 px-8">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="h-12" />
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {menuOptions.map((item) => (
            <a
              key={item.text}
              href={item.href}
              className="text-white text-2xl font-bold hover:text-orange-400 transition"
            >
              {item.text}
            </a>
          ))}
          <BsCart2 className="text-white text-3xl cursor-pointer hover:text-orange-500 transition" />
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-all">
            Book Now!!
          </button>
        </div>

        <div className="lg:hidden">
          <HiOutlineBars3
            className="text-3xl text-white cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
        </div>
      </nav>

      {openMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center">
          <AiOutlineClose
            className="text-4xl text-white cursor-pointer absolute top-6 right-6"
            onClick={() => setOpenMenu(false)}
          />
          <ul className="space-y-6 text-center">
            {menuOptions.map((item) => (
              <li key={item.text}>
                <a
                  href={item.href}
                  className="text-white text-2xl font-medium hover:text-orange-400 transition"
                  onClick={() => setOpenMenu(false)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-all">
            Book Now!!
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
