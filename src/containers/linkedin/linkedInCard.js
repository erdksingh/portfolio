import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";

const LinkedInCard = () => {
  const { isDark } = useContext(StyleContext);

  return (
    <div
      class="LI-profile-badge"
      data-version="v1"
      data-size="large"
      data-locale="en_US"
      data-type="horizontal"
      data-theme={isDark ? "light" : "dark"}
      data-vanity="erdksingh"
      style={{ textTransform: "none" }}
    >
      <a
        class="LI-simple-link"
        href="https://au.linkedin.com/in/erdksingh?trk=profile-badge"
        // href="https://www.linkedin.com/in/erdksingh/detail/recommendations"
      >
        Durgesh Singh
      </a>
    </div>
  );
};

export default LinkedInCard;
