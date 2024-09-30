import React from "react";
import { Dropdown } from "flowbite-react";
import Import from "../assets/images/import.svg";
const Afilters = () => {

    return (
        <>
            <div className="p-[16px] flex justify-between items-center py-8 flex-wrap">
                <span className="text-[30px] font-[600]">Articles</span>
                <div className="flex items-center md:gap-3 gap-2 flex-wrap">
                    {/* <Button color="gray" onClick={toggleDatepicker}>
          Date Range
        </Button> */}

                    <Dropdown color="gray" label="Category">
                        <Dropdown.Item>Garments</Dropdown.Item>
                        <Dropdown.Item>Electronics</Dropdown.Item>
                        <Dropdown.Item>All</Dropdown.Item>
                    </Dropdown>
                    <Dropdown color="gray" label="Performes">
                        <Dropdown.Item>USA</Dropdown.Item>
                        <Dropdown.Item>UK</Dropdown.Item>
                        <Dropdown.Item>Russia</Dropdown.Item>
                    </Dropdown>
                    <Dropdown color="gray" label="Sustainable Tags">
                        <Dropdown.Item>Dollar</Dropdown.Item>
                        <Dropdown.Item>Pound</Dropdown.Item>
                        <Dropdown.Item>Ruble</Dropdown.Item>
                    </Dropdown>
                    <Dropdown color="gray" label="Stock">
                        <Dropdown.Item>Dollar</Dropdown.Item>
                        <Dropdown.Item>Pound</Dropdown.Item>
                        <Dropdown.Item>Ruble</Dropdown.Item>
                    </Dropdown><Dropdown color="gray" label="Warehouse">
                        <Dropdown.Item>Dollar</Dropdown.Item>
                        <Dropdown.Item>Pound</Dropdown.Item>
                        <Dropdown.Item>Ruble</Dropdown.Item>
                    </Dropdown>
                    <Dropdown color="gray" label="Names">
                        <Dropdown.Item>Dollar</Dropdown.Item>
                        <Dropdown.Item>Pound</Dropdown.Item>
                        <Dropdown.Item>Ruble</Dropdown.Item>
                    </Dropdown>
                    <button className="export-btn">
                        <img src={Import} alt="" />
                        Export
                    </button>
                </div>
            </div>
        </>
    );
};

export default Afilters;