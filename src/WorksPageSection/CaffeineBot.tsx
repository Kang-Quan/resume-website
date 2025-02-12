import React from "react";
import { motion } from "framer-motion";
import Timeline from "../animations/Timeline";
import CaffeineImage from "../assets/caffeinebot.png";
import ProjectCard from "../animations/ProjectCard";
import Java from "../assets/java.svg";

const CaffeineBotSection: React.FC = () => {
	const Description =
		"CaffeineBot is a chatbot that will help you remember your tasks so that you can relax with a good cup of coffee.";

	const Explaination =
		"💻 Fast & Efficient: Designed for quick typists\n🖥️ Java & OOP: Built with Object-Oriented Programming\n🔄 Command Pattern: Improves modularity & reusability\n📌 JavaFX + FXML: Creates a visually appealing, responsive UI\n🛠️ Gradle + JUnit: Automates builds & testing\n📦 Jar Release: Easy deployment for users";

    //const link = "test"

    const sourcecode = "https://github.com/Kang-Quan/ip"

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
                        CaffeineBot(
						<span className="text-gray-400">"Dec 2022"</span>)
					</h2>

					<ProjectCard
						FrontImage={CaffeineImage}
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

export default CaffeineBotSection;
