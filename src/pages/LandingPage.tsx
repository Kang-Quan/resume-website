import React from "react";
import { motion } from "framer-motion";
import Timeline from "../animations/Timeline";
import EducationSection from "../LandingPageSections/EducationSection";
import IntroductionSection from "../LandingPageSections/IntroductionSection";
import CurriculumVitaeSection from "../LandingPageSections/CurriculumVitaeSection";
//import DownloadIcon from "../assets/Downloadicon";

const LandingPage: React.FC = () => {
	return (
		<div className="relative h-full w-full">
			{/* Section 1: Introduction */}
			<IntroductionSection />

			{/* Section 2: My CV */}
			<CurriculumVitaeSection />

            {/* Section 3: Internship Experience */}
			<EducationSection />

			{/* Section 3: Internship Experience
			<section className="bg-tertiary h-full w-full text-white flex items-center justify-center">
				<div className="relative flex items-center justify-start h-full w-full pl-8 md:pl-25p lg:pl-30p">
					<Timeline lineHeight="50%" />

					<motion.div
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
						className="flex flex-col items-start text-left pl-8"
					>
						<h2 className="text-4xl text-gold font-bold mb-4">
							Internship Experience
						</h2>
						<p className="text-gray-400 text-lg max-w-lg mb-2">
							<strong>Company:</strong> Tech Solutions Inc.
						</p>
						<p className="text-gray-400 text-lg max-w-lg mb-2">
							<strong>Role:</strong> Software Developer Intern
						</p>
						<p className="text-gray-400 text-lg max-w-lg">
							<strong>Responsibilities:</strong> Developed web
							applications, worked on bug fixes, and contributed
							to team projects.
						</p>
					</motion.div>
				</div>
			</section> */}
		</div>
	);
};

export default LandingPage;
