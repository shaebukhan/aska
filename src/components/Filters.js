import React, { useState } from "react";
import { Dropdown } from "flowbite-react";
import { FiCalendar } from "react-icons/fi";
import Datepicker from "react-tailwindcss-datepicker";

const Filters = () => {
  const [value, setValue] = useState("");
  const [dateRange, setDateRange] = useState("");

  return (
    <div className="p-[16px] flex justify-between items-center py-8 flex-wrap">
      <span className="text-[30px] font-[600]">Sales Insights</span>
      <div className="flex items-center md:gap-3 gap-2 flex-wrap">
        {/* <Button color="gray" onClick={toggleDatepicker}>
          Date Range
        </Button> */}
        {dateRange === "custom" && (
          <Datepicker
            value={value}
            useRange={false}
            onChange={(newValue) => setValue(newValue)}
          />
        )}
        <Dropdown
          color="gray"
          label={
            <div className="flex items-center gap-1">
              <FiCalendar />
              <span>{dateRange.length ? dateRange : "Date Range"}</span>
            </div>
          }
          arrowIcon={false}
        >
          {["today", "week", "month", "year", "custom"].map((value) => (
            <Dropdown.Item
              key={value}
              value={value}
              onClick={() => setDateRange(value)}
              className={`cursor-pointer ${
                dateRange.includes(value) ? "bg-gray-200" : "bg-white"
              }`} // Highlight selected item
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Dropdown.Item>
          ))}
        </Dropdown>
        <Dropdown color="gray" label="Country">
          <Dropdown.Item>USA</Dropdown.Item>
          <Dropdown.Item>UK</Dropdown.Item>
          <Dropdown.Item>Russia</Dropdown.Item>
        </Dropdown>
        <Dropdown color="gray" label="Currency">
          <Dropdown.Item>Dollar</Dropdown.Item>
          <Dropdown.Item>Pound</Dropdown.Item>
          <Dropdown.Item>Ruble</Dropdown.Item>
        </Dropdown>
        <Dropdown color="gray" label="Category">
          <Dropdown.Item>Garments</Dropdown.Item>
          <Dropdown.Item>Electronics</Dropdown.Item>
          <Dropdown.Item>All</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};

export default Filters;
