import { baseConfig } from "@/lib/landing-config";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://appname.com";

export default function JsonLd() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: baseConfig.brand.name,
		applicationCategory: "MobileApplication",
		operatingSystem: "iOS",
		description: baseConfig.brand.tagline,
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.8",
			ratingCount: "1000",
		},
		author: {
			"@type": "Organization",
			name: "Your Company Name",
			url: appUrl,
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}
