import React from "react";
//import { motion } from "framer-motion";
//import Timeline from "../animations/Timeline";
import EducationSection from "../LandingPageSections/EducationSection";
import IntroductionSection from "../LandingPageSections/IntroductionSection";
import CurriculumVitaeSection from "../LandingPageSections/CurriculumVitaeSection";
import InternshipSection from "../LandingPageSections/InternshipSection";
import HowIBuiltThisSection from "../LandingPageSections/HowIBuiltThisSection";
import Divider from "../LandingPageSections/Divider";
//import DownloadIcon from "../assets/Downloadicon";

const Works: React.FC = () => {
	return (
		<div className="relative h-full w-full">
			{/* Section 1: Introduction */}
			<IntroductionSection />

			{/* Section 2: My CV */}
			<CurriculumVitaeSection />

            {/* Section 3: Internship Experience */}
			<EducationSection />
            
            <div className="h-1/2">
                <Divider />
            </div>

			{/* Section 3: Internship Experience */}
			<InternshipSection />

            <div className="h-1/3">
                <Divider />
            </div>

            {/* Section 4: How I bulit this */}
			<HowIBuiltThisSection />
		</div>
	);
};

export default Works;
