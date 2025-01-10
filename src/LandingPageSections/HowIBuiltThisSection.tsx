import React from "react";
import { motion } from "framer-motion";
import Timeline from "../animations/Timeline";
import ReactIcon from "../assets/react.svg";
import TailwindIcon from "../assets/tailwind.svg";
import FramerMotionIcon from "../assets/framermotion.svg";
import ViteIcon from "../assets/vite.svg";
import TypeScriptIcon from "../assets/typescript.svg";
import { Link } from "react-router-dom";

const HowIBuiltThisSection: React.FC = () => {
	return (
		<section className="bg-background h-full w-full text-white flex items-center justify-center">
			<div className="relative flex items-center justify-start h-full w-full pl-4 md:pl-25p lg:pl-30p">
				<Timeline lineHeight="110%" />

				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					className="flex flex-col items-start text-left pl-4 md:pl-8 w-full lg:pr-[30%] md:pr-0"
				>
					<h2 className="text-3xl md:text-4xl text-gold font-bold mb-6 text-left">
						&lt;<span className="text-gray-400">MadeWith</span>{" "}
						/&gt;
					</h2>
					<div className="flex flex-wrap justify-evenly text-lg text-gray-400 mb-8 w-full">
						<div className="flex flex-col items-center mb-6 mx-4 w-1/3 sm:w-1/3 lg:w-1/4">
							<img
								src={ReactIcon}
								alt="React Logo"
								className="w-24 h-20 mb-2"
							/>
							<p className="text-center text-sm">React</p>
							<p className="text-center text-sm text-gray-500">
								"Frontend Framework"
							</p>
						</div>

						<div className="flex flex-col items-center mb-6 mx-4 w-1/3 sm:w-1/3 lg:w-1/4">
							<img
								src={TailwindIcon}
								alt="Tailwind CSS Logo"
								className="w-24 h-20 mb-2"
							/>
							<p className="text-center text-sm">Tailwind CSS</p>
							<p className="text-center text-sm text-gray-500">
								"Styling Framework"
							</p>
						</div>

						<div className="flex flex-col items-center mb-6 mx-4 w-1/3 sm:w-1/3 lg:w-1/4">
							<img
								src={FramerMotionIcon}
								alt="Framer Motion Logo"
								className="w-24 h-20 mb-2"
							/>
							<p className="text-center text-sm">Framer Motion</p>
							<p className="text-center text-sm text-gray-500">
								"Animation Framework"
							</p>
						</div>

						<div className="flex flex-col items-center mb-6 mx-4 w-1/3 sm:w-1/3 lg:w-1/4">
							<img
								src={ViteIcon}
								alt="Vite Logo"
								className="w-24 h-20 mb-2"
							/>
							<p className="text-center text-sm">Vite</p>
							<p className="text-center text-sm text-gray-500">
								"Build Tool"
							</p>
						</div>

						<div className="flex flex-col items-center mb-6 mx-4 w-1/3 sm:w-1/3 lg:w-1/4">
							<img
								src={TypeScriptIcon}
								alt="TypeScript Logo"
								className="w-24 h-20 mb-2"
							/>
							<p className="text-center text-sm">TypeScript</p>
							<p className="text-center text-sm text-gray-500">
								"Language Used"
							</p>
						</div>
					</div>

					{/* New section at the end of the page */}
					<div className="text-center mr-4 h-full w-full">
						<p className="text-sm text-gray-400">
							If you are interested in my other works, go to{" "}
							<Link to="works" className="group transition">
								<span className="group-hover:text-white text-white">
									kq
								</span>
								<span className="group-hover:text-blue text-white">
									.works()
								</span>
							</Link>
							.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HowIBuiltThisSection;
