import React from "react";
import { motion } from "framer-motion";
import Timeline from "../animations/Timeline"; // Adjust the import path if needed

const WorkIntroSection: React.FC = () => {
	return (
		<section className="bg-background h-full w-full text-white flex items-center justify-center">
			<div className="relative flex items-center justify-start h-full w-full pl-4 md:pl-25p lg:pl-30p">
				<Timeline lineHeight="50%" isFullHeight={false} />

				<motion.div
					initial={{ opacity: 1 }}
					className="flex flex-col items-start text-left pl-4 md:pl-8"
				>
					<h1 className="text-2xl md:text-4xl lg:text-5xl text-gold font-bold mb-2 animate-rotateIn">
						works(
						<span className="text-gray-400">"selected"</span>)
					</h1>
					<p className="text-sm md:text-lg lg:text-2xl font-bold mb-3 text-gray-400 opacity-0 animate-slideIn animation-delay-1000">
						// Selected projects to showcase.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default WorkIntroSection;
