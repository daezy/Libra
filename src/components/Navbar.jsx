import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/libra logo 1.png";
import NavbarSlider from "./NavbarSlider";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("About");
  const [clicked, setClicked] = useState(false);

  const handleActiveLink = (option) => {
    setActiveLink(option);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setClicked(false);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#000618] relative">
      <div className="flex px-7 justify-between items-center ">
        <a href="#">
          <div className="flex  items-center ">
            <img src={logo} alt="logo" className="h-20 w-20" />
            <h1 className="text-white font-bold text-[25px]">LIBRA</h1>
          </div>
        </a>

        {!isMobile && (
          <div className="flex gap-7 ">
            <a
              href="#about"
              onClick={() => handleActiveLink("About")}
              className={`text-white text-lg font-light hover:text-blue-500 ${
                activeLink === "About" && "border-b-2 border-blue-500"
              }`}
            >
              About
            </a>
            <a
              href="#features"
              onClick={() => handleActiveLink("Features")}
              className={`text-white text-lg font-light hover:text-blue-500 ${
                activeLink === "Features" && "border-b-2 border-blue-500"
              }`}
            >
              Features
            </a>
            <a
              href="https://libra-finance.app"
              onClick={() => handleActiveLink("Dapp")}
              className={`text-white text-lg font-light hover:text-blue-500 ${
                activeLink === "Dapp" && "border-b-2 border-blue-500"
              }`}
            >
              Dapp
            </a>
            <a
              href=""
              onClick={() => handleActiveLink("Libra Bank")}
              className={`text-white text-lg font-light hover:text-blue-500 ${
                activeLink === "Libra Bank" && "border-b-2 border-blue-500"
              }`}
            >
              Libra Bank
            </a>
            <a
              href=""
              onClick={() => handleActiveLink("Docs")}
              className={`text-white text-lg font-light hover:text-blue-500 ${
                activeLink === "Docs" && "border-b-2 border-blue-500"
              }`}
            >
              Docs
            </a>
          </div>
        )}
        {!isMobile ? (
          <div>
            <a href="https://jup.ag/swap/SOL-Hz1XePA2vukqFBcf9P7VJ3AsMKoTXyPn3s21dNvGrHnd">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-900 to-blue-400 rounded-md">
                <p className="text-white font-bold text-lg">BUY</p>
              </button>
            </a>
          </div>
        ) : (
          <div className="p-1 bg-blue-500 rounded-md flex justify-center">
            <button
              className="w-8 h-8"
              onClick={() => setClicked((prev) => !prev)}
            >
              <AiOutlineMenu className="text-white w-full h-full" />
            </button>
          </div>
        )}
      </div>
      {clicked && <NavbarSlider setClicked={setClicked} clicked={clicked} />}
    </div>
  );
};

export default Navbar;
