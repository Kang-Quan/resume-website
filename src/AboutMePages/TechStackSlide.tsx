import React from "react";
import { Typewriter } from "react-simple-typewriter";

interface TechStackSlideProps {
	title: string;
	content: string;
}

const TechStackSlide: React.FC<TechStackSlideProps> = ({ title, content }) => {
	return (
		<div className="flex flex-col items-center justify-center p-6 text-center">
			<h2 className="text-lg md:text-2xl font-bold text-gold">{title}</h2>
			<p className="text-sm md:text-lg text-gray-400 mt-2">
				<Typewriter
					words={[content]}
					loop={1}
					typeSpeed={50}
					delaySpeed={1000}
				/>
			</p>
		</div>
	);
};

export default TechStackSlide;
