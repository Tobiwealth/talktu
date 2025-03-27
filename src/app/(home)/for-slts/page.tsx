import React from "react";
import Navbar from "../Navbar";
import FlagshipSection from "./_components/FlagshipSection";
import Footer from "../Footer";
import Hero from "./_components/Hero";

export default function page() {
	return (
		<main className="font-nunito">
			<Navbar
				logo="dark"
				backgroundColor="bg-white"
				textColor="text-deep_blue"
				hamburgerButtonColor="bg-deep_blue"
			/>
			<Hero />
			<FlagshipSection />
			<Footer />
		</main>
	);
}
