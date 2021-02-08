import React from "react";
import "./AchievementCard.css";

export default function AchievementCard({ cardInfo, isDark, image }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      {image && (
        <img
          className="certificate-image-div"
          crossOrigin={"anonymous"}
          src={image}
          alt={image}
        />
      )}
      <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
        {cardInfo}
      </p>
    </div>
  );
}
