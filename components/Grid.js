import React from "react";
import { chunk } from "lodash";
import { Box } from "./Box";

export const Grid = ({ launches }) => {
  const chunkedLaunches = chunk(launches, 5);

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
