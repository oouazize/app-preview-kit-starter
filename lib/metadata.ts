import { Metadata } from "next";
import { baseConfig } from "./landing-config";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://appname.com";

export const defaultMetadata: Metadata = {
	metadataBase: new URL(appUrl),
	title: {
		default: baseConfig.brand.name,
		template: `%s | ${baseConfig.brand.name}`,
	},
	description: baseConfig.brand.description,
	keywords: [
		"mobile app",
		"app store",
		"google play",
		"feature one",
		"feature two",
		// Add more relevant keywords
	],
	authors: [{ name: "Your Company Name" }],
	creator: "Your Company Name",
	publisher: "Your Company Name",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: appUrl,
		title: baseConfig.brand.name,
		description: baseConfig.brand.description,
		siteName: baseConfig.brand.name,
		images: [
			{
				url: `${appUrl}/og-image.png`,
				width: 1200,
				height: 630,
				alt: baseConfig.brand.name,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: baseConfig.brand.name,
		description: "Your app's main description for Twitter",
		images: [`${appUrl}/twitter-image.png`],
		creator: "@yourtwitter",
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
	verification: {
		google: "your-google-verification-id",
		// Add other verification tokens as needed
	},
	alternates: {
		canonical: appUrl,
		languages: {
			"en-US": `${appUrl}/en-US`,
			// Add other language alternatives if available
		},
	},
};
