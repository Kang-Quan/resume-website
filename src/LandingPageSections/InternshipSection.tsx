import React from "react";
import { motion } from "framer-motion";
import Timeline from "../animations/Timeline"; // Adjust the import path as needed
import AzendianLogo from "../assets/AzendianLogo.png";
import AzendianDashboard from "../assets/AzendianDashboard.jpg";

const InternshipSection: React.FC = () => {
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
					<h2 className="text-1.5xl md:text-3xl lg:text-4xl text-gold font-bold mb-5 text-left">
						Internship(
						<span className="text-gray-400">"Jan-Jun 2024"</span>)
					</h2>
					<p className="text-sm md:text-base lg:text-lg mb-3 pr-0.4">
						{/* Logo Before Company Name */}
						<img
							src={AzendianLogo} // Replace with the actual logo path
							alt="Logo"
							className="w-[80%] sm:w-[45%] md:w-[50%] lg:w-[50%] h-full mb-5"
						/>
						<strong>Company:</strong> Azendian Solutions Pte. Ltd.
					</p>
					<span className="text-sm md:text-base lg:text-lg text-gray-400 mb-3 pr-[15%] lg:pr-[34%]">
						A Singapore-based company specializing in AI and data
						analytics to drive operational efficiency and smart
						decision-making for a more sustainable Built
						Environment.
					</span>
					<p className="text-sm md:text-base lg:text-lg text-gray-400 mb-3">
						<strong>Role:</strong> Software Developer Intern
					</p>
					<p className="text-sm md:text-base lg:text-lg text-gray-400 mb-3 pr-[15%]">
						<strong>Responsibilities:</strong> Developed Real Time
						Dashboard to monitor and control machinaries
						<img
							src={AzendianDashboard} // Replace with the actual logo path
							alt="Image of dashboard used by our clients"
							className="w-[80%]  h-full mb-1 mt-3"
						/>
						<span className="text-gray-400 text-[0.7rem] mb-2">
							Image of dashboard used by our clients
						</span>
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default InternshipSection;
