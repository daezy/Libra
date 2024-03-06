import React from "react";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
import icon5 from "../assets/icon.png";

const CoreFeatures = () => {
  return (
    <div
      className="bg-[#000618]  pb-[100px]  sm:px-7 px-4 relative "
      id="features"
    >
      <div className="px-7">
        <div className="md:block flex flex-col justify-center items-center">
          <div className="p-1 bg-white mb-1 flex items-start relative text-center w-[150px]">
            <div className="bg-blue-600 absolute h-8 w-1 top-0 -left-1 "></div>
            <h3 className="text-blue-600 font-semibold ml-1 ">CORE FEATURES</h3>
          </div>
          <div className="sm:mb-3 mt-2 mb-5">
            <h2 className="text-white sm:text-[30px] text-[21px] ">
              Why Choose Libra Finance?
            </h2>
          </div>
        </div>
        <div className="mt-10 flex md:flex-row flex-col  justify-center items-center  gap-5 flex-wrap  ">
          <div className=" flex flex-col justify-center items-center bg-[rgba(255,253,253,0.1)] bg-opacity-75 p-5 rounded-md w-[300px] h-[300px] mt-7 relative">
            <div className="w-[57px] absolute top-3 flex justify-center items-center -mt-11 shadow-lg ">
              <img
                src={icon5}
                alt=""
                className="w-full filter drop-shadow-md"
              />
            </div>
            <div>
              <h3 className="text-center my-2 text-white">
                Libra Finance Token - A Symphony of Innovation
              </h3>
              <p className="text-center text-[12px] text-[#6d6c6c]">
                Behold the brilliance of Libra Finance Tokenomics! A captivating
                pie chart illustrates the deflationary and rebase mechanisms,
                symbolizing a harmonious balance in token distribution. The
                deliberate absence of minting functionality assures investors of
                transparency, setting a gold standard for audit compliance. The
                dynamic price control mechanism, akin to a seesaw, ensures
                stability, creating a truly unique token experience.
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center bg-[rgba(255,253,253,0.1)] bg-opacity-75 p-5 rounded-md w-[300px] h-[300px] mt-7 relative">
            <div className="w-[57px] absolute top-3 flex justify-center items-center -mt-11 shadow-lg ">
              <img
                src={icon1}
                alt=""
                className="w-full filter drop-shadow-md"
              />
            </div>
            <div>
              <h3 className="text-center my-2 text-white">
                Libra Finance Token - A Symphony of Innovation
              </h3>
              <p className="text-center text-[12px] text-[#6d6c6c]">
                Enter the realm of our Vesting Contract, a fortress of security.
                Visualize the gradual release of tokens, guarded by safes and
                locks, ensuring a secure and auditable process. Watch as burnt
                tokens transition into the vesting process, a visual metaphor
                for enhanced investor fund security. Libra's commitment to
                transparency and investor protection shines through every facet
                of our Vesting Contract.
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center bg-[rgba(255,253,253,0.1)] bg-opacity-75 p-5 rounded-md w-[300px] h-[300px] mt-7 relative">
            <div className="w-[60px] absolute top-3 flex justify-center items-center -mt-11 shadow-lg ">
              <img
                src={icon2}
                alt=""
                className="w-full filter drop-shadow-md"
              />
            </div>
            <div>
              <h3 className="text-center my-2 text-white">
                Dapp and Website - Your Gateway to Seamless Transactions
              </h3>
              <p className="text-center text-[12px] text-[#6d6c6c]">
                Experience the elegance of our Dapp and Website. With a
                user-friendly interface, managing tokens becomes a breeze.
                Real-time charts showcase rebase adjustments, while a secure
                wallet icon ensures seamless transactions. Libra's website, akin
                to an informational book, not only educates but also integrates
                live API data and secure login features, creating a holistic
                user experience.
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center bg-[rgba(255,253,253,0.1)] bg-opacity-75 p-5 rounded-md w-[300px] h-[300px] mt-7 relative">
            <div className="w-[57px] absolute top-3 flex justify-center items-center -mt-11 shadow-lg ">
              <img
                src={icon3}
                alt=""
                className="w-full filter drop-shadow-md"
              />
            </div>
            <div>
              <h3 className="text-center my-2 text-white">
                Staking - Unlock the Door to Remarkable Returns
              </h3>
              <p className="text-center text-[12px] text-[#6d6c6c]">
                Dive into our Staking feature, where your tokens become the key
                to exceptional returns. With an emphasis on a staggering 5000%
                to 10000% Annual Percentage Yield (APY), Libra Finance sets the
                stage for investors seeking substantial and sustainable rewards.
                Staking is not just a commitment; it's an opportunity to
                maximize your investment potential.
              </p>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center bg-[rgba(255,253,253,0.1)] bg-opacity-75 p-5 rounded-md w-[300px] h-[300px] mt-7 relative">
            <div className="w-[57px] absolute top-3 flex justify-center items-center -mt-11 shadow-lg ">
              <img
                src={icon4}
                alt=""
                className="w-full filter drop-shadow-md"
              />
            </div>
            <div>
              <h3 className="text-center my-2 text-white">
                Libra Bank - The Freedom Tool for Smart Investors
              </h3>
              <p className="text-center text-[12px] text-[#6d6c6c]">
                Introducing Libra Bank, a sanctuary for your tokens. This
                interest-driven staking feature combines the best of both worlds
                - a medium Annual Percentage Yield (APY) and the freedom to
                withdraw at any time. Libra Bank is not just a staking platform;
                it's a financial freedom tool, allowing investors to shape their
                strategies with flexibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
