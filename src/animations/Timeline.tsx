import React from "react";
import { motion } from "framer-motion";

interface TimelineProps {
	lineHeight: string; // Height of the vertical line (e.g., '100%', '50%')
	circleSize?: string; // Initial size of the circle (optional, default: '1rem')
	circleAnimationDuration?: number; // Duration of circle animation (optional, default: 2)
}

const Timeline: React.FC<TimelineProps> = ({
	lineHeight,
	circleSize = "1rem",
	circleAnimationDuration = 2,
}) => {
	return (
		<div className="relative h-full flex items-center justify-center">
			{/* Circle */}
			<motion.div
				className="absolute bg-gold rounded-full top-1/2 left-1/2 transform -translate-x-1/2"
				initial={{
					opacity: 0.5,
					width: circleSize,
					height: circleSize,
				}} // Initial size and opacity
				whileInView={{
					opacity: [1, 0.5, 1], // Opacity animation
					width: [circleSize, "1.5rem", circleSize], // Width animation
					height: [circleSize, "1.5rem", circleSize], // Height animation
				}} // Animation when in view
				transition={{
					duration: circleAnimationDuration, // Total animation duration
					ease: "easeInOut", // Smooth easing
				}}
				viewport={{ once: false }} // Ensures animation runs only once per scroll into view
			></motion.div>

			{/* Vertical Line */}
			<div
				className="bg-gold w-px absolute top-1/2 left-1/2 transform -translate-x-1/2"
				style={{ height: lineHeight }}
			></div>
		</div>
	);
};

export default Timeline;
