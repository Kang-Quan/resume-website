import React from "react";

const LandingPage: React.FC = () => {
	return (
		<section className="bg-background h-full w-full text-white flex items-center justify-center">
			<div className="relative flex items-center justify-start h-full w-full pl-8 sm:pl-12 md:pl-16 lg:pl-30p">
				{/* Vertical Line with Circle */}
				<div className="relative h-full">
					{/* Circle */}
					<div className="absolute bg-gold w-4 h-4 rounded-full top-1/2 left-1/2 transform -translate-x-1/2"></div>
					{/* Vertical Line */}
					<div className="bg-gold w-px h-1/2 absolute top-1/2"></div>
				</div>

				{/* Text Content */}
				<div className="flex flex-col items-start text-left pl-8">
					<h1 className="text-5xl text-gold font-bold mb-2 animate-rotateIn">
						new kq()
					</h1>
					<p className="text-gray-400 text-2xl mb-4 opacity-0 animate-slideIn animation-delay-1000">
						Lee Kang Quan
					</p>
					<p className="text-gray-500 text-lg opacity-0 animate-slideIn animation-delay-1000">
						Just a cs student
					</p>
				</div>
			</div>
		</section>
	);
};

export default LandingPage;
