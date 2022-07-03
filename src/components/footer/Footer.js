import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import WashHands from "../../assets/lottie/wash-your-hands";
import DisplayLottie from "../displayLottie/DisplayLottie";
import EMOJI from "../../common/Emoji";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {EMOJI(
            "Thanks for visiting this website, it was made for fun "
          )}
        </p>
        {/* <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          <a href="https://github.com/erdksingh/">linkedin</a>
        </p> */}
      </div>
    </Fade>
  );
}
