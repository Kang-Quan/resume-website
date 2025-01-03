import React from "react";

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={2}
			stroke="currentColor"
			className={className || "w-5 h-5"}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 16v-6m0 0L9 13m3-3 3 3M5 21h14a2 2 0 002-2v-5a2 2 0 00-2-2h-3M9 8H7a2 2 0 00-2 2v5a2 2 0 002 2h3m6-2v2a2 2 0 002 2h3"
			/>
		</svg>
	);
};

export default DownloadIcon;
