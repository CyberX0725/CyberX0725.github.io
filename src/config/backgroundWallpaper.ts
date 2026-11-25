import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	mode: "banner",
	switchable: true,
	playerEnable: false,
	src: [
		"assets/images/DarthVaderWallpaper/imperial.avif",
		"assets/images/DarthVaderWallpaper/figure.avif",
		"assets/images/DarthVaderWallpaper/poster.avif",
		"assets/images/DarthVaderWallpaper/lightsaber.avif",
		"assets/images/DarthVaderWallpaper/portrait.avif",
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
