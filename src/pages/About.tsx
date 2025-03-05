import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// Example slides (replace these with PowerPoint images if needed)
const slides = [
	{
		title: "👋 Welcome!",
		content: "Hi! I'm Kang Quan, a passionate developer.",
	},
	{
		title: "💻 Tech Stack",
		content: "I work with React, Tailwind CSS, and Framer Motion.",
	},
	{
		title: "🚀 Projects",
		content: "I build web apps, AI bots, and automation tools.",
	},
];

const About: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	// Auto-slide every 3 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="bg-background text-white h-[100%] w-[100%] flex flex-col items-center justify-center px-3">
			<h1 className="text-3xl sm:text-4xl font-bold text-gold mb-4">
				About Me
			</h1>
			{/* Computer Screen Frame */}
			<div className="relative w-[100%] sm:w-[85%] md:w-[75%] lg:w-[65%] aspect-[16/9] bg-black rounded-lg border-[10px] border-gray-700 shadow-lg flex items-center justify-center overflow-hidden">
				{/* Slideshow */}
				<motion.div
					key={currentSlide}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.5 }}
					className="absolute w-full h-full flex flex-col items-center justify-center p-6 text-center"
				>
					<h2 className="text-lg md:text-2xl font-bold text-gold">
						{slides[currentSlide].title}
					</h2>
					<p className="text-sm md:text-lg text-gray-400 mt-2">
						<Typewriter
							words={[slides[currentSlide].content]}
							loop={false}
							typeSpeed={50}
							deleteSpeed={30}
							delaySpeed={1000}
						/>
					</p>
				</motion.div>
			</div>
			{/* Thin bar */}
			<div className="w-[6%] sm:w-[5%] md:w-[4%] lg:w-[3.5%] h-[30px] bg-gray-600 rounded-t-md mt-1"></div>{" "}
			{/* Vertical pole */}
			{/* Stand Base */}
			<div className="w-[30%] sm:w-[25%] md:w-[20%] lg:w-[15%] h-[12px] bg-gray-700 rounded-lg mt-1 shadow-xl"></div>
			<p className="text-gray-400 text-sm mt-4">
				Auto-playing slideshow inside a virtual computer screen.
			</p>
		</div>
	);
};

export default About;