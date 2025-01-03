declare module "locomotive-scroll" {
	export default class LocomotiveScroll {
		constructor(options: {
			el: HTMLElement | null;
			smooth?: boolean;
			multiplier?: number;
			class?: string;
			direction?: "horizontal" | "vertical";
			lerp?: number;
			smartphone?: { smooth: boolean };
			tablet?: { smooth: boolean };
		});

		destroy(): void;
		update(): void;
		scrollTo(target: string | number | HTMLElement, options?: any): void;
		on(event: string, callback: (args: any) => void): void;
		off(event: string): void;
	}
}
