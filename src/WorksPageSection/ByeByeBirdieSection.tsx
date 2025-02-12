import React from "react";
import { motion } from "framer-motion";
import Timeline from "../animations/Timeline";
import ReactIcon from "../assets/react.svg";
import VercelLogo from "../assets/vercellogo.png";
import PythonLogo from "../assets/pythonlogo.jpg";
import TypeScriptIcon from "../assets/typescript.svg";
import IOTimage from "../assets/IOTimage.jpg";
import ArduinoLogo from "../assets/arduinologo.png"
import ProjectCard from "../animations/ProjectCard";
import Postgresql from "../assets/postgresql.svg";
import Docker from "../assets/docker.svg";

const ByeByeBirdieSection: React.FC = () => {
	const Description =
		"A smart solution for cleaner tray returns and bird deterrence in hawker centres and coffeeshops";

	const Explaination =
		"👀 System detects movement \n📷 Camera captures real-time images \n🔍 CV model identifies number of birds \n📢 Buzzer activates to deter birds \n🚪 Curtain closes to keep birds out \n🚨 Instant alert via telegram bot \n📈 Webpage to view trends & long-term analytics \n☁️ Cloud storage/server for data storage and analytics";

    //const link = "test"

    const sourcecode = "https://github.com/Kang-Quan/CS3237-Project-G16"

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
						ByeByeBirdie(
						<span className="text-gray-400">"Nov 2024"</span>)
					</h2>

					<ProjectCard
						FrontImage={IOTimage}
                        sourcecode={sourcecode}
						Description={Description}
						techStack={[
							{ src: ReactIcon, alt: "React" },
							{ src: TypeScriptIcon, alt: "TypeScript" },
							{
								src: ArduinoLogo,
								alt: "Arduino",
							},
                            {
								src: VercelLogo,
								alt: "Vercel",
							},
                            {
								src: Postgresql,
								alt: "Posgresql",
							},
                            {
								src: Docker,
								alt: "Docker",
							},
                            {
								src: PythonLogo,
								alt: "Python",
							},
						]}
						Explanation={Explaination}
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default ByeByeBirdieSection;
