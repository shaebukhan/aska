import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tab,
  Tabs,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const FooterTabs = [
  {
    label: "Highest ROR",
    value: "highest",
  },
  {
    label: "Lowest ROR",
    value: "lowest",
  },
];

const ReturnAnalysisChart = () => {
  const [footerTabValue, setFooterTabValue] = useState("highest");

  const [chartData] = useState({
    series: [
      {
        name: "Last Period",
        data: [44, 55, 57, 56, 75, 77],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 50,
        background: "#DEEDBB",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          borderRadius: 8,
          endingShape: "rounded",
        },
      },
      colors: ["#CEE49C"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
        yaxis: {
          lines: {
            show: true, // Show horizontal lines
          },
        },
        xaxis: {
          lines: {
            show: false, // Hide vertical grid lines, jo ki help krti hai in indications verticaly to x-axis
          },
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Overall ROR",
          "Shoes",
          "T-Shirt",
          "Boots",
          "Hats",
          "Long Sleves",
        ],
      },
      yaxis: {
        title: {
          text: "Return Rate",
          style: {
            color: "#7E9746",
            fontsize: "20px",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (val) => val + " % items",
        },
      },
    },
  });

  return (
    <Card className="bg-[#DEEDBB] rounded-lg md:p-6 p-1">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none bg-inherit"
      >
        <div className="flex justify-between gap-8 ">
          <div>
            <Typography variant="h3" className="text-[#7E9746]">
              Return analysis
            </Typography>
            <Typography
              color="gray"
              className="mt-1 font-normal text-[#7E9746] text-lg"
            >
              Return rate within the selected time period{" "}
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="md:p-6 px-2 pb-0">
        {/* <div id="chart"> */}
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={300}
        />
        {/* </div>
      <div id="html-dist"></div> */}
      </CardBody>
      <CardFooter className="flex justify-center pt-0 mt-0">
        <Tabs value={footerTabValue} className="w-full md:w-[300px]">
          <TabsHeader
            className="bg-[#CEE49C] rounded-full p-0"
            indicatorProps={{
              className: `bg-[#7E9746] shadow-none rounded-full`,
            }}
          >
            {FooterTabs.map(({ label, value }, index) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setFooterTabValue(value)}
                className={
                  footerTabValue === value ? "text-[#ffffff]" : "text-[#7E9746]"
                }
              >
                &nbsp;&nbsp;{label}&nbsp;&nbsp;
              </Tab>
            ))}
          </TabsHeader>
        </Tabs>
      </CardFooter>
    </Card>
  );
};

export default ReturnAnalysisChart;
