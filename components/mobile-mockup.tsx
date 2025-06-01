import Image from "next/image";

interface MockupProps {
	screenshot: string;
	className?: string;
}

export function MobileMockup({ screenshot, className }: MockupProps) {
	return (
		<div className={`relative ${className}`}>
			<div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
				<div className="bg-white rounded-[2rem] overflow-hidden">
					<Image
						src={screenshot}
						alt="BizScan Screenshot"
						width={1000}
						height={1000}
					/>
				</div>
			</div>
		</div>
	);
}
