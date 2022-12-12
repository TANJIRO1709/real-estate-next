import React from "react";
import MaterialSelect from "../common/MaterialSelect";
import { AreaMenu, PropertyStatus, PropertyType } from "../../menus";
import { useState } from "react";
import ButtonRed from "../common/ButtonRed";

const SearchProperty = () => {
  // Fields For Material Select -------------->
  const [area, setArea] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [type, setType] = useState<string>("");
  // Fields For Material Select -------------->

  // ?Handle Area Change -------------->
  const handleAreaChange = (e: string) => {
    const newValue = e;
    setArea(newValue);
  };
  // !Handle Area Change -------------->

  // ?Handle Status Change -------------->
  const handleStatusChange = (e: string) => {
    const newValue = e;
    setStatus(newValue);
  };
  // !Handle Status Change -------------->

  // ?Handle Type Change -------------->
  const handleTypeChange = (e: string) => {
    const newValue = e;
    setType(newValue);
  };
  // !Handle Type Change -------------->

  return (
    <div className="p-4 mb-8">
      <div
        className={`left-0 top-87 width-90 right-0 mx-auto absolute bg-white p-10 rounded-lg search-property-box shadow-2xl shadow-slate-300 grid grid-cols-12 gap-4 items-center`}
      >
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 text-center">
          <MaterialSelect
            color="red"
            size="lg"
            variant="outlined"
            label="Choose Area"
            options={AreaMenu}
            change={handleAreaChange}
            disabled={false}
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 text-center">
          <MaterialSelect
            color="red"
            size="lg"
            variant="outlined"
            label="Property Status"
            options={PropertyStatus}
            change={handleStatusChange}
            disabled={false}
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 text-center">
          <MaterialSelect
            color="red"
            size="lg"
            variant="outlined"
            label="Property Type"
            options={PropertyType}
            change={handleTypeChange}
            disabled={false}
          />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 text-center flex">
          <ButtonRed width="full" text="Find Now" handleClick={""} />
        </div>
      </div>
    </div>
  );
};

export default SearchProperty;
