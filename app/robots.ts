import { MetadataRoute } from "next";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://appname.com";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/api/", "/admin/", "/_next/", "/*.json$"],
		},
		sitemap: `${appUrl}/sitemap.xml`,
	};
}
