import React from "react";
import arrowdown from "../assets/images/arrow-down.png";
import arrowup from "../assets/images/arrow-up.png";

const StatsCardSection = () => {
  return (
    <section className="px-[16px] bg-[#FCF9F3] mt-4">
      {/* Cards */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="bg-[#CFC8E9] rounded-lg overflow-hidden shadow-lg p-6">
          <h2 className="text-md font-semibold text-[#665A90]">Total sales</h2>
          <h2 className="text-3xl font-bold text-[#665A90] mt-2">118,0k</h2>
          <h4 className="text-md font-medium text-[#665A90] mt-2">
            <div className="flex">
              <img src={arrowdown} alt="Arrow Down" className="w-4 h-4 mt-1" />{" "}
              22% vs last period
            </div>
          </h4>
          <hr className="my-2 border-[#665A90]" />
          <h4 className="text-md font-medium text-[#665A90]">
            <div className="flex">
              <img src={arrowup} alt="Arrow Down" className="w-4 h-4 mt-1" />{" "}
              22% vs same period YoY
            </div>
          </h4>
        </div>
        <div className="bg-[#CFC8E9] rounded-lg overflow-hidden shadow-lg p-6">
          <h2 className="text-md font-semibold text-[#665A90]">Total orders</h2>
          <h2 className="text-3xl font-bold text-[#665A90] mt-2">1320</h2>
          <h4 className="text-md font-medium text-[#665A90] mt-2">
            <div className="flex">
              <img src={arrowup} alt="Arrow Down" className="w-4 h-4 mt-1" />{" "}
              22% vs last period
            </div>
          </h4>
          <hr className="my-2 border-[#665A90]" />
          <h4 className="text-md font-medium text-[#665A90]">
            <div className="flex">
              <img src={arrowdown} alt="Arrow Down" className="w-4 h-4 mt-1" />{" "}
              22% vs same period YoY
            </div>
          </h4>
        </div>
        <div className="bg-[#CFC8E9] rounded-lg overflow-hidden shadow-lg p-6">
          <h2 className="text-md font-semibold text-[#665A90]">
            Total returns
          </h2>
          <h2 className="text-3xl font-bold text-[#665A90] mt-2">32,7k</h2>
          <h4 className="text-md font-medium text-[#665A90] mt-2">
            <div className="flex">
              <img src={arrowdown} alt="Arrow Down" className="w-4 h-4 mt-1" />{" "}
              22% vs last period
            </div>
          </h4>
          <hr className="my-2 border-[#665A90]" />
          <h4 className="text-md font-medium text-[#665A90]">
            <div className="flex">
              <img src={arrowup} alt="Arrow Down" className="w-4 h-4 mt-1" />{" "}
              22% vs same period YoY
            </div>
          </h4>
        </div>
        <div className="bg-[#CFC8E9] rounded-lg overflow-hidden shadow-lg p-6">
          <h2 className="text-md font-semibold text-[#665A90]">AOV</h2>
          <h2 className="text-3xl font-bold text-[#665A90] mt-2">90€</h2>
          <h4 className="text-md font-medium text-[#665A90] mt-2">
            <div className="flex">
              <img src={arrowup} alt="Arrow Down" className="w-4 h-4 mt-1" />{" "}
              22% vs last period
            </div>
          </h4>
          <hr className="my-2 border-[#665A90]" />
          <h4 className="text-md font-medium text-[#665A90]">
            <div className="flex">
              <img src={arrowdown} alt="Arrow Down" className="w-4 h-4 mt-1" />{" "}
              22% vs same period YoY
            </div>
          </h4>
        </div>
        <div className="bg-[#CFC8E9] rounded-lg overflow-hidden shadow-lg p-6">
          <h2 className="text-md font-semibold text-[#665A90]">
            Items per basket
          </h2>
          <h2 className="text-3xl font-bold text-[#665A90] mt-2">1</h2>
          <h4 className="text-md font-medium text-[#665A90] mt-2">
            <div className="flex">
              <img src={arrowup} alt="Arrow Down" className="w-4 h-4 mt-1" />{" "}
              22% vs last period
            </div>
          </h4>
          <hr className="my-2 border-[#665A90]" />
          <h4 className="text-md font-medium text-[#665A90]">
            <div className="flex">
              <img src={arrowdown} alt="Arrow Down" className="w-4 h-4 mt-1" />{" "}
              22% vs same period YoY
            </div>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default StatsCardSection;
