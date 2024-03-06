import React from "react";
import sectionImg from "../assets/bigPic.png";
import message1 from "../assets/message1.png";
import message2 from "../assets/message2.png";
import message3 from "../assets/message3.png";

const Discover = () => {
  return (
    <div className="bg-[#000618] pt-20  pb-[100px]  sm:px-7 px-4 relative lg:block hidden ">
      <div className="px-7">
        <div className="sm:mb-3 mb-5">
          <h2 className="text-white sm:text-[30px] text-[21px] text-center ">
            Discover the Magnitude of Your Gains:
          </h2>
        </div>
        <div className="flex item-center gap-5 justify-center mt-12">
          <div>
            <img src={sectionImg} alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <img src={message1} alt="" />
            <img src={message2} alt="" />
            <img src={message3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
