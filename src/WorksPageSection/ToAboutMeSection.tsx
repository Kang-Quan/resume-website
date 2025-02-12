import React from "react";
import { motion } from "framer-motion";
import Timeline from "../animations/Timeline";
import { Link } from "react-router-dom";

const ToAboutMeSection: React.FC = () => {
	return (
		<section className="bg-background h-full w-full text-white flex items-center justify-center">
			<div className="relative flex items-center justify-start h-full w-full pl-4 md:pl-25p lg:pl-30p">
				<Timeline lineHeight="100%" />

				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					className="flex flex-col items-start text-left pl-4 md:pl-8 w-full lg:pr-[30%] md:pr-0"
				>
					{/* New section at the end of the page */}
					<div className="absolute text-start mr-4 h-full w-full px-4 items-center top-[50%]">
						<p className="text-sm text-gray-400">
							To find out more about me, go to{" "}
							<Link to="/about" className="group transition">
								<span className="group-hover:text-white text-white">
									kq
								</span>
								<span className="group-hover:text-blue text-white">
									.about()
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

export default ToAboutMeSection;
