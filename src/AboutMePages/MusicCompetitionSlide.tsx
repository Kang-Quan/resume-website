import React from "react";
import { Typewriter } from "react-simple-typewriter";

interface MusicCompetitionSlideProps {
  title: string;
  content: string;
  images: string[];
}

const MusicCompetitionSlide: React.FC<MusicCompetitionSlideProps> = ({
  title,
  content,
  images,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center p-6 text-center">
      {/* Title: Very small on mobile, larger on medium+ */}
      <h2 className="text-[10px] sm:text-xs md:text-base lg:text-xl font-bold text-gold mb-2">
        {title}
      </h2>
      {/* Content: Even smaller on mobile */}
      <p className="text-[10px] sm:text-[12px] md:text-base lg:text-base text-gray-400 mb-2">
        {content}
      </p>
      {/* Image Grid: Two columns side by side */}
      <div className="grid grid-cols-1 gap-4 pb-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="mx-auto w-[35%] sm:w-[30%] md:w-[33%] lg:w-[40%] aspect-auto overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={img}
              alt={`Competition ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicCompetitionSlide;
