import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	mode: "banner",
	switchable: true,
	playerEnable: false,
	src: [
		"assets/images/WorkshopWallpaper/946001349.avif",
		"assets/images/WorkshopWallpaper/948495576.avif",
		"assets/images/WorkshopWallpaper/1285782458.avif",
		"assets/images/WorkshopWallpaper/1379412810.avif",
		"assets/images/WorkshopWallpaper/1431648299.avif",
		"assets/images/WorkshopWallpaper/1646381832.avif",
		"assets/images/WorkshopWallpaper/1696377264.avif",
		"assets/images/WorkshopWallpaper/1824345401.avif",
		"assets/images/WorkshopWallpaper/2104828204.avif",
		"assets/images/WorkshopWallpaper/2112596718.avif",
		"assets/images/WorkshopWallpaper/2350787696.avif",
		"assets/images/WorkshopWallpaper/2408401263.avif",
		"assets/images/WorkshopWallpaper/2672282054.avif",
		"assets/images/WorkshopWallpaper/2814970040.avif",
		"assets/images/WorkshopWallpaper/2826880088.avif",
		"assets/images/WorkshopWallpaper/2934678805.avif",
		"assets/images/WorkshopWallpaper/2984123351.avif",
		"assets/images/WorkshopWallpaper/3125812617.avif",
		"assets/images/WorkshopWallpaper/3256177656.avif",
		"assets/images/WorkshopWallpaper/3532103491.avif",
		"assets/images/WorkshopWallpaper/3549653401.avif",
		"assets/images/WorkshopWallpaper/3591966390.avif",
		"assets/images/WorkshopWallpaper/3730716983.avif",
	],
	common: {
		dimOpacity: 0.2,
		imageFit: "contain",
		homeText: {
			enable: true,
			switchable: true,
			title: "Welcome to my world",
			titleSize: "3.8rem",
		},
		navbar: {
			transparentMode: "semi",
			enableBlur: true,
			blur: 5,
		},
		waves: {
			enable: {
				desktop: true,
				mobile: true,
			},
			switchable: true,
		},
		gradient: {
			enable: {
				desktop: true,
				mobile: true,
			},
			height: "10%",
			switchable: true,
		},
		carousel: {
			enable: true,
			shuffle: true,
			interval: 6000,
			transitionEffect: "fade",
			switchable: true,
		},
	},
	banner: {
		position: "center",
	},
	overlay: {
		switchable: {
			opacity: true,
			blur: true,
			cardOpacity: true,
		},
		zIndex: -1,
		opacity: 0.8,
		blur: 10,
		cardOpacity: 0.5,
	},
	fullscreen: {
		position: "center",
	},
};
