import React from "react";
import Button_in_medical_service from "./Button_in_medical_service";
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
          <Button_in_medical_service />
        </div>
      </div>
    </div>
  );
}
