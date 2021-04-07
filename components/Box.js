import React, { useState } from "react";
import Image from "next/image";

export const Box = ({ launches }) => {
  const [show, setshow] = useState(false);
  return (
    <div className="tile is-parent is-fixed-size ">
      <a
        className={`tile is-child box outer ${
          launches.links.article_link ? "is-clickable" : ""
        }   `}
        onMouseEnter={() => setshow(true)}
        onMouseLeave={() => setshow(false)}
        target="_blank"
        href={launches.links.article_link}
      >
        {show && (
          <Image
            src={
              launches.links.flickr_images[0]
                ? launches.links.flickr_images[0]
                : "/spacex.png"
            }
            layout="fill"
            className="outerimg"
            quality={50}
          />
        )}
        <div className=" is-flex is-flex-direction-column is-fixed-size inner ">
          <h1 className={`title is-flex-grow-1 has-text-primary-light `}>
            <Image
              src={
                launches.links.mission_patch_small
                  ? launches.links.mission_patch_small
                  : "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png"
              }
              width={32}
              height={32}
            />{" "}
            {launches.mission_name}{" "}
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
              <h3 className="tag is-success">Success</h3>
            ) : (
              <h3 className="tag is-danger">Failed</h3>
            )}
          </h3>
        </div>
      </a>
    </div>
  );
};
