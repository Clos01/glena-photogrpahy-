import React, { useEffect, useRef } from "react";

const LazyImage = ({ src, alt, ...props }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If the image is in the viewport (or about to enter it), load it
        if (entry.isIntersecting) {
          const image = entry.target;
          const src = image.dataset.src;
          image.src = src;
          image.classList.add('fade'); // This class is for fade-in effect

          observer.disconnect();
        }
      });
    });

    observer.observe(imgRef.current);

    return () => { // Clean up the observer on component unmount
      observer.disconnect();
    };
  }, []);

  return <img ref={imgRef} data-src={src} alt={alt} {...props} />;
};

export default LazyImage;
