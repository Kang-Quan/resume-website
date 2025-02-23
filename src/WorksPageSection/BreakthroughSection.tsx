import React from "react";
import { motion } from "framer-motion";
import Timeline from "../animations/Timeline";
import ReactIcon from "../assets/react.svg";
import FlaskIcon from "../assets/flask.png";
// import TailwindIcon from "../assets/tailwind.svg";
// import FramerMotionIcon from "../assets/framermotion.svg";
// import ViteIcon from "../assets/vite.svg";
import TypeScriptIcon from "../assets/typescript.svg";
import BreakthroughImage from "../assets/Breakthrough.jpeg";
import ProjectCard from "../animations/ProjectCard";

const BreakthroughSection: React.FC = () => {
	const Description =
		"Python-based bot capable of playing the board game Breakthrough";

	const Explaination =
		"🎲 Board Game: Plays Breakthrough (a simplified chess variant with only pawns) \n⚡ Fast Response: Executes moves within 3 seconds \n♟️ Search Depth: Analyzes up to 5 moves ahead \n🔍 Minimax Algorithm: Evaluates best moves considering worst-case scenarios \n✂️ Alpha-Beta Pruning: Improves efficiency by cutting unnecessary branches \n";

    //const link = "test"

    const sourcecode = "https://github.com/Kang-Quan/Breakthrough"

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
						Breakthrough(
						<span className="text-gray-400">"Jan 2023"</span>)
					</h2>

					<ProjectCard
						FrontImage={BreakthroughImage}
                        sourcecode={sourcecode}
						Description={Description}
						techStack={[
							{ src: ReactIcon, alt: "React" },
							{ src: TypeScriptIcon, alt: "TypeScript" },
							{
								src: FlaskIcon,
								alt: "Flask",
							},
						]}
						Explanation={Explaination}
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default BreakthroughSection;
