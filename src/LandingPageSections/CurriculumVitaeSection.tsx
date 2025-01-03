import React from "react";
import { motion } from "framer-motion";
import Timeline from "../animations/Timeline"; // Adjust the path as necessary
import DownloadIcon from "../assets/DownloadIcon"; // Adjust the path as necessary

const CurriculumVitaeSection: React.FC = () => {
	return (
		<section className="bg-background h-full w-full text-white flex items-center justify-center">
			<div className="relative flex items-center justify-start h-full w-full pl-4 md:pl-25p lg:pl-30p">
				<Timeline lineHeight="100%" />

				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					className="flex flex-col items-start text-left pl-4 md:pl-8"
				>
					<h2 className="text-2xl md:text-4xl lg:text-5xl text-gold font-bold mb-4 text-center md:text-left">
						CurriculumVitae(
						<span className="text-gray-400">"kq"</span>)
					</h2>
					<p className="text-sm md:text-base lg:text-lg text-gray-500 mb-4">
						&lt;Showcase of my work + life&gt;
					</p>

					{/* Download Button */}
					{/* <a
						href="/path-to-your-cv.pdf" // Replace with the actual path to your CV
						download
						className="flex items-center text-gold font-bold text-base md:text-lg lg:text-xl bg-transparent border border-gold px-4 py-2 rounded-md hover:bg-gold hover:text-background transition duration-300"
					>
						<DownloadIcon className="w-5 h-5 mr-2" />
						Download CV
					</a> */}
				</motion.div>
			</div>
		</section>
	);
};

export default CurriculumVitaeSection;
