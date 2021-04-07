import React from "react";
import { chunk } from "lodash";
import { Box } from "./Box";

export const Grid = ({ launches, gridLoading }) => {
  const chunkedLaunches = chunk(launches, 4);
  console.log(gridLoading)
  if (gridLoading) {
    return (
      <div className="container has-text-centered">
        <h1 className="title is-1 has-text-centered bounce">🚀 </h1>
      </div>
    );
  }
  return (
    <div>
      {chunkedLaunches.map((row, index) => {
        return (
          <div className="tile is-parent " key={index}>
            {row.map((col, index) => {
              return <Box launches={col} key={index} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
