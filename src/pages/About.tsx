import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import WelcomeSlide from "../AboutMePages/WelcomeSlide";
import NormalText from "../AboutMePages/NormalText";
import MusicCompetitionSlide from "../AboutMePages/MusicCompetitionSlide";
import competition1 from "../assets/competition1.jpg";
//import competition2 from "../assets/competition2.jpg";

// Example slides data
const slides = [
	{
		title: "👋 Welcome!",
		content:
			"Hi! I'm Kang Quan – A passionate developer and Chinese Orchestra enthusiast, crafting code by day and music by night.",
	},
	{
		title: "🌙 Night Highlights",
		content:
			"You have seen my works I did in my day, now I am going to show you some highlights of my works at night.",
	},
	{
		title: "🏆 Singapore Chinese Music Competition",
		content:
			"We won 1st for the Singapore Chinese Music Competition (ensemble B), showcasing my passion in music.",
		images: [competition1],
	},
];

const About: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	// Manual navigation functions
	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};
	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	return (
		<div className="bg-background text-white h-[100%] w-[100%] flex flex-col items-center justify-center px-3">
			<h1 className="text-3xl sm:text-4xl font-bold text-gold mb-4">
				About Me
			</h1>
			{/* Computer Screen Frame */}
			<div className="relative w-[100%] sm:w-[85%] md:w-[75%] lg:w-[65%] aspect-[4/3] md:aspect-[16/9] bg-black rounded-lg border-[10px] border-gray-700 shadow-lg flex items-center justify-center overflow-hidden">
				{/* Left Arrow (only render if not first slide) */}
				{currentSlide >= 1 && (
					<button
						onClick={prevSlide}
						className="absolute bottom-2 left-4 sm:left-4 text-gray-400 hover:text-gold transition text-2xl sm:text-3xl z-20"
					>
						<FaArrowLeft />
					</button>
				)}

				{/* Slideshow with Typewriter Effect */}
				<AnimatePresence mode="wait">
					<motion.div
						key={currentSlide}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.5 }}
						className="absolute w-full h-full flex items-center justify-center text-center"
					>
						{currentSlide === 0 ? (
							<WelcomeSlide
								title={slides[currentSlide].title}
								content={slides[currentSlide].content}
							/>
						) : currentSlide === 1 ? (
							<NormalText
								title={slides[currentSlide].title}
								content={slides[currentSlide].content}
							/>
						) : (
							<MusicCompetitionSlide
								title={slides[currentSlide].title}
								content={slides[currentSlide].content}
								images={slides[currentSlide].images ?? []}
							/>
						)}
					</motion.div>
				</AnimatePresence>

				{/* Right Arrow (only render if not last slide) */}
				{currentSlide < slides.length - 1 && (
					<button
						onClick={nextSlide}
						className="absolute bottom-2 right-4 sm:right-4 text-gray-400 hover:text-gold transition text-2xl sm:text-3xl"
					>
						<FaArrowRight />
					</button>
				)}
			</div>

			{/* Thin bar */}
			<div className="w-[6%] sm:w-[5%] md:w-[4%] lg:w-[3.5%] h-[30px] bg-gray-600 rounded-t-md mt-1"></div>
			{/* Stand Base */}
			<div className="w-[30%] sm:w-[25%] md:w-[20%] lg:w-[15%] h-[12px] bg-gray-700 rounded-lg mt-1 shadow-xl"></div>
		</div>
	);
};

export default About;
