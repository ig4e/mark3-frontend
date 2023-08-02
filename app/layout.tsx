import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
	title: "Mark3 | مارك3",
	description: "درجات الثانوية مابين ايديك بدون تعب",
	openGraph: { type: "website", locale: "ar_EG", images: ["/og-image.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ApolloWrapper>
			<html lang="ar" dir="rtl">
				<body
					className={cn(
						"dark bg-background min-h-screen h-full flex flex-col justify-between gap-4",
						inter.className,
						cairo.className,
					)}
				>
					<div>
						<SiteHeader></SiteHeader>
						<div className="container mt-4">{children}</div>
					</div>
					<SiteFooter></SiteFooter>
				</body>
			</html>
		</ApolloWrapper>
	);
}
