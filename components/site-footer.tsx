import React from "react";
import { TypographyLarge } from "./ui/typography";
import Image from "next/image";
import LogoDark from "@/public/logo-dark.png";
import Link from "next/link";

function SiteFooter() {
	return (
		<div className="bg-zinc-950 w-full h-14">
			<footer className="container flex justify-between gap-4 items-center h-14">
				<Link href={"/"}>
					<div className="flex items-center gap-2">
						<Image src={LogoDark} width={32} height={32} alt="mark3 logo"></Image>
						<TypographyLarge className="mt-2">مارك3</TypographyLarge>
					</div>
				</Link>
				<TypographyLarge className="mt-2 text-sm md:text-base">صنع ❤️ من Ahmed Mohamed Elsayed</TypographyLarge>
			</footer>
		</div>
	);
}

export default SiteFooter;
