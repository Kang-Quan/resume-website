import React from "react";
import { motion } from "framer-motion";
import Timeline from "../animations/Timeline"; // Adjust the import path if needed

const IntroductionSection: React.FC = () => {
	return (
		<section className="bg-background h-full w-full text-white flex items-center justify-center">
			<div className="relative flex items-center justify-start h-full w-full pl-4 md:pl-25p lg:pl-30p">
				<Timeline lineHeight="100%" />

				<motion.div
					initial={{ opacity: 1 }}
					className="flex flex-col items-start text-left pl-4 md:pl-8"
				>
					<h1 className="text-4xl md:text-5xl text-gold font-bold mb-2 animate-rotateIn">
						kq = new kq()
					</h1>
					<p className="text-base md:text-2xl text-gray-400 mb-4 opacity-0 animate-slideIn animation-delay-1000">
						Lee Kang Quan
					</p>
					<p className="text-sm md:text-lg text-gray-500 opacity-0 animate-slideIn animation-delay-1000">
						Just a CS student
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default IntroductionSection;
