import React, { useEffect } from "react";
//import { motion } from "framer-motion";
//import Timeline from "../animations/Timeline";
import Divider from "../LandingPageSections/Divider";
import WorkIntroSection from "../WorksPageSection/IntroductionSection";
import BreakthroughSection from "../WorksPageSection/BreakthroughSection";
import PeerPrepSection from "../WorksPageSection/PeerPrepSection";
//import DownloadIcon from "../assets/Downloadicon";

const Works: React.FC = () => {
    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="relative h-full w-full">
			{/* Section 1: Introduction */}
			<WorkIntroSection />

            <div className="h-1/5">
                <Divider />
            </div>

			{/* Section 2: Peer prep */}
			<PeerPrepSection />

            <div className="h-1/2">
                <Divider />
            </div>

			{/* Section 3: Breakthrough */}
			<BreakthroughSection />
		</div>
	);
};

export default Works;
