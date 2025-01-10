import React from "react";
import { motion } from "framer-motion";
import Timeline from "../animations/Timeline";
//import EducationIcon from "../assets/EducationIcon";
import {
	FaUniversity,
	FaCode,
	FaCogs,
	FaDatabase,
	FaLaptopCode,
	FaNetworkWired,
	FaRobot,
	FaBrain,
	FaWifi,
} from "react-icons/fa"; // Importing the icons

const EducationSection: React.FC = () => {
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
					<h2 className="text-2xl md:text-4xl lg:text-5xl text-gold font-bold mb-5 text-center md:text-left">
						Education()
					</h2>

					{/* University Info */}
					<div className="flex flex-col items-start ">
						<div className="flex flex-row items-start space-x-4">
							<FaUniversity className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gold" />
							<h3 className="text-sm md:text-lg lg:text-2xl font-bold mb-3">
								National University of Singapore
							</h3>
						</div>

						<p className="text-sm md:text-base lg:text-lg text-gray-400 mb-3">
							Bachelor of Computing (Honours) in Computer Science
						</p>
						<p className="text-gray-400 text-xs md:text-sm lg:text-base mb-3">
							<strong>From:</strong> Jan 2021 - Present
						</p>
						<p className="text-gray-400 text-xs md:text-sm lg:text-base mb-3">
							<strong>Cumulative Average Point:</strong> 4.17 (out
							of 5.0)
						</p>
						<p className="text-gray-400 text-xs md:text-sm lg:text-base mb-3">
							<strong>Relevant Coursework:</strong>
						</p>
					</div>

					<div className="flex flex-col items-start space-y-2">
						{/* Software Engineering */}
						<div className="flex items-center space-x-2">
							<FaCogs className="w-5 h-5 text-gold" />
							<p className="text-gray-400 text-xs md:text-sm lg:text-base">
								Software Engineering (Full Stack)
							</p>
						</div>

						{/* Data Structures and Algorithm */}
						<div className="flex items-center space-x-2">
							<FaCode className="w-5 h-5 text-gold" />
							<p className="text-gray-400 text-xs md:text-sm lg:text-base">
								Data Structures and Algorithm
							</p>
						</div>

						{/* Database */}
						<div className="flex items-center space-x-2">
							<FaDatabase className="w-5 h-5 text-gold" />
							<p className="text-gray-400 text-xs md:text-sm lg:text-base">
								Database
							</p>
						</div>

						{/* Internet of Things */}
						<div className="flex items-center space-x-2">
							<FaWifi className="w-5 h-5 text-gold" />
							<p className="text-gray-400 text-xs md:text-sm lg:text-base">
								Internet of Things
							</p>
						</div>

						{/* Networking */}
						<div className="flex items-center space-x-2">
							<FaNetworkWired className="w-5 h-5 text-gold" />
							<p className="text-gray-400 text-xs md:text-sm lg:text-base">
								Networking
							</p>
						</div>

						{/* Artificial Intelligence */}
						<div className="flex items-center space-x-2">
							<FaRobot className="w-5 h-5 text-gold" />
							<p className="text-gray-400 text-xs md:text-sm lg:text-base">
								Artificial Intelligence
							</p>
						</div>

						{/* Machine Learning */}
						<div className="flex items-center space-x-2">
							<FaBrain className="w-5 h-5 text-gold" />
							<p className="text-gray-400 text-xs md:text-sm lg:text-base">
								Machine Learning
							</p>
						</div>
						{/* Operating System */}
						<div className="flex items-center space-x-2">
							<FaLaptopCode className="w-5 h-5 text-gold" />
							<p className="text-gray-400 text-xs md:text-sm lg:text-base">
								Operating System
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default EducationSection;
