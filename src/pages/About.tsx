import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import WelcomeSlide from "../AboutMePages/WelcomeSlide";
import NormalText from "../AboutMePages/NormalText";
import Collage from "../AboutMePages/Collage";
import competition1 from "../assets/competition1.jpg";
import competition2 from "../assets/competition2.jpg";
import competition3 from "../assets/competition3.jpg";
import competition4 from "../assets/competition4.jpg";
import competition5 from "../assets/competition5.jpg";
import competition6 from "../assets/competition6.jpg";
import competition7 from "../assets/competition7.jpg";
import competition8 from "../assets/competition8.jpg";

import experience1 from "../assets/experience1.jpg";
import experience2 from "../assets/experience2.jpg";
import experience3 from "../assets/experience3.jpg";
import experience4 from "../assets/experience4.jpg";
import experience5 from "../assets/experience5.jpg";
import experience6 from "../assets/experience6.jpg";
import experience7 from "../assets/experience7.jpg";
import experience8 from "../assets/experience8.jpg";
import experience9 from "../assets/experience9.jpg";
import experience10 from "../assets/experience10.jpg";
import experience11 from "../assets/experience11.jpg";
import experience12 from "../assets/experience12.jpg";
import experience13 from "../assets/experience13.jpg";
import experience14 from "../assets/experience14.jpg";
import experience15 from "../assets/experience15.jpg";
import experience16 from "../assets/experience16.jpg";
import experience17 from "../assets/experience17.jpg";
import experience18 from "../assets/experience18.jpg";
import experience19 from "../assets/experience19.jpg";


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
			"As a member of Reverberance Youth, I participated in the Singapore Chinese Music Competition (Ensemble B), where we won 1st place, reflecting my passion for music.",
	},
	{
		photos: [
			competition1,
			competition2,
			competition3,
			competition4,
			competition5,
			competition6,
			competition7,
			competition8,
		],
	},
	{
		title: "🌍 Exploring & Connecting",
		content:
			"I enjoy traveling, trying new foods, and making new friends, embracing new experiences along the way.",
	},
	{
		photos: [
			experience1,
			experience2,
			experience3,
			experience4,
			experience5,
			experience6,
			experience7,
			experience8,
            experience9,
            experience10,
            experience11,
            experience12,
            experience13,
            experience14,
            experience15,
            experience16,
            experience17,
            experience18,
            experience19,
		],
	},
	{
		title: "📩 Let's Connect!",
		content:
			"If you're interested in my work, feel free to reach out to me at my contact page.",
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
								title={slides[currentSlide].title ?? ""}
								content={slides[currentSlide].content ?? ""}
							/>
						) : currentSlide === 1 ? (
							<NormalText
								title={slides[currentSlide].title ?? ""}
								content={slides[currentSlide].content ?? ""}
							/>
						) : currentSlide === 2 ? (
							<NormalText
								title={slides[currentSlide].title ?? ""}
								content={slides[currentSlide].content ?? ""}
							/>
						) : currentSlide === 3 ? (
							<Collage
								photos={slides[currentSlide].photos ?? []}
							/>
						) : currentSlide === 4 ? (
							<NormalText
								title={slides[currentSlide].title ?? ""}
								content={slides[currentSlide].content ?? ""}
							/>
						) : currentSlide === 5 ? (
							<Collage
								photos={slides[currentSlide].photos ?? []}
							/>
						) : (
							<NormalText
								title={slides[currentSlide].title ?? ""}
								content={slides[currentSlide].content ?? ""}
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
