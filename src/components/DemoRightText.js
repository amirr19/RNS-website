import React from "react";
export default function DemoRightText({
  imgDemo,
  titelDemo,
  idDemo,
  captionDemo,
  hrefDemo
}) {
  return (
    <div className="demorightext">
      <div className="verticalalign">
        <img src={imgDemo} id={idDemo} alt="RNS" />
        <div className="righttext">
          <h5>{titelDemo}</h5>
          <p>
            {captionDemo} <a href={hrefDemo}>Read More...</a>
          </p>
        </div>
      </div>
    </div>
  );
}
