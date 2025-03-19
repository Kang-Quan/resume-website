import React from "react";
import { Typewriter } from "react-simple-typewriter";

interface NormalTextProps {
	title: string;
	content: string;
}

const NormalText: React.FC<NormalTextProps> = ({ title, content }) => {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full text-center px-6 sm:px-8 md:px-12 py-10 sm:py-14 md:py-20">
			<h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-gold leading-tight">
				{title}
			</h3>
			<p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mt-3 sm:mt-5 md:mt-7 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
				<span>
					<Typewriter
						words={[content]}
						loop={1}
						typeSpeed={25}
						deleteSpeed={30}
						delaySpeed={1500}
						cursor
					/>
				</span>
			</p>
		</div>
	);
};

export default NormalText;
