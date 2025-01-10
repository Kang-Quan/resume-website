import React from "react";
import { motion } from "framer-motion";
import Timeline from "../animations/Timeline";
import ReactIcon from "../assets/react.svg";
import MongoDBIcon from "../assets/mongodb.svg";
import Rabbitmq from "../assets/rabbitmq.svg";
import TypeScriptIcon from "../assets/typescript.svg";
import PeerPrepImage from "../assets/peerprep.png";
import BackendSever from "../assets/backendsever.png"
import ProjectCard from "../animations/ProjectCard";
import Postgresql from "../assets/postgresql.svg";
import Docker from "../assets/docker.svg";

const PeerPrepSection: React.FC = () => {
	const Description =
		"A Full-Stack application that allow users to collaborate and solve coding problems real-time";

	const Explaination =
		"🔒 Authenticate with email/password, Google, Twitter & Github \n👀 View questions curated by our team \n💬 Chat with other users \n💻 Collaborate with other users with a live code-editor \n🔗 Match with other users based on question difficulty \n✍️ Customize personal profile";

    //const link = "test"

    const sourcecode = "https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g51"

	return (
		<section className="bg-background h-full w-full text-white flex items-center justify-center">
			<div className="relative flex items-center justify-start h-full w-full pl-4 md:pl-25p lg:pl-30p">
				<Timeline lineHeight="100%" />

				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					className="flex flex-col items-start justify-center text-left pl-4 md:pl-8 w-full h-[90%]"
				>
					<h2 className="text-1.5xl md:text-4xl lg:text-5xl text-gold font-bold mb-5">
						PeerPrep(
						<span className="text-gray-400">"Nov 2023"</span>)
					</h2>

					<ProjectCard
						FrontImage={PeerPrepImage}
                        sourcecode={sourcecode}
						Description={Description}
						techStack={[
							{ src: ReactIcon, alt: "React" },
							{ src: TypeScriptIcon, alt: "TypeScript" },
							{
								src: BackendSever,
								alt: "Express & Node",
							},
                            {
								src: MongoDBIcon,
								alt: "MongoDB",
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
								src: Rabbitmq,
								alt: "Rabbitmq",
							},
						]}
						Explanation={Explaination}
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default PeerPrepSection;
