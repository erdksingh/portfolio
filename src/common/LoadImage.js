import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LoadImage = ({ image, visibleByDefault }) => (
  <div>
    <LazyLoadImage
      key={image.src + ":" + image.alt}
      alt={image.alt}
      height={image.height}
      src={image.src} // use normal <img> attributes as props
      width={image.width}
      height={image.height}
      visibleByDefault={visibleByDefault}
    />
    <span>{image.caption}</span>
  </div>
);

export default LoadImage;
