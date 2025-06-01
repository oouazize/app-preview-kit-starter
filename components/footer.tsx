import React from "react";
import { defaultLandingConfig, baseConfig } from "@/lib/landing-config";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-slate-50 py-12">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="flex items-center space-x-2 mb-4 md:mb-0">
						<div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center overflow-hidden">
							<Image
								src={baseConfig.brand.logo}
								alt={baseConfig.brand.name + " Logo"}
								width={32}
								height={32}
							/>
						</div>
						<span className="text-xl font-bold text-slate-900">
							{baseConfig.brand.name}
						</span>
					</div>
					<div className="flex space-x-6 text-slate-600">
						{defaultLandingConfig.footer.links.map((link, i) => (
							<Link
								key={i}
								href={link.href}
								className="hover:text-slate-900 transition-colors"
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>
				<div className="border-t border-slate-200 mt-8 pt-8 text-center text-slate-500">
					<p>&copy; {defaultLandingConfig.footer.copyright}</p>
				</div>
			</div>
		</footer>
	);
}
