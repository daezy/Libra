import React from "react";

const Chart = () => {
  return (
    <div
      className="h-[130vh] bg-[#000618]   py-[125px]   md:px-[56px]  px-8  "
      id="dapp"
    >
      <div className="flex justify-center relative  items-center  h-full px-7">
        <div className="">
          <div
            id="dexscreener-embed"
            className="w-full  aspect-w-16 aspect-h-9"
          >
            <iframe
              src="https://dexscreener.com/solana/EDM3b4NNas5raWKENejTUTDRA9NwPkoX2Dk6tYFxSbgs?embed=1&theme=dark&trades=0&info=0"
              className=" absolute inset-0 w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
