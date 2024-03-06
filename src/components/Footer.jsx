import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#01030B] pt-[100px] pb-6  sm:px-7 px-4 relative ">
      <div className="px-7">
        <div className=" flex md:flex-row flex-col justify-between gap-4  ">
          <div>
            <div className="md:block flex justify-center">
              <p className="text-white text-[25px] font-semibold">SOCIALS</p>
            </div>
            <div className="mt-3 md:block flex flex-col justify-center items-center">
              <a href="https://x.com/librafinancesol?s=21">
                <div className="flex items-center gap-1 mb-2">
                  <FaXTwitter className="text-blue-500" />
                  <p className="text-[#5d5d5d] text-[20px]">Twitter</p>
                </div>
              </a>
              <a href="https://t.me/libraprotocolsol">
                <div className="flex items-center gap-1 mb-2">
                  <FaTelegram className="text-blue-500" />
                  <p className="text-[#5d5d5d] text-[20px]">Telegram</p>
                </div>
              </a>
              <a href="#">
                <div className="flex items-center gap-1 mb-2">
                  <FaMedium className="text-blue-500" />
                  <p className="text-[#5d5d5d] text-[20px]">Medium</p>
                </div>
              </a>
              <a href="#">
                <div className="flex items-center gap-1 mb-2">
                  <FaGithub className="text-blue-500" />
                  <p className="text-[#5d5d5d] text-[20px]">Github</p>
                </div>
              </a>
              <a href="#">
                <div className="flex items-center gap-1 mb-2">
                  <FaDiscord className="text-blue-500" />
                  <p className="text-[#5d5d5d] text-[20px]">Discord</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div className="md:block flex justify-center">
              <p className="text-white text-[25px] font-semibold ">PRODUCTS</p>
            </div>
            <div className="mt-3 md:block flex flex-col justify-center items-center">
              <a href="https://libra-finance.app">
                <div className="flex items-center gap-1 mb-2">
                  <p className="text-[#5d5d5d] text-[20px]">
                    Automatic Staking
                  </p>
                </div>
              </a>
              <a href="https://libra-finance.app/bank">
                <div className="flex items-center gap-1 mb-2">
                  <p className="text-[#5d5d5d] text-[20px]">Libra Bank</p>
                </div>
              </a>
              <a href="https://libra-finance.app/stake">
                <div className="flex items-center gap-1 mb-2">
                  <p className="text-[#5d5d5d] text-[20px]">Staking</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div className="md:block flex justify-center">
              <p className="text-white text-[25px] font-semibold">
                QUICK LINKS
              </p>
            </div>
            <div className="mt-3 md:block flex flex-col justify-center items-center">
              <a href="#home">
                <div className="flex items-center gap-1 mb-2">
                  <p className="text-[#5d5d5d] text-[20px]">Home</p>
                </div>
              </a>
              <a href="#about">
                <div className="flex items-center gap-1 mb-2">
                  <p className="text-[#5d5d5d] text-[20px]">About</p>
                </div>
              </a>
              <a href="#features">
                <div className="flex items-center gap-1 mb-2">
                  <p className="text-[#5d5d5d] text-[20px]">Features</p>
                </div>
              </a>
              <a href="">
                <div className="flex items-center gap-1 mb-2">
                  <p className="text-[#5d5d5d] text-[20px]">Docs</p>
                </div>
              </a>
              <a href="https://libra-finance.app">
                <div className="flex items-center gap-1 mb-2">
                  <p className="text-[#5d5d5d] text-[20px]">Dapp</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-2 border-white">
          <p className="text-[#5d5d5d] text-center mt-4">
            Copyright &copy; 2024 LIBRA.FINANCE ($LIBRA). All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
