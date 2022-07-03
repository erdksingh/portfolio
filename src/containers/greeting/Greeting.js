import React, { useContext } from "react";
import { Fade } from "react-reveal";
import "./Greeting.css";
import firstAnimation from "../../assets/lottie/first";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import { illustration, greeting } from "../../constants";
import StyleContext from "../../contexts/StyleContext";
import LoadImage from "../../common/LoadImage";
import EMOJI from "../../common/Emoji";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={
                  isDark ? "dark-mode greeting-text-p" : "greeting-text"
                }
              >
                {greeting.title}
                <span className="wave-emoji">{EMOJI("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={firstAnimation} />
            ) : (
              LoadImage({
                image: {
                  alt: "man sitting on table",
                  src: "../../assets/images/manOnTable.svg",
                },
                visibleByDefault: true,
              })
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
