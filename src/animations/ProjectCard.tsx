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
		<div className="flex items-center justify-center bg-background rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[67%] lg:w-[57%] xl:w-[47%] h-[85%]">
			<div className="flip-card w-full h-full bg-background rounded-lg">
				<motion.div
					className="flip-card-inner relative w-full h-full"
					initial={false}
					animate={{ rotateY: isFlipped ? 180 : 0 }}
					transition={{ duration: 0.8 }}
					onAnimationComplete={() => setIsAnimating(false)}
				>
					{/* Front Side */}
					<div className="flip-card-front relative w-full h-full flex flex-col bg-black rounded-lg shadow-lg overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900 scrollable-container">

						{/* Image Container */}
						<div className="w-full h-[60%] flex items-center justify-center">
							{typeof FrontImage === "string" ? (
								<img
									src={FrontImage}
									alt="Front Image"
									className="w-full h-full rounded-md"
								/>
							) : (
								FrontImage
							)}
						</div>

						{/* Overlay Content (Relative Instead of Absolute) */}
						<div className="w-full h-[40%] flex flex-col items-center justify-center bg-black rounded-lg shadow-lg pb-4">
							<h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 bg-black p-3 sm:p-4 md:p-5 text-center leading-relaxed">
								{Description}
							</h1>
							<div className="flex items-center mt-2 space-x-4">
								{/* Render tech stack icons dynamically */}
								{techStack.map((icon, index) => (
									<img
										key={index}
										src={icon.src}
										alt={icon.alt}
										className="w-6 h-6 md:w-8 md:h-8"
									/>
								))}
							</div>
						</div>

						{/* Next Icon (Now Relative and Centered) */}
						<div
							className="mt-auto mb-4 flex justify-end w-full pr-4 text-white text-2xl cursor-pointer"
							onClick={handleFlip}
						>
							<span>&#8594;</span> {/* Right Arrow */}
						</div>
					</div>

					{/* Back Side */}
					<div className="flip-card-back absolute w-full h-full flex flex-col bg-black rounded-lg shadow-lg p-4 text-white overflow-auto scrollable-container">
						{/* Go Back Icon */}
						<div
							className="absolute top-4 left-4 cursor-pointer text-2xl"
							onClick={handleFlip}
						>
							<span>&#8592;</span> {/* Left Arrow */}
						</div>

						{/* Content Wrapper to Ensure Proper Layout */}
						<div className="flex flex-col justify-between h-full w-full">
							{/* Part 1: Explanation of App */}
							<div className="w-full flex flex-col justify-center items-center p-4 flex-grow">
								<h2 className="text-xl font-bold text-center mb-4">
									App Features:
								</h2>
								<div className="text-gray-300 text-sm md:text-base text-left w-full max-w-lg">
									{Explanation &&
										Explanation.split("\n").map(
											(line, index) => (
												<p key={index}>{line}</p>
											)
										)}
								</div>
							</div>

							{/* Part 2: Link to Source Code (Adjusted to Stay at Bottom) */}
							<div className="w-full flex justify-center mb-4 pb-4">
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
								<div className="w-full text-center pb-4">
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
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default ProjectCard;
