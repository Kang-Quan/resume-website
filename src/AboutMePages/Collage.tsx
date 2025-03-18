import React from "react";
import Masonry from "react-masonry-css";

interface CollageProps {
  photos: string[]; // Accepts an array of image URLs
}

const Collage: React.FC<CollageProps> = ({ photos }) => {
  const breakpointColumnsObj = {
    default: 3, // Large screens (≥ 1100px) → 3 columns
  };

  return (
    <div className="w-full h-full overflow-y-auto scrollable-container px-4 py-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="masonry-column space-y-4"
      >
        {photos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="gallery"
            className="w-full h-auto rounded-lg shadow-md object-contain"
          />
        ))}
      </Masonry>
    </div>
  );
};

export default Collage;
