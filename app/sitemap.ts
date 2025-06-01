import { MetadataRoute } from "next";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://appname.com";

export default function sitemap(): MetadataRoute.Sitemap {
	const routes = [
		"",
		"/privacy",
		"/terms",
		"/support",
		// Add more routes as needed
	];

	return routes.map((route) => ({
		url: `${appUrl}${route}`,
		lastModified: new Date().toISOString(),
		changeFrequency: "weekly" as const,
		priority: route === "" ? 1 : 0.8,
	}));
}
