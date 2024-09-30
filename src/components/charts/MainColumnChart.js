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

const TABS = [
  {
    label: "Value",
    value: "value",
  },
  {
    label: "Quantity",
    value: "quantity",
  },
];
const FooterTabs = [
  {
    label: "Days",
    value: "days",
  },
  {
    label: "Weeks",
    value: "week",
  },
  {
    label: "Months",
    value: "months",
  },
];
const MainColumnChart = () => {
  const [tabValue, setTabValue] = useState("value");
  const [footerTabValue, setFooterTabValue] = useState("days");

  const [chartData] = useState({
    series: [
      {
        name: "Last Period",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 77],
      },
      {
        name: "Current Period",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 91],
      },
    ],
    options: {
      chart: {
        type: "bar",
        background: "#9DDEB9",
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
          borderRadiusApplication: "end",
        },
      },
      colors: ["#70CE98", "#18974E"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
        yaxis: {
          lines: {
            show: false, // Hide horizontal lines
          },
        },
        xaxis: {
          lines: {
            show: false, // Hide vertical grid lines, jo ki help krti hai in indications verticaly to x-axis
          },
        },
      },
      //  legend basically are the indicators on which you hover nd their assoisated bar gets highlighted
      legend: {
        position: "top",
        horizontalAlign: "right",
        offsetY: 0,
        markers: {
          radius: 12, // legend dot ka radius 50 percent
          shape: "circle", // Ensures circle shape dots ki
          strokeWidth: 0, // default white border hi stroke ha
          offsetX: -5,
          strokeColors: "transparent",
          fillColors: undefined, // Let the default colors stay which is defined in colors object normally
        },
        itemMargin: {
          horizontal: 5,
          vertical: 0,
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        title: {
          text: "Sales Amount",
          style: {
            color: "#147E41",
            fontsize: "50px",
          },
        },
      },
      // xaxis: {
      //   title: {
      //     text: "Month",
      //     style: {
      //       color: "#147E41",
      //       fontsize: "50px",
      //     },
      //   },
      // },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (val) => "$ " + val + " thousands",
        },
      },
      responsive: [
        // {
        //   breakpoint: 1440,
        //   options: {
        //     chart: {
        //       width: 1119,
        //     },
        //   },
        // },
        {
          breakpoint: 450,
          options: {
            chart: {
              width: 1119,
            },
          },
        },
      ],
    },
  });

  return (
    <div className="px-4">
      <Card className="bg-[#9DDEB9] mt-12 rounded-lg md:p-6 p-2">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none bg-inherit"
        >
          <div className="flex justify-between gap-5 md:pl-6 pl-0 md:flex-row flex-col">
            <div>
              <Typography variant="h3" className="text-[#147E41]">
                Total Sales
              </Typography>
              <Typography
                color="gray"
                className="mt-1 font-normal text-[#147E41] text-lg"
              >
                Total Sales in GMV/Quantity vs Same Period Last Year
              </Typography>
            </div>
            <Tabs value={tabValue} className="w-full md:w-max">
              <TabsHeader
                className="bg-[#C9EDD8] p-0"
                indicatorProps={{
                  className: `bg-[#1DAC5A] shadow-none rounded-none ${
                    tabValue === TABS[0].value
                      ? "rounded-l-md"
                      : tabValue === TABS[TABS.length - 1].value
                      ? "rounded-r-md"
                      : ""
                  }`,
                }}
              >
                {TABS.map(({ label, value }, index) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setTabValue(value)}
                    className={
                      tabValue === value ? "text-[#C9EDD8]" : "text-[#1DAC5A]"
                    }
                  >
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
          </div>
        </CardHeader>
        <CardBody className="md:p-6 px-2 overflow-x-auto">
          {/* <div id="chart"> */}
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={400}
          />
          {/* </div> */}
          {/* <div id="html-dist"></div> */}
        </CardBody>
        <CardFooter className="flex justify-center pt-0">
          <Tabs value={footerTabValue} className="w-full md:w-max">
            <TabsHeader
              className="bg-[#C9EDD8] rounded-full p-0"
              indicatorProps={{
                className: `bg-[#1DAC5A] shadow-none rounded-full`,
              }}
            >
              {FooterTabs.map(({ label, value }, index) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setFooterTabValue(value)}
                  className={
                    footerTabValue === value
                      ? "text-[#C9EDD8]"
                      : "text-[#1DAC5A]"
                  }
                >
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MainColumnChart;
