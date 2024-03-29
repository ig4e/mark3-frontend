"use client";

import { ApolloClient, ApolloLink, HttpLink } from "@apollo/client";
import {
	ApolloNextAppProvider,
	NextSSRApolloClient,
	NextSSRInMemoryCache,
	SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient() {
	const httpLink = new HttpLink({
		// uri: process.env.NODE_ENV === "development" ? "http://localhost:3000/graphql" : "https://interior-francyne-ig4e.koyeb.app/graphql",
		uri: "https://interior-francyne-ig4e.koyeb.app/graphql",
	});

	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link:
			typeof window === "undefined"
				? ApolloLink.from([
						new SSRMultipartLink({
							stripDefer: true,
						}),
						httpLink,
				  ])
				: httpLink,
	});
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
	return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
