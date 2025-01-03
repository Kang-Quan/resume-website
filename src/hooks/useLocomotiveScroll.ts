import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const useLocomotiveScroll = () => {
	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: document.querySelector("#scroll-container") as HTMLElement,
			smooth: true,
		});

		return () => {
			scroll.destroy(); // Clean up Locomotive Scroll
		};
	}, []);
};
