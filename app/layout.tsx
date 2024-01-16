import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvextClientProvider } from "@/components/providers/convex-provider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hability",
	description: "Improve your days, improve your life",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: dark)",
				url: "/logo-dark.svg",
				href: "/logo-dark.svg",
			},
			{
				media: "(prefers-color-scheme: light)",
				url: "/logo.svg",
				href: "/logo.svg",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={outfit.className}>
				<ConvextClientProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
						storageKey='hability-theme'
					>
						<Toaster position='bottom-center' />
						{children}
					</ThemeProvider>
				</ConvextClientProvider>
			</body>
		</html>
	);
}
