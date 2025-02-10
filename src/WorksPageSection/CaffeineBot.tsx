import React from "react";
import { motion } from "framer-motion";
import Timeline from "../animations/Timeline";
import SalesyImage from "../assets/Salesy.png";
import ProjectCard from "../animations/ProjectCard";
import Java from "../assets/java.svg";

const CaffeineBotSection: React.FC = () => {
	const Description =
		"Caffeine is a desktop chatbot that will help you remember your tasks so that you can leave the remembering to us and relax with a good cup of coffee.";

	const Explaination =
		"• Designed a desktop to-do list application tailored for quick typists\n• The backend was developed in Java, using Object-Oriented Programming (OOP) paradigm and incorporating the Command Design Pattern.\n• The graphical user interface (GUI) has been crafted using JavaFX in conjunction with FXML for a robust and visually appealing user experience.\n• Used Gradle build tool to facilitate with Junit testing and releasing the jar file. ";

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

export default CaffeineBotSection;
