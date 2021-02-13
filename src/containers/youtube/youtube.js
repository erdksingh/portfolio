import React from "react";
import { youtubeLinks } from "../../constants";
import "./youtube.css";
const Youtube = () => {
  return (
    <div className="youtube">
      {youtubeLinks.display &&
        youtubeLinks.urls.map((links) => {
          return (
            <iframe
              src={links.url}
              name={links.title}
              title={links.title}
              width="380"
              height="300"
              loading="lazy"
              referrerpolicy="no-referrer"
              style={{ padding: 5 }}
            />
          );
        })}
    </div>
  );
};

export default Youtube;
