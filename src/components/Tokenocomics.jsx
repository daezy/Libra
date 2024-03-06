import React from "react";
import sectionImg from "../assets/tokenocomics.png";

const Tokenocomics = () => {
  return (
    <div className="bg-[#000618] py-[100px]  sm:px-7 px-4 relative ">
      <div className="px-7 lg:flex block items-center justify-between">
        <div>
          <div className="lg:block flex flex-col justify-center items-center">
            <div className="p-1 bg-white mb-1 flex items-start relative text-center w-[300px]">
              <div className="bg-blue-600 absolute h-8 w-1 top-0 -left-1 "></div>
              <h3 className="text-blue-600 font-semibold ">
                GET STARTED WITH LIBRA FINANCE
              </h3>
            </div>
            <div className="sm:mb-3 mt-2 mb-5">
              <h2 className="text-white sm:text-[30px] text-[21px] ">
                Join The Libra Finance Community
              </h2>
            </div>
          </div>
          <div className="">
            <p className="text-gray-500">
              Connect with us on social media, explore our roadmap, and be part
              of the Libra Finance vision. <br />
              Engage with a vibrant community dedicated to shaping the future of
              DeFi.
            </p>
          </div>
          <div className="mt-10 lg:block flex justify-center">
            <a href="https://t.me/libraprotocolsol">
              <button className="sm:px-8 px-5 py-3  w-[80%] bg-gradient-to-r from-blue-900 to-blue-400 rounded-md">
                <p className="text-white font-bold sm:text-lg text-md">
                  JOIN NOW
                </p>
              </button>
            </a>
          </div>
        </div>
        <div className="lg:w-[70%]  lg:mt-0 mt-10  ">
          <img src={sectionImg} alt="section" className="w-full" />

          <div>
            <p className="text-center text-blue-500 font-semibold text-[30px]">
              TOKENOCOMICS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenocomics;
