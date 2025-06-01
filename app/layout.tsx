import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { defaultMetadata } from "@/lib/metadata";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<JsonLd />
			</head>
			<body className="min-h-screen flex flex-col">
				<Header />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
