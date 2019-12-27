import React, { Component } from "react";
import NavPart from "../components/NavPart";
import Section2 from "../components/Section2";
import Mainbanner from "../components/MainBanner";
import DemoRightText from "../components/DemoRightText.js";
import DemoLeftText from "../components/DemoLeftText.js";
import Section3secondary from "../components/Section3secondary.js";
import pc from "../images/assets/macbook-mock-dribbble.png";
import mobile from "../images/assets/iphone-11.png";
export default class Error extends Component {
  render() {
    return (
      <div>
        <NavPart />
        <Mainbanner />
        <Section2 />
        <DemoRightText
          imgDemo={pc}
          idDemo="pc"
          titelDemo="Medical Service"
          captionDemo="Neurological Disease System with the help
          of Iran’s top hospitals in this field, relying
          on radiological, neurological and
          neurosurgical achievements can diagnose
          diseases such as MS, brain tumor, etc.
          Examines the patient’s clinical tests and
          results and identifies results with the latest
          treatment protocols."
          hrefDemo="#"
        />
        <Section3secondary />
        <DemoRightText
          imgDemo={pc}
          idDemo="pc"
          titelDemo="Symptoms checking system"
          captionDemo="Symptoms checking system with a wide range of
          diseases and careful examination of the
          symptoms of patients can identify a wide variety
          of diseases and problems. High computational
          speed, sufficient accuracy in various specialized
          fields, high reliability in the detection of various
          diseases are features of this system."
          hrefDemo="#"
        />
        <DemoLeftText
          imgDemo={mobile}
          idDemo="mobile"
          titelDemo="Drug Interaction System"
          captionDemo="Symptoms checking system with a wide range of
           diseases and careful examination of the symptoms of
            patients can identify a wide variety of diseases and problems.
             High computational speed, sufficient accuracy in various
              specialized fields, high reliability in the
               detection of various diseases are features of this system."
          hrefDemo="#"
        />
        <DemoRightText
          imgDemo={mobile}
          idDemo="mobile"
          titelDemo="Appointment system"
          captionDemo="The doctor and nurse scheduling system gives you access to any
          physician or nurse. You choose different treatment centers, consider
          doctors or healthcare options, and examine the possibilities of each. You
          make time with your doctor. Score your doctors. Find the nearest medical
          center and contact doctors without delay."
          hrefDemo="#"
        />
        <DemoLeftText
          imgDemo={pc}
          idDemo="pc"
          titelDemo="Data Registering"
          captionDemo="Symptoms checking system with a wide range of
          diseases and careful examination of the symptoms
          of patients can identify a wide variety of diseases
          and problems. High computational speed,
          sufficient accuracy in various specialized fields,
          high reliability in the detection of various diseases
          are features of this system."
          hrefDemo="#"
        />
      </div>
    );
  }
}
