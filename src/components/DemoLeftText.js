import React from "react";
export default function DemoRightText({
  imgDemo,
  idDemo,
  titelDemo,
  captionDemo,
  hrefDemo
}) {
  return (
    <div className="demolefttext">
      <div className="verticalalign">
        <div className="lefttext">
          <h5>{titelDemo}</h5>
          <p>
            {captionDemo} <a href={hrefDemo}>Read More...</a>
          </p>
        </div>
        <img src={imgDemo} id={idDemo} alt="RNS" />
      </div>
    </div>
  );
}
