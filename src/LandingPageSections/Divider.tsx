import React from "react";
import TimelineNoDot from "../animations/TimelineNoDot";

const Divider: React.FC = () => {
	return (
		<section className="bg-background h-full w-full text-white flex items-center justify-center">
			<div className="relative flex items-center justify-start h-full w-full pl-4 md:pl-25p lg:pl-30p">
				<TimelineNoDot lineHeight="100%" />
			</div>
		</section>
	);
};

export default Divider;
