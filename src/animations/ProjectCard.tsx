import { useState } from "react";
import { motion } from "framer-motion";
import GithubIcon from "../assets/github.svg";

interface ProjectCardProps {
	FrontImage: React.ReactNode; // Can be a React component or an <img>
	link?: string; // Same as above
	sourcecode?: string; // Same as above
	Description?: string; // Make sure to use lowercase 'string' instead of 'String'
	Explanation?: string;
	techStack: { src: string; alt: string }[]; // Array of tech stack icons
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	FrontImage,
	link,
	Description,
	techStack,
	Explanation,
	sourcecode,
}) => {
	const [isFlipped, setIsFlipped] = useState<boolean>(false);
	const [isAnimating, setIsAnimating] = useState<boolean>(false);

	const handleFlip = (): void => {
		if (!isAnimating) {
			setIsFlipped(!isFlipped);
			setIsAnimating(true);
		}
	};

	return (
		<div className="flex items-center justify-center bg-background rounded-lg shadow-lg w-[300px] md:w-[400px] lg:w-[450px] h-full">
			<div className="flip-card w-full h-full bg-background rounded-lg">
				<motion.div
					className="flip-card-inner relative w-full h-full"
					initial={false}
					animate={{ rotateY: isFlipped ? 180 : 0 }}
					transition={{ duration: 0.8 }}
					onAnimationComplete={() => setIsAnimating(false)}
				>
					{/* Front Side */}
					<div className="flip-card-front relative w-full h-full flex items-start justify-center bg-black rounded-lg shadow-lg overflow-hidden">
						<div className="relative w-full h-[65%] flex items-center justify-center">
							{typeof FrontImage === "string" ? (
								<img
									src={FrontImage}
									alt="Front Image"
									className="w-full h-full object-cover rounded-md object-center"
								/>
							) : (
								FrontImage
							)}
						</div>

						{/* Overlay Content */}
						<div className="absolute w-full h-[30%] bg-black rounded-lg top-[65%] flex flex-col items-center justify-center shadow-lg">
							<h1 className="relative text-sm md:text-lg text-gray-400 bg-black p-2 text-center">
								{Description}
							</h1>
							<div className="relative flex items-center mt-2 space-x-4 bg-black rounded-lg shadow-lg">
								{/* Render tech stack icons dynamically */}
								{techStack.map((icon, index) => (
									<img
										key={index}
										src={icon.src}
										alt={icon.alt}
										className="w-6 h-6 md:w-8 md:h-8 relative"
									/>
								))}
							</div>
						</div>

						{/* Go Next Icon (bottom-right on front side) */}
						<div
							className="absolute bottom-4 right-4 cursor-pointer text-white text-2xl"
							onClick={handleFlip}
						>
							<span>&#8594;</span> {/* Right Arrow */}
						</div>
					</div>

					{/* Back Side */}
					<div className="flip-card-back absolute w-full h-full flex flex-col items-center justify-around bg-black rounded-lg shadow-lg p-4 text-white">
						{/* Go Back Icon */}
						<div
							className="absolute top-4 left-4 cursor-pointer text-2xl"
							onClick={handleFlip}
						>
							<span>&#8592;</span> {/* Left Arrow */}
						</div>

						{/* Part 1: Explanation of App */}
						<div className="w-full text-center px-4">
							<h2 className="text-xl font-bold">
								App Features:
							</h2>
							<div className="text-gray-300 text-sm md:text-base">
								{Explanation && Explanation.split("\n").map((line, index) => (
									<p key={index}>{line}</p>
								))}
							</div>
						</div>

						{/* Part 2: Link to Source Code */}
						<div className="flex items-center space-x-2">
							<a
								href={sourcecode}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center text-blue-400 hover:underline hover:text-blue"
							>
								<img
									src={GithubIcon}
									alt="GitHub"
									className="w-6 h-6 md:w-8 md:h-8 mr-2"
								/>
								<span>View Source Code</span>
							</a>
						</div>

						{/* Part 3: Optional Link to Try Application */}
						{link && (
							<div className="w-full text-center mt-4">
								<a
									href={link}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline hover:text-blue"
								>
									Try Application Here!!!
								</a>
							</div>
						)}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default ProjectCard;
