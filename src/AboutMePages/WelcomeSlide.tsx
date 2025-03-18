import React from "react";
import { Typewriter } from "react-simple-typewriter";
import myPicture from "../assets/myPicture.jpg";

interface WelcomeSlideProps {
	title: string;
	content: string;
}

const WelcomeSlide: React.FC<WelcomeSlideProps> = ({ title, content }) => {
	return (
		<div className="flex flex-row items-center justify-between p-2 lg:p-10 w-full h-full">
			{/* Left Column: Picture in a circular frame */}
			<div className="w-1/2 flex justify-center items-center">
				<div className="relative w-[95%] md:w-[75%] lg:w-[70%] aspect-square border-4 border-gold rounded-full overflow-hidden bg-[#e1dfdd] mr-3">
					<img
						src={myPicture}
						alt="Kang Quan"
						className="object-contain w-full h-full transform -translate-x-[11%]"
					/>
				</div>
			</div>
			{/* Right Column: Text */}
			<div className="w-1/2 flex flex-col justify-center text-left">
				<h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-gold">
					{title}
				</h2>
				<p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mt-2">
					<Typewriter
						words={[content]}
						loop={1}
						typeSpeed={40}
						delaySpeed={1500}
                        cursor
					/>
				</p>
			</div>
		</div>
	);
};

export default WelcomeSlide;
