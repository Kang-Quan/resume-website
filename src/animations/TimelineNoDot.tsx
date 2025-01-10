import React from "react";

interface TimelineProps {
	lineHeight: string; // Height of the vertical line (e.g., '100%', '50%')
	circleSize?: string; // Initial size of the circle (optional, default: '1rem')
	circleAnimationDuration?: number; // Duration of circle animation (optional, default: 2)
    isFullHeight?: boolean;
	isFirst?: boolean;
}

const TimelineNoDot: React.FC<TimelineProps> = ({
	lineHeight,
    isFullHeight = true,
	isFirst = true,
}) => {
	return (
		<div className="relative h-full flex items-center justify-center">
			{/* Vertical Line */}
			{isFirst && (
				<div
					className={`bg-gold w-px absolute left-1/2 transform -translate-x-1/2 ${
						isFullHeight ? "top-0" : "top-1/2"
					}`}
					style={{ height: lineHeight }}
				></div>
			)}
		</div>
	);
};

export default TimelineNoDot;
