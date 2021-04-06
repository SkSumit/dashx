import React from "react";
import Image from "next/image";

export const Box = ({ launches }) => {
  return (
    <div className="tile is-parent is-fixed-size ">
      <div className="tile is-child box outer ">
        {launches.links.flickr_images[0] && (
          <Image
            src={launches.links.flickr_images[0]}
            layout="fill"
            className="outerimg"
            quality={50}
            priority={true}
          />
        )}

        <div className=" is-flex is-flex-direction-column is-fixed-size inner ">
          <h1 className={`title is-flex-grow-2 has-text-primary-light `}>
            <Image
              src={
                launches.links.mission_patch_small
                  ? launches.links.mission_patch_small
                  : "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png"
              }
              width={32}
              height={32}
            />{" "}
            <span
              className={`${
                launches.links.flickr_images[0] ? "has-text-primary-light" : ""
              }`}
            >
              {" "}
              {launches.mission_name}{" "}
            </span>
          </h1>

          <h3 className="title is-6 ">
            {new Date(launches.launch_date_local).toDateString()}{" "}
          </h3>
          <h3 className="subtitle is-6">
            {launches.rocket.rocket_name} launched from{" "}
            {launches.launch_site.site_name}
          </h3>
          <h3 className="subtitle is-7">
            {launches.launch_success ? (
              <span className="tag is-success" style={{ width: "50px" }}>
                Success
              </span>
            ) : (
              <span className="tag is-danger">Failed</span>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};
