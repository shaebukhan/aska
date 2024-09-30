import React from "react";
import MainColumnChart from "./MainColumnChart";
import DiscountAnalysisChart from "./DiscountAnalysisChart";
import CategoryPerformanceMatrixChart from "./CategoryPerformanceMatrixChart";
import ReturnAnalysisChart from "./ReturnAnalysisChart";
import StockSplitSalesChart from "./StockSplitSalesChart";

const Chart = () => {
  return (
    <>
      <MainColumnChart />
      <div className="flex px-4 justify-between gap-8 flex-wrap md:flex-row flex-col mt-12">
        <div className="md:w-[45%] w-full">
          <DiscountAnalysisChart />
        </div>
        <div className="md:w-[45%] w-full">
          <CategoryPerformanceMatrixChart />
        </div>
      </div>
      <div className="flex px-4 justify-between gap-8 flex-wrap mt-12 md:flex-row flex-col">
        <div className="md:w-[45%] w-full">
          <ReturnAnalysisChart />
        </div>
        <div className="md:w-[45%] w-full">
          <StockSplitSalesChart />
        </div>
      </div>
    </>
  );
};

export default Chart;
