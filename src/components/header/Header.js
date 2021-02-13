import React, { useContext, useState } from "react";
import * as Icon from "react-feather";
import Headroom from "react-headroom";
import Flip from "react-reveal/Flip";
import {
  achievementSection,
  blogSection,
  greeting,
  openSource,
  skillsSection,
  talkSection,
  workExperiences,
} from "../../constants";
import StyleContext from "../../contexts/StyleContext";
import "./Header.css";

const SunMoon = ({ darkMode }) => {
  console.log(darkMode);
  const styleContext = useContext(StyleContext);
  const [isDark, setIsDark] = useState(false);
  return (
    <div
      className="SunMoon"
      defaultValue={isDark}
      id="mode"
      aria-details="change theme"
      aria-describedby="change theme"
      onClick={() => {
        styleContext.changeTheme();
        setIsDark(!isDark);
      }}
    >
      <div>{darkMode ? <Icon.Sun color={"#ffc107"} /> : <Icon.Moon />}</div>
    </div>
  );
};

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <Flip left>
          <img
            name={greeting.name}
            crossOrigin={"anonymous"}
            className="logo-roundedimg"
            src={greeting.logo}
            alt={"logo"}
          />
        </Flip>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a>
              <span title={isDark ? "change light theme" : "change dark theme"}>
                <SunMoon darkMode={isDark} />
              </span>
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
