import { cn } from "@/lib/utils";

export function TypographyH1({ className, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}></h1>;
}

export function TypographyH2({ className, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return (
		<h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0", className)}></h2>
	);
}

export function TypographyH3({ className, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}></h3>;
}

export function TypographyH4({ className, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}></h4>;
}

export function TypographyP({ className, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}></p>;
}

export function TypographyBlockquote({ className, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}></blockquote>;
}

export function TypographyLead({ className, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <p className={cn("text-xl text-muted-foreground", className)}></p>;
}

export function TypographyLarge({ className, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <h1 className={cn("text-lg font-semibold", className)}></h1>;
}

export function TypographySmall({ className, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <small className={cn("text-sm font-medium leading-none", className)}></small>;
}

export function TypographyMuted({ className, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <h1 className={cn("text-sm text-muted-foreground", className)}></h1>;
}
