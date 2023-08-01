import Image from "next/image";
import React from "react";
import LogoDark from "@/public/logo-dark.png";

function SiteHeader() {
	return (
		<div className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur h-14">
			<div className="container flex h-14 items-center">
				<nav>
					<div className="flex items-center gap-2">
						<Image src={LogoDark} width={32} height={32} alt="mark3 logo"></Image>
                        
					</div>
				</nav>
			</div>
		</div>
	);
}

export default SiteHeader;
