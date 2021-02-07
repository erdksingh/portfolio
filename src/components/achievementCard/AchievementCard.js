import React from "react";
import "./AchievementCard.css";

export default function AchievementCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
        {cardInfo}
      </p>
    </div>
  );
}
