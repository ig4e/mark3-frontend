import Image from "next/image";
import React from "react";
import LogoDark from "@/public/logo-dark.png";
import { TypographyLarge } from "./ui/typography";
import Search from "./search";
import Link from "next/link";

function SiteHeader() {
	return (
		<div className="bg-background/50 sticky top-0 z-40 w-full border-b backdrop-blur h-14">
			<div className="container flex justify-between gap-4 items-center h-14">
				<nav>
					<Link href={"/"}>
						<div className="flex items-center gap-2">
							<Image src={LogoDark} width={32} height={32} alt="mark3 logo"></Image>
							<TypographyLarge className="mt-2 hidden md:block">مارك3</TypographyLarge>
						</div>
					</Link>
				</nav>
				<Search noShortcut={false}></Search>
			</div>
		</div>
	);
}

export default SiteHeader;
