import React from "react";
import Select from "react-select";

export const Filters = ({ filters, setFilters, allYears }) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#131313",
      borderColor: "#131313",
      color: "white",
      height: 35,
      minHeight: 35,
      zIndex:2
    }),
    singleValue: (base, state) => ({
      ...base,
      color: "white",
    }),
    option: (base, state) => ({
      ...base,
      color: "black",
      zIndex:2
    }),
  };

  const options = [];
  allYears.map((item) =>
    options.push({
      value: item,
      label: item,
    })
  );
  const checkToggle = (e) => {
    switch (e.target.value) {
      case "successfulLaunch":
        return setFilters({
          ...filters,
          ["successfulLaunch"]: !filters.successfulLaunch,
        });
      case "successfulLanding":
        return setFilters({
          ...filters,
          ["successfulLanding"]: !filters.successfulLanding,
        });
      default:
        return;
    }
  };
  const changeYear = (e) => {
    setFilters({
      ...filters,
      year: e ? e.value : null,
    });
  };
  return (
    <div style={{ paddingLeft: "24px" }} className="columns is-vcentered ">
      <span className=" column is-narrow  ">
        <label className="checkbox box">
          <input
            type="checkbox"
            defaultChecked={filters.successfulLaunch}
            onClick={checkToggle}
            value="successfulLaunch"
          />{" "}
          Successful Launch
        </label>
      </span>
      <div className="column is-narrow ">
        <label className="checkbox box">
          <input
            type="checkbox"
            defaultChecked={filters.successfulLanding}
            onClick={checkToggle}
            value="successfulLanding"
          />{" "}
          Successful Landing
        </label>
      </div>
      <div className={"column is-4 "} style={{zIndex:2}}>
        <Select
          options={options}
          defaultValue={{
            value: filters.year,
            label: filters.year,
          }}
          styles={customStyles}
          isSearchable={true}
          onChange={changeYear}
          isClearable={true}
        />
      </div>
    </div>
  );
};
