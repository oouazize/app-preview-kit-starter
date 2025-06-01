import logo from "@/public/icon.png";

export interface LandingPageConfig {
	navigation: {
		links: Array<{
			label: string;
			href: string;
		}>;
	};
	hero: {
		badge: {
			icon: string;
			text: string;
		};
		headline: {
			main: string;
			highlight: string;
		};
		description: string;
		downloadButtons: Array<{
			platform: string;
			store: string;
			href: string;
		}>;
	};
	mockups: Array<{
		image: string;
	}>;
	features: Array<{
		icon: string;
		title: string;
		description: string;
	}>;
	cta: {
		headline: string;
		description: string;
		buttons: Array<{
			text: string;
			variant: "primary" | "secondary";
			href: string;
		}>;
	};
	footer: {
		links: Array<{
			label: string;
			href: string;
		}>;
		copyright: string;
	};
}

export const baseConfig = {
	brand: {
		name: "AppName",
		description:
			"Your app's main description for SEO. Make it compelling and keyword-rich, around 150-160 characters for optimal display in search results.",
		logo: logo,
		tagline: "Your App Tagline",
	},
};

export const defaultLandingConfig: LandingPageConfig = {
	navigation: {
		links: [
			{ label: "Features", href: "/#features" },
			{ label: "About", href: "/#about" },
			{ label: "Contact", href: "/#contact" },
		],
	},
	hero: {
		badge: {
			icon: "Sparkles",
			text: "New Release",
		},
		headline: {
			main: "Your Main Headline",
			highlight: "With Highlight",
		},
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		downloadButtons: [
			{ platform: "Google Play", store: "GET IT ON", href: "#" },
			{ platform: "App Store", store: "Download on the", href: "#" },
		],
	},
	mockups: [
		{ image: "/screenshots/1.png" },
		{ image: "/screenshots/2.png" },
		{ image: "/screenshots/3.png" },
		{ image: "/screenshots/4.png" },
		{ image: "/screenshots/5.png" },
	],
	features: [
		{
			icon: "Star",
			title: "Feature One",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
		},
		{
			icon: "Zap",
			title: "Feature Two",
			description:
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
		},
		{
			icon: "Shield",
			title: "Feature Three",
			description:
				"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
		},
		{
			icon: "Heart",
			title: "Feature Four",
			description:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
		},
		{
			icon: "Trophy",
			title: "Feature Five",
			description:
				"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
		},
		{
			icon: "Crown",
			title: "Feature Six",
			description:
				"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
		},
	],
	cta: {
		headline: "Ready to Get Started?",
		description:
			"Join thousands of users who have already discovered the power of our app. Download now and experience the difference.",
		buttons: [
			{ text: "Download Now", variant: "primary", href: "#" },
			{ text: "Learn More", variant: "secondary", href: "#" },
		],
	},
	footer: {
		links: [
			{ label: "Privacy", href: "/privacy" },
			{ label: "Terms", href: "/terms" },
			{ label: "Support", href: "/support" },
		],
		copyright: `${new Date().getFullYear()} ${
			baseConfig.brand.name
		}. All rights reserved.`,
	},
};
