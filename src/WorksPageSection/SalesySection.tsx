import React from "react";
import { motion } from "framer-motion";
import Timeline from "../animations/Timeline";
import SalesyImage from "../assets/Salesy.png";
import ProjectCard from "../animations/ProjectCard";
import Java from "../assets/java.svg";

const SalesySection: React.FC = () => {
	const Description =
		"Salesy is an all-in-one tool for NUS canteen vendors whom want to keep track of their tasks, inventory and suppliers.";

	const Explaination =
		"📇 Manage Suppliers: Add & edit supplier contact info\n✅ Task Management: Create, customize & check off tasks\n⏳ Stay on Track: View upcoming tasks by deadline\n📦 Inventory Updates: Track stock changes in real-time\n🚦 Stock Alerts: Monitor stock health (healthy, average, low)\n🔍 Supplier Search: Find suppliers in a comprehensive data bank";

    //const link = "test"

    const sourcecode = "https://github.com/AY2223S1-CS2103T-W08-4/tp"

	return (
		<section className="bg-background h-full w-full text-white flex items-center justify-center">
			<div className="relative flex items-center justify-start h-full w-full pl-4 md:pl-25p lg:pl-30p">
				<Timeline lineHeight="100%" />

				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					className="flex flex-col items-start justify-center text-left pl-4 md:pl-8 w-full h-[100%]"
				>
					<h2 className="text-1.5xl md:text-4xl lg:text-5xl text-gold font-bold mb-5">
                        Salesy(
						<span className="text-gray-400">"Dec 2022"</span>)
					</h2>

					<ProjectCard
						FrontImage={SalesyImage}
                        sourcecode={sourcecode}
						Description={Description}
						techStack={[
							{ src: Java, alt: "Java" },
						]}
						Explanation={Explaination}
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default SalesySection;
