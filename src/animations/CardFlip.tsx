import { useState } from "react";
import { motion } from "framer-motion";

import SpaceCity from "../assets/AzendianDashboard.jpg";
import SpaceCity1 from "../assets/AzendianLogo.png";

const CardFlip: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleFlip = (): void => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  return (
    <div className="flex items-center justify-center bg-black h-full w-full">
      <div
        className="flip-card w-[50%] h-[40%] rounded-md"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-full h-full bg-cover border-[1px] text-white rounded-lg p-[2%]"
            style={{ backgroundImage: `url(${SpaceCity})` }}
          >
            <h1 className="text-[2vw] font-bold">Sky</h1>
            <p className="text-[1.5vw]">Live on top of the world</p>
          </div>

          <div
            className="flip-card-back w-full h-full bg-cover border-[1px] text-white rounded-lg p-[2%]"
            style={{ backgroundImage: `url(${SpaceCity1})` }}
          >
            <h1 className="text-[2vw] font-bold">Earth</h1>
            <p className="text-[1.5vw]">Or in the maze of the city</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardFlip;
