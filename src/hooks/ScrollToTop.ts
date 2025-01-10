import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		// Fallback to window scrolling if no custom container
		const container = document.querySelector("main"); // Replace with your container selector if needed
		if (container) {
			container.scrollTo(0, 0);
		} else {
			window.scrollTo(0, 0);
		}
	}, [pathname]);

	return null;
};

export default ScrollToTop;
