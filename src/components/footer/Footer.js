import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import WashHands from "../../assets/lottie/wash-your-hands";
import DisplayLottie from "../displayLottie/DisplayLottie";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji(
            "In this pandemic, its advisable to wash your hands 😍. Just sharing this message"
          )}
          <div className="greeting-image-div">
            <DisplayLottie animationData={WashHands} />
          </div>
        </p>
        {/* <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          <a href="https://github.com/erdksingh/">linkedin</a>
        </p> */}
      </div>
    </Fade>
  );
}
