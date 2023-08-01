import { cn } from "@/lib/utils";

export function TypographyH1({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl", className)}>{children}</h1>;
}

export function TypographyH2({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <h2 className={cn("scroll-m-20 text-3xl lg:text-4xl font-semibold tracking-tight", className)}>{children}</h2>;
}

export function TypographyH3({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>{children}</h3>;
}

export function TypographyH4({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>{children}</h4>;
}

export function TypographyP({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>{children}</p>;
}

export function TypographyBlockquote({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>{children}</blockquote>;
}

export function TypographyLead({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>;
}

export function TypographyLarge({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <h1 className={cn("text-lg font-semibold", className)}>{children}</h1>;
}

export function TypographySmall({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <small className={cn("text-sm font-medium leading-none", className)}>{children}</small>;
}

export function TypographyMuted({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
	return <h1 className={cn("text-sm text-muted-foreground", className)}>{children}</h1>;
}
