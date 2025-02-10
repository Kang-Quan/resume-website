import React from "react";
//import { motion } from "framer-motion";
//import Timeline from "../animations/Timeline";
import EducationSection from "../LandingPageSections/EducationSection";
import IntroductionSection from "../LandingPageSections/IntroductionSection";
import CurriculumVitaeSection from "../LandingPageSections/CurriculumVitaeSection";
import InternshipSection from "../LandingPageSections/InternshipSection";
import HowIBuiltThisSection from "../LandingPageSections/HowIBuiltThisSection";
import Divider from "../LandingPageSections/Divider";
import CertificateSection from "../LandingPageSections/CertificateSection";
//import DownloadIcon from "../assets/Downloadicon";

const LandingPage: React.FC = () => {
	return (
		<div className="relative h-full w-full">
			{/* Section 1: Introduction */}
			<IntroductionSection />

			{/* Section 2: My CV */}
			<CurriculumVitaeSection />

            {/* Section 3: Education Experience */}
			<EducationSection />
            
            <div className="h-1/2">
                <Divider />
            </div>

			{/* Section 4: Internship Experience */}
			<InternshipSection />

            <div className="h-1/3">
                <Divider />
            </div>

            {/* Section 5: Education Experience */}
			<CertificateSection />    

            <div className="h-1/5">
                <Divider />
            </div>

            {/* Section 6: How I bulit this */}
			<HowIBuiltThisSection />
		</div>
	);
};

export default LandingPage;
