import Image from "next/image";
import Link from "next/link";
import React from "react";
import { baseConfig, defaultLandingConfig } from "@/lib/landing-config";

export default function Header() {
	return (
		<header className="container mx-auto px-4 py-6">
			<nav className="flex items-center justify-between">
				<Link href="/">
					<div className="flex items-center space-x-2">
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
				</Link>
				<div className="hidden md:flex items-center space-x-8">
					{defaultLandingConfig.navigation.links.map((link, i) => (
						<Link
							key={i}
							href={link.href}
							className="text-slate-600 hover:text-slate-900 transition-colors"
						>
							{link.label}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
}
