import React from "react";
import { motion } from "framer-motion";
import Timeline from "../animations/Timeline";
//import EducationIcon from "../assets/EducationIcon";
import Tiktokicon from "../assets/tiktoklogo.svg";
import {
	FaCogs,
	FaNetworkWired,
	FaRobot,
	FaLock,
    FaMobile,  // Add the lock icon here
} from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

const CertificationSection: React.FC = () => {
	return (
		<section className="bg-background h-full w-full text-white flex items-center justify-center">
			<div className="relative flex items-center justify-start h-full w-full pl-4 md:pl-25p lg:pl-30p">
				<Timeline lineHeight="100%" />

				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					className="flex flex-col items-start text-left pl-4 md:pl-8"
				>
					<h2 className="text-2xl md:text-4xl lg:text-5xl text-gold font-bold mb-5 text-center md:text-left">
						Certifications()
					</h2>

					<div className="flex flex-col items-start space-y-2">
						{/* Header */}
						<div className="flex items-center space-x-2 mb-2">
							<GrCertificate className="w-5 h-5 text-gold flex-shrink-0 self-center" />
							<p className="text-sm md:text-lg lg:text-2xl font-bold">
								<strong>Certificates Obtained:</strong>
							</p>
						</div>

						{/* Software Engineering Certificate */}
						<div className="flex items-center space-x-2">
							<FaCogs className="w-5 h-5 text-gold" />
							<a
								href="https://example.com/software-engineering-certificate"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 text-xs md:text-sm lg:text-base underline hover:text-blue"
							>
								Software Engineering (Full Stack)
							</a>
						</div>

						{/* Networking Certificate */}
						<div className="flex items-center space-x-2">
							<FaNetworkWired className="w-5 h-5 text-gold" />
							<a
								href="https://credentials.nus.edu.sg/ea9e0056-d914-4c79-b173-b8a6eca5523d#acc.GoRh1ksi"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 text-xs md:text-sm lg:text-base underline hover:text-blue"
							>
								Networking
							</a>
						</div>

						{/* Tiktok Certificate */}
						<div className="flex items-center space-x-2">
							<img
								src={Tiktokicon}
								alt="TikTok Logo"
								className="w-5 h-5 flex-shrink-0 self-center"
							/>
							<a
								href="/resume-website/certificates/tiktok.pdf" // PDF stored in public/certificates/
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 text-xs md:text-sm lg:text-base underline hover:text-blue"
							>
								Tiktok Youth Camp
							</a>
						</div>

						{/* Brainhack TIL Certificate */}
						<div className="flex items-center space-x-2">
							<FaRobot className="w-5 h-5 text-gold flex-shrink-0 self-center" />
							<a
								href="/resume-website/certificates/Brainhack-TIL.pdf" // PDF stored in public/certificates/
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 text-xs md:text-sm lg:text-base underline hover:text-blue"
							>
								Brainhack - TIL (AI/ML hackathon)
							</a>
						</div>

						{/* Brainhack Code Exp Certificate */}
						<div className="flex items-center space-x-2">
							<FaMobile className="w-5 h-5 text-gold flex-shrink-0 self-center" />
							<a
								href="/resume-website/certificates/Brainhack-codeexp.pdf" // PDF stored in public/certificates/
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 text-xs md:text-sm lg:text-base underline hover:text-blue"
							>
								Brainhack - Code Exp (Mobile Development
								hackathon)
							</a>
						</div>

						{/* Brainhack Cyber Certificate */}
						<div className="flex items-center space-x-2">
							<FaLock className="w-5 h-5 text-gold flex-shrink-0 self-center" />
							<a
								href="/resume-website/certificates/Brainhack-cyber.pdf" // PDF stored in public/certificates/
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 text-xs md:text-sm lg:text-base underline hover:text-blue"
							>
								Brainhack - CYBER DEFENDERS DISCOVERY CAMP
								(Capture The Flag)
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default CertificationSection;
