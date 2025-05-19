import React, { useContext } from "react";
import "./Achievement.css";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../constants";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import firstImage from "../../assets/images/instaAward1.jpg";
import secondImage from "../../assets/images/instaAward2.jpg";
import thirdImage from "../../assets/images/instaAward3.jpg";
import fourthImage from "../../assets/images/instaAward4.jpg";

export default function Achievement() {
  const imageLookUp = {
    0: firstImage,
    1: secondImage,
    2: thirdImage,
    3: fourthImage,
  };
  const { isDark } = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={card}
                  // image={imageLookUp[i]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
