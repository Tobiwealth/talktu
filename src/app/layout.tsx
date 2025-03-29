import type { Metadata } from "next";
import { Inter, Nunito, Nunito_Sans, Figtree } from "next/font/google";
import "./globals.css";
import { siteConfig } from '@/constant/config';
// import {Provider} from 'react-redux';
// import store from '@/store/index';
// import Providers from "./providers/Providers";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});
const nunito = Nunito({
	subsets: ["latin"],
	variable: "--font-nunito",
	display: "swap",
});
const nunitosans = Nunito_Sans({
	subsets: ["latin"],
	variable: "--font-nunitosans",
	weight: ["400", "700"],
	display: "swap",
});
const figtree = Figtree({
	subsets: ["latin"],
	variable: "--font-figtree",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://talktu.co"),
    title: {
	    default: siteConfig.title,
	    template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.description,
    icons: {
	    icon: [
	        '/favicon.ico?v=4',
	    ],
	    apple: [
	        '/apple-touch-icon.png?v=4',
	    ],
	    shortcut: [
	        '/apple-touch-icon.png?v=4',
	    ],
    },
    manifest: '/site.webmanifest',
    openGraph: {
	    url: siteConfig.url,
	    title: siteConfig.title,
	    description: siteConfig.description,
	    siteName: siteConfig.title,
	    images: ['/talktu.png'],
	    type: 'website',
	    locale: 'en_US',
    },
    twitter: {
	    card: 'summary_large_image',
	    title: siteConfig.title,
	    description: siteConfig.description,
	    images: ['/talktu.png'],
    },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${nunito.variable} ${nunitosans.variable} ${inter.variable} ${figtree.variable}`}
			>
				{children}
			</body>
		</html>
	);
}
