import type { Metadata } from "next";
import { Inter, Nunito, Nunito_Sans, Figtree } from "next/font/google";
import "./globals.css";
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
	weight: ["300", "400", "500", "600", "700", "800"],
	display: "swap",
});
const figtree = Figtree({
	subsets: ["latin"],
	variable: "--font-figtree",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Talktu",
	description: "Guide your child to start personalized online speech therapy now",
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
