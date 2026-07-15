import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	// 壁纸模式："banner" 横幅壁纸，"fullscreen" 全屏壁纸，"overlay" 全屏透明，"none" 纯色背景无壁纸
	mode: "none",
	// 是否允许用户通过导航栏切换壁纸模式
	switchable: false,
	// 是否启用背景视频播放
	playerEnable: false,
	src: {
		desktop: [],
		mobile: [],
		playerUrl: [],
	},
	common: {
		dimOpacity: 0,
		playerMode: "random",
		homeText: {
			enable: false,
			switchable: false,
			title: "",
			titleSize: "3.8rem",
			subtitle: [],
			subtitleSize: "1.5rem",
			typewriter: {
				enable: false,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2000,
			},
		},
		navbar: {
			transparentMode: "semi",
			enableBlur: false,
			blur: 0,
		},
		waves: {
			enable: {
				desktop: false,
				mobile: false,
			},
			switchable: false,
		},
		gradient: {
			enable: {
				desktop: false,
				mobile: false,
			},
			height: "10%",
			switchable: false,
		},
		carousel: {
			enable: false,
			interval: 5000,
			transitionEffect: "zoom",
			switchable: false,
		},
	},
	banner: {
		position: "center",
	},
	overlay: {
		switchable: {
			opacity: false,
			blur: false,
			cardOpacity: false,
		},
		zIndex: -1,
		opacity: 0,
		blur: 0,
		cardOpacity: 1,
	},
	fullscreen: {
		position: "center",
	},
};
