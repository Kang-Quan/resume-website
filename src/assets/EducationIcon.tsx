import React from "react";

const EducationIcon: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={2}
			stroke="currentColor"
			className={className || "w-6 h-6"}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 14l9-5-9-5-9 5 9 5z"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 14l6.16-3.422A12.083 12.083 0 0118 9m-6 5V9m0 5l-6.16-3.422A12.083 12.083 0 016 9m6 5v6m0-6l-6 3m6-3l6 3"
			/>
		</svg>
	);
};

export default EducationIcon;
