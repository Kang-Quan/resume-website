import React from "react";
import { Typewriter } from "react-simple-typewriter";

interface NormalTextProps {
  title: string;
  content: string;
}

const NormalText: React.FC<NormalTextProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col items-center justify-center p-16 text-center">
      <h2 className="text-lg md:text-2xl font-bold text-gold">{title}</h2>
      <p className="text-sm md:text-lg text-gray-400 mt-2">
        <Typewriter
          words={[content]}
          loop={1}
          typeSpeed={30}
          delaySpeed={1000}
        />
      </p>
    </div>
  );
};

export default NormalText;
